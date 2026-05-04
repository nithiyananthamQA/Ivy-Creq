import { useState } from 'react';
import { Ruler, Info, X } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog';
import howToMeasureImg from '../../assets/guides/how-to-measure.jpeg';

const measurementGuide = [
  { size: 'XS', halfChest: 46, length: 66, sleeve: 20 },
  { size: 'S', halfChest: 49, length: 68, sleeve: 21 },
  { size: 'M', halfChest: 52, length: 70, sleeve: 22 },
  { size: 'L', halfChest: 55, length: 72, sleeve: 23 },
  { size: 'XL', halfChest: 58, length: 74, sleeve: 24 },
  { size: 'XXL', halfChest: 62, length: 76, sleeve: 25 },
  { size: '3XL', halfChest: 66, length: 78, sleeve: 26 },
];

export default function SizeGuidePage() {
  const [howToOpen, setHowToOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Size Guide"
        description="Find your perfect fit with the Ivy Crew measurement guide. All measurements in CM, with industry-standard tolerances."
      />

      <section className="bg-[#1a2026] text-white py-8 md:py-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] text-center">
          <Ruler className="w-8 h-8 mx-auto mb-3 text-white/60" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Measurement Guide</h1>
          <p className="text-white/50 text-sm max-w-lg mx-auto">All measurements in CM. Industry-standard measurement tolerances will apply.</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[800px] mx-auto">

          <div className="flex items-start gap-3 bg-[#f5f7f8] border border-[#e5e5e5] p-4 mb-8">
            <Info className="w-5 h-5 text-[#1a2026] shrink-0 mt-0.5" />
            <p className="text-sm text-[#333b42]">
              Between sizes? Size up for a relaxed fit, down for a slimmer fit. Industry-standard tolerances apply to all measurements.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#e5e5e5] mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a2026] text-white">
                  <th className="text-left p-3 font-bold">Size</th>
                  <th className="text-left p-3 font-bold">Half Chest</th>
                  <th className="text-left p-3 font-bold">Length</th>
                  <th className="text-left p-3 font-bold">Sleeve length</th>
                </tr>
              </thead>
              <tbody className="text-[#333b42]">
                {measurementGuide.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f7f8]'}>
                    <td className="p-3 font-bold text-[#1a2026]">{row.size}</td>
                    <td className="p-3 tabular-nums">{row.halfChest}</td>
                    <td className="p-3 tabular-nums">{row.length}</td>
                    <td className="p-3 tabular-nums">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={() => setHowToOpen(true)}
            className="w-full flex items-center justify-between gap-3 bg-white border border-[#1a2026] px-5 py-4 hover:bg-[#1a2026] hover:text-white transition-colors group"
          >
            <span className="flex items-center gap-3">
              <Ruler className="w-5 h-5" />
              <span className="text-base font-bold">How to Measure</span>
            </span>
            <span className="text-sm opacity-60 group-hover:opacity-100">View guide →</span>
          </button>
        </div>
      </section>

      <Dialog open={howToOpen} onOpenChange={(v) => !v && setHowToOpen(false)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[900px] max-h-[92vh] overflow-y-auto bg-white p-0 rounded-none sm:rounded-lg">
          <DialogHeader className="bg-[#1a2026] text-white px-6 py-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Ruler className="w-5 h-5 text-white/60" />
                <div>
                  <DialogTitle className="text-lg font-bold text-white">How to Measure</DialogTitle>
                  <DialogDescription className="text-white/50 text-xs mt-0.5">
                    Key measurement points
                  </DialogDescription>
                </div>
              </div>
              <button
                onClick={() => setHowToOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </DialogHeader>

          <div className="bg-[#f5f7f8] p-4 sm:p-6">
            <img
              src={howToMeasureImg}
              alt="How to measure — chest, body length, and sleeve length guide"
              className="w-full h-auto object-contain rounded"
            />
          </div>

          <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white">
            <div className="border-l-2 border-[#1a2026] pl-3">
              <p className="text-xs uppercase tracking-wider text-[#6c7782] mb-1">Chest</p>
              <p className="text-sm text-[#1a2026]">Measure 1 inch below the armhole, straight across.</p>
            </div>
            <div className="border-l-2 border-[#1a2026] pl-3">
              <p className="text-xs uppercase tracking-wider text-[#6c7782] mb-1">Body Length</p>
              <p className="text-sm text-[#1a2026]">From the high point shoulder (HPS) down to the hem.</p>
            </div>
            <div className="border-l-2 border-[#1a2026] pl-3">
              <p className="text-xs uppercase tracking-wider text-[#6c7782] mb-1">Sleeve Length</p>
              <p className="text-sm text-[#1a2026]">From the armhole seam to the cuff.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
