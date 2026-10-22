// Banner images
import imgBannerImage from '../../assets/banners/homepage-hero-banner.webp';
import imgBannerImage1 from '../../assets/banners/homepage-secondary-banner.webp';
import imgBannerImage3 from '../../assets/banners/homepage-bottom-banner.webp';
import imgMensBanner from '../../assets/banners/homepage-mens-banner.webp';
// New hero auto-slider banners (3 slides)
import imgHeroSlide1 from '../../assets/banners/hero-slide-1.webp';
import imgHeroSlide2 from '../../assets/banners/hero-slide-2.webp';
import imgHeroSlide3 from '../../assets/banners/hero-slide-3.webp';
import imgHeroSlide1Mobile from '../../assets/banners/hero-slide-1-mobile.webp';
import imgHeroSlide2Mobile from '../../assets/banners/hero-slide-2-mobile.webp';
import imgHeroSlide3Mobile from '../../assets/banners/hero-slide-3-mobile.webp';
// New bottom banner (replaces old)
import imgBottomBanner from '../../assets/banners/bottom-banner.webp';
import imgBottomBannerMobile from '../../assets/banners/bottom-banner-mobile.webp';
// Category tiles (4 — solid / designer / classic / printed)
import imgCategorySolid from '../../assets/categories/category-solid.webp';
import imgCategoryDesigner from '../../assets/categories/category-designer.webp';
import imgCategoryClassic from '../../assets/categories/category-classic.webp';
import imgCategoryPrinted from '../../assets/categories/category-printed.webp';
import imgCategorySolidMobile from '../../assets/categories/category-solid-mobile.webp';
import imgCategoryDesignerMobile from '../../assets/categories/category-designer-mobile.webp';
import imgCategoryClassicMobile from '../../assets/categories/category-classic-mobile.webp';
import imgCategoryPrintedMobile from '../../assets/categories/category-printed-mobile.webp';
// Lifestyle 3-set slider (6 images, paired)
import imgLifestyle1a from '../../assets/lifestyle/lifestyle-1a.webp';
import imgLifestyle1b from '../../assets/lifestyle/lifestyle-1b.webp';
import imgLifestyle2a from '../../assets/lifestyle/lifestyle-2a.webp';
import imgLifestyle2b from '../../assets/lifestyle/lifestyle-2b.webp';
import imgLifestyle3a from '../../assets/lifestyle/lifestyle-3a.webp';
import imgLifestyle3b from '../../assets/lifestyle/lifestyle-3b.webp';
import imgLifestyle1aMobile from '../../assets/lifestyle/lifestyle-1a-mobile.webp';
import imgLifestyle1bMobile from '../../assets/lifestyle/lifestyle-1b-mobile.webp';
import imgLifestyle2aMobile from '../../assets/lifestyle/lifestyle-2a-mobile.webp';
import imgLifestyle2bMobile from '../../assets/lifestyle/lifestyle-2b-mobile.webp';
import imgLifestyle3aMobile from '../../assets/lifestyle/lifestyle-3a-mobile.webp';
import imgLifestyle3bMobile from '../../assets/lifestyle/lifestyle-3b-mobile.webp';
// Category images
import imgShopMensOuterwear from '../../assets/categories/shop-mens-outerwear.webp';
import imgShopMensPolos from '../../assets/categories/shop-mens-polos.webp';
import imgShopMensPants from '../../assets/categories/shop-mens-pants.webp';
import imgShopMensFootwear from '../../assets/categories/shop-mens-footwear.webp';
import imgShopMensTees from '../../assets/categories/shop-mens-tees.webp';
// New arrival product images
// Women's product images
import imgMoveknitDress1 from '../../assets/womens/moveknit-dress-1.webp';
import imgMoveknitDress2 from '../../assets/womens/moveknit-dress-2.webp';
import imgMoveknitTop1 from '../../assets/womens/moveknit-top-1.webp';
import imgMoveknitTop2 from '../../assets/womens/moveknit-top-2.webp';
import imgMoveknitSkort1 from '../../assets/womens/moveknit-skort-1.webp';
import imgMoveknitSkort2 from '../../assets/womens/moveknit-skort-2.webp';
import imgGameSetSkort1 from '../../assets/womens/game-set-skort-1.webp';
import imgGameSetSkort2 from '../../assets/womens/game-set-skort-2.webp';
import imgBreezeblendJacket1 from '../../assets/womens/breezeblend-jacket-1.webp';
import imgBreezeblendJacket2 from '../../assets/womens/breezeblend-jacket-2.webp';
// Footer icons
import imgIcon from '../../assets/icons/payment-methods.webp';
import imgYourPrivacyChoicesIcon from '../../assets/icons/privacy-choices.webp';

