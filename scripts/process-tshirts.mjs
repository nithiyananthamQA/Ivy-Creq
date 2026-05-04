import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'T-shirts');
const ASSETS = path.join(ROOT, 'src', 'assets');

const TIERS = [
  { dir: 'mens-thumb',     width: 400,  quality: 70 },
  { dir: 'mens',           width: 800,  quality: 75 },
  { dir: 'mens-hd',        width: 1600, quality: 85 },
  { dir: 'mens-mobile',    width: 600,  quality: 70 },
  { dir: 'mens-mobile-hd', width: 1000, quality: 82 },
];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processOne(srcFile, slug, idx) {
  const buf = await fs.readFile(srcFile);
  const base = sharp(buf, { failOn: 'none' }).flatten({ background: '#ffffff' });
  await Promise.all(
    TIERS.map(async (t) => {
      const out = path.join(ASSETS, t.dir, `${slug}-${idx}.webp`);
      await base
        .clone()
        .resize({ width: t.width, withoutEnlargement: true })
        .webp({ quality: t.quality, effort: 4 })
        .toFile(out);
    })
  );
}

async function main() {
  for (const t of TIERS) await ensureDir(path.join(ASSETS, t.dir));

  const dirs = (await fs.readdir(SRC, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && d.name.startsWith('product '))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1]));

  console.log(`Processing ${dirs.length} products (writing alongside existing files)...`);
  let done = 0;
  const t0 = Date.now();

  const concurrency = 4;
  let i = 0;
  async function worker() {
    while (i < dirs.length) {
      const my = i++;
      const d = dirs[my];
      const productNum = parseInt(d.split(' ')[1]);
      const slug = `tshirt-${productNum}`;
      const files = (await fs.readdir(path.join(SRC, d)))
        .filter((f) => f.toLowerCase().endsWith('.png'))
        .sort((a, b) => parseInt(a) - parseInt(b));

      for (let k = 0; k < files.length; k++) {
        const idx = k + 1;
        await processOne(path.join(SRC, d, files[k]), slug, idx);
      }
      done++;
      const elapsed = (Date.now() - t0) / 1000;
      const eta = (elapsed / done) * (dirs.length - done);
      console.log(`[${done}/${dirs.length}] ${slug} (${files.length} imgs) — ${elapsed.toFixed(0)}s elapsed, ~${eta.toFixed(0)}s left`);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  console.log(`Done in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