export type MenCategory = 'polos' | 'tees' | 'pants' | 'outerwear' | 'footwear';

export interface Product {
  id: number;
  name: string;
  price: string;
  image?: string;
  image1?: string;
  image2?: string;
  thumb?: string;
  images?: string[];
  hdImages?: string[];
  mobileImages?: string[];
  mobileHdImages?: string[];
  franchise?: string;
  badge?: string;
  colors: string[];
  sizes?: string[];
  description?: string;
  category?: MenCategory;
  productType?: string;
  sleeve?: string;
  fabric?: string;
  fit?: string;
  care?: string;
  origin?: string;
}

export interface Category {
  name: string;
  image: string;
}


const WOMENS_DEFAULTS = {
  fit: 'Regular Fit',
  care: 'Machine Wash Cold',
  origin: 'Made in India',
};

export const womenProducts: Product[] = [
  {
    id: 201,
    name: 'MoveKnit Sleeveless Printed Dress',
    price: '₹1,699',
    image1: imgMoveknitDress1,
    image2: imgMoveknitDress2,
    franchise: "WOMEN'S",
    colors: ['#2e3652', '#cddeed'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A sleeveless printed dress featuring MoveKnit fabric for all-day comfort and effortless style on or off the court.',
    productType: 'Dress',
    sleeve: 'Sleeveless',
    fabric: 'MoveKnit',
    ...WOMENS_DEFAULTS,
  },
  {
    id: 202,
    name: 'Moveknit Rib Limitless Top',
    price: '₹1,199',
    image1: imgMoveknitTop1,
    image2: imgMoveknitTop2,
    franchise: "WOMEN'S",
    colors: ['#3a3c3f', '#dcdbd9'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Ribbed MoveKnit fabric creates a flattering, body-skimming fit that stretches and recovers with every movement.',
    productType: 'Top',
    sleeve: 'Sleeveless',
    fabric: 'Ribbed MoveKnit',
    ...WOMENS_DEFAULTS,
    fit: 'Body-Skimming',
  },
  {
    id: 203,
    name: 'Moveknit Rib Limitless Skort',
    price: '₹1,299',
    image1: imgMoveknitSkort1,
    image2: imgMoveknitSkort2,
    franchise: "WOMEN'S",
    colors: ['#1d3f43', '#447ca0'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'The Limitless Skort pairs the look of a skirt with built-in shorts for confident coverage during any activity.',
    productType: 'Skort',
    fabric: 'Ribbed MoveKnit',
    ...WOMENS_DEFAULTS,
  },
  {
    id: 204,
    name: 'Moveknit Game Set Match Skort 2.0',
    price: '₹1,299',
    image1: imgGameSetSkort1,
    image2: imgGameSetSkort2,
    franchise: "WOMEN'S",
    badge: 'NEW',
    colors: ['#000000', '#ffffff'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Upgraded with softer MoveKnit fabric and a refined waistband, the Game Set Match Skort 2.0 is ready for match day.',
    productType: 'Skort',
    fabric: 'MoveKnit',
    ...WOMENS_DEFAULTS,
  },
  {
    id: 205,
    name: 'BreezeBlend Travel Day Jacket',
    price: '₹2,499',
    image1: imgBreezeblendJacket1,
    image2: imgBreezeblendJacket2,
    franchise: "WOMEN'S",
    colors: ['#cdcbcc', '#66676d', '#bfada8', '#525449'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Lightweight BreezeBlend fabric makes this the ideal travel companion — packable, breathable, and endlessly versatile.',
    productType: 'Jacket',
    sleeve: 'Long Sleeve',
    fabric: 'BreezeBlend',
    ...WOMENS_DEFAULTS,
  },
];

// T-shirt tiers — loaded via glob (filenames: tshirt-<n>-<idx>.webp).
// 5-tier pipeline: mens-thumb / mens / mens-hd / mens-mobile / mens-mobile-hd.
const tshirtThumbGlob = import.meta.glob<{ default: string }>('../../assets/mens-thumb/tshirt-*.webp', { eager: true });
const tshirtStdGlob = import.meta.glob<{ default: string }>('../../assets/mens/tshirt-*.webp', { eager: true });
const tshirtHdGlob = import.meta.glob<{ default: string }>('../../assets/mens-hd/tshirt-*.webp', { eager: true });

function tshirtLookup(globMap: Record<string, { default: string }>, filename: string): string | undefined {
  for (const [key, mod] of Object.entries(globMap)) {
    if (key.endsWith('/' + filename)) return mod.default;
  }
  return undefined;
}

function tshirtSeries(globMap: Record<string, { default: string }>, productNum: number): string[] {
  const out: string[] = [];
  for (let i = 1; i <= 12; i++) {
    const url = tshirtLookup(globMap, `tshirt-${productNum}-${i}.webp`);
    if (!url) break;
    out.push(url);
  }
  return out;
}

// One unique name per t-shirt, in image order (index 0 = tshirt-1). Names drive the
// product URL slug, so each must stay unique. Other metadata below is still placeholder pools.
const TSHIRT_NAMES = [
  'Denim Blue Micro Print Polo Tee',
  'Sage Green Textured Print Polo Tee',
  'Blush Pink Floral Print Polo Tee',
  'Ivory Micro Print Polo Tee',
  'Berry Floral Print Polo Tee',
  'Blue Abstract Print Polo Tee',
  'White Leaf Print Polo Tee',
  'Sky Blue Mountain Stripe Polo Tee',
  'Green Black Colour Block Polo Tee',
  'Black Neon Leaf Panel Polo Tee',
  'Black Neon Badge Polo Tee',
  'Olive Brown Solid Polo Tee',
  'Aqua Floral Print Polo Tee',
  'Navy Tipped Placket Polo Tee',
  'Olive Pinstripe Polo Tee',
  'Sage Green Solid Polo Tee',
  'Lilac Floral Line Art Polo Tee',
  'Green Cream Chevron Polo Tee',
  'Black Tonal Print Polo Tee',
  'Sky Blue Coral Colour Block Polo Tee',
  'Maroon Solid Polo Tee',
  'Navy Mountain Stripe Polo Tee',
  'Navy Solid Polo Tee',
  'Sky Blue Chevron Polo Tee',
  'Petrol Blue Solid Polo Tee',
  'Peach Pocket Polo Tee',
  'Navy Striped Polo Tee',
  'White Solid Polo Tee',
  'Charcoal Solid Polo Tee',
  'Cream Solid Polo Tee',
  'Charcoal Striped Polo Tee',
  'Pink Floral Line Art Polo Tee',
  'Rose Pink Solid Polo Tee',
  'Mustard Solid Polo Tee',
  'Pink Side Print Polo Tee',
  'White Blue Gradient Stripe Polo Tee',
  'Mustard Colour Block Polo Tee',
  'Rust Blue Chevron Polo Tee',
  'Mint Motif Print Polo Tee',
  'Aqua Solid Polo Tee',
  'Yellow Chest Graphic Polo Tee',
  'Coral Melange Polo Tee',
  'Olive Leaf Print Polo Tee',
  'Olive Green Solid Polo Tee',
  'Navy Oar Graphic Polo Tee',
  'Coral Diagonal Colour Block Polo Tee',
  'Sky Blue Oar Graphic Polo Tee',
  'Black Solid Polo Tee',
  'Off White Solid Polo Tee',
  'Grey Wave Line Polo Tee',
  'Sky Blue Wave Panel Polo Tee',
  'White Red Navy Diagonal Polo Tee',
  'White Floral Line Art Polo Tee',
  'Black Contrast Collar Polo Tee',
  'Red Navy Colour Block Polo Tee',
  'Baby Pink Solid Polo Tee',
  'Black Jersey Polo Tee',
  'Grey Melange Polo Tee',
  'Red Tipped Collar Polo Tee',
  'Mustard Motif Print Polo Tee',
  'Black Striped Collar Polo Tee',
  'Raspberry Tipped Collar Polo Tee',
  'Black Orange Tipped Polo Tee',
  'Midnight Neon Tipped Polo Tee',
  'Bottle Green Tipped Polo Tee',
  'Navy Printed Collar Polo Tee',
  'Sage Botanical Print Polo Tee',
  'White Pink Collar Polo Tee',
  'Ice Blue Solid Polo Tee',
  'Cobalt Twin Tipped Polo Tee',
  'White Mountain Stripe Polo Tee',
  'Ivory Blue Stripe Polo Tee',
  'White Red Brush Stripe Polo Tee',
  'Beige Wave Stripe Polo Tee',
  'White Motif Print Polo Tee',
  'Mint Solid Polo Tee',
  'White Classic Polo Tee',
];
const TSHIRT_PRICE_POOL = ['₹799', '₹899', '₹999', '₹1,099', '₹1,199', '₹1,299', '₹1,399'];
const TSHIRT_COLOR_POOL: string[][] = [
  ['#1a2026', '#3a3c3f'],
  ['#f0ede8', '#cdcbcc'],
  ['#8fa68a', '#6b8a66'],
  ['#4a6e8a', '#1d3f43'],
  ['#8b7355', '#6b5a42'],
  ['#c27a8a', '#8b4d5e'],
  ['#7aacaa', '#5a8c8a'],
  ['#1a2040', '#e05a30'],
  ['#8a8a6e', '#6b6b52'],
  ['#525449', '#bccbcf'],
  ['#2d5a3d', '#1a2026'],
  ['#d4a0a0', '#c27a8a'],
];
const TSHIRT_DESCRIPTIONS = [
  'Premium cotton tee with a tailored fit. Soft, breathable fabric for everyday comfort.',
  'Effortless everyday tee crafted from ultra-soft cotton blend. A true wardrobe essential.',
  'Lightweight and breathable, this tee pairs clean lines with a modern relaxed fit.',
  'Built for comfort with moisture-wicking performance fabric and a clean silhouette.',
  'Soft-touch fabric and a refined cut make this an instant rotation favorite.',
];
const tshirtBadge = (i: number): string | undefined => {
  if (i % 13 === 0) return 'NEW';
  if (i % 19 === 0) return 'BEST SELLER';
  return undefined;
};

const menTshirts: Product[] = Array.from({ length: 77 }, (_, i) => {
  const n = i + 1;
  const std = tshirtSeries(tshirtStdGlob, n);
  const hd = tshirtSeries(tshirtHdGlob, n);
  const thumb = tshirtLookup(tshirtThumbGlob, `tshirt-${n}-1.webp`);
  return {
    id: 400 + n,
    name: TSHIRT_NAMES[i],
    price: TSHIRT_PRICE_POOL[i % TSHIRT_PRICE_POOL.length],
    image1: std[0],
    image2: std[1] ?? std[0],
    thumb,
    images: std,
    hdImages: hd,
    franchise: "MEN'S",
    badge: tshirtBadge(i),
    colors: TSHIRT_COLOR_POOL[i % TSHIRT_COLOR_POOL.length],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: TSHIRT_DESCRIPTIONS[i % TSHIRT_DESCRIPTIONS.length],
    category: 'tees',
    productType: 'T-Shirt',
    sleeve: 'Half Sleeve',
    fabric: 'Premium Cotton Blend',
    fit: 'Regular Fit',
    care: 'Machine Wash Cold',
    origin: 'Made in India',
  };
});

export const menProducts: Product[] = [...menTshirts];

export const categories: Category[] = [
  { name: "Shop Men's Outerwear", image: imgShopMensOuterwear },
  { name: "Shop Men's Polos", image: imgShopMensPolos },
  { name: "Shop Men's Pants", image: imgShopMensPants },
  { name: "Shop Men's Footwear", image: imgShopMensFootwear },
  { name: "Shop Men's Tees", image: imgShopMensTees },
];

// Featured men's products for homepage — diverse mix: different models, colours, and poses.
// Looked up by product id (id = 400 + tshirt number) so picks survive any reordering.
const featuredIds = [423, 441, 438, 446, 465, 466, 432, 414, 455, 467];
export const menFeatured: Product[] = featuredIds
  .map(id => menProducts.find(p => p.id === id))
  .filter((p): p is Product => p !== undefined);

// New Arrivals — curated picks (different models + colours from featured).
const newArrivalIds = [413, 436, 452, 409];
export const newArrivals: Product[] = newArrivalIds
  .map(id => menProducts.find(p => p.id === id))
  .filter((p): p is Product => p !== undefined);

export const allProducts: Product[] = [...womenProducts, ...menProducts];

export function getProductById(id: number): Product | undefined {
  return allProducts.find(p => p.id === id);
}

// URL slug from the product name, e.g. "Classic Crew Tee 01" -> "classic-crew-tee-01".
// Keep in sync with slugify() in scripts/generate-sitemap.mjs.
export function getProductSlug(product: Product): string {
  return product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => getProductSlug(p) === slug);
}

// Mobile-optimized images (loaded via glob for zero-config mapping)
const mobileGallery = import.meta.glob<{ default: string }>('../../assets/mens-mobile/*.webp', { eager: true });
const mobileHd = import.meta.glob<{ default: string }>('../../assets/mens-mobile-hd/*.webp', { eager: true });

function getMobilePath(desktopPath: string, globMap: Record<string, { default: string }>): string {
  const filename = desktopPath.split('/').pop()?.split('?')[0] || '';
  for (const [key, mod] of Object.entries(globMap)) {
    if (key.endsWith('/' + filename)) return mod.default;
  }
  return desktopPath; // fallback to desktop
}

export function getMobileImages(product: Product): string[] {
  const imgs = product.images || [];
  return imgs.map(src => getMobilePath(src, mobileGallery));
}

export function getMobileHdImages(product: Product): string[] {
  const hdImgs = product.hdImages || product.images || [];
  return hdImgs.map(src => getMobilePath(src, mobileHd));
}

export {
  imgBannerImage,
  imgBannerImage1,
  imgBannerImage3,
  imgMensBanner,
  imgIcon,
  imgYourPrivacyChoicesIcon,
  // Hero slider
  imgHeroSlide1,
  imgHeroSlide2,
  imgHeroSlide3,
  imgHeroSlide1Mobile,
  imgHeroSlide2Mobile,
  imgHeroSlide3Mobile,
  // Bottom banner
  imgBottomBanner,
  imgBottomBannerMobile,
  // Category tiles
  imgCategorySolid,
  imgCategoryDesigner,
  imgCategoryClassic,
  imgCategoryPrinted,
  imgCategorySolidMobile,
  imgCategoryDesignerMobile,
  imgCategoryClassicMobile,
  imgCategoryPrintedMobile,
  // Lifestyle slider
  imgLifestyle1a,
  imgLifestyle1b,
  imgLifestyle2a,
  imgLifestyle2b,
  imgLifestyle3a,
  imgLifestyle3b,
  imgLifestyle1aMobile,
  imgLifestyle1bMobile,
  imgLifestyle2aMobile,
  imgLifestyle2bMobile,
  imgLifestyle3aMobile,
  imgLifestyle3bMobile,
};
