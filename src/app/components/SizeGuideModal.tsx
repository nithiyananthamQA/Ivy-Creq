import { Ruler, Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

const mensTopsSizes = [
  { size: 'S', chest: '35–37', waist: '29–31', sleeve: '33' },
  { size: 'M', chest: '38–40', waist: '32–34', sleeve: '34' },
  { size: 'L', chest: '41–43', waist: '35–37', sleeve: '35' },
  { size: 'XL', chest: '44–46', waist: '38–40', sleeve: '36' },
  { size: 'XXL', chest: '47–49', waist: '41–43', sleeve: '37' },
];

const mensBottomsSizes = [
  { size: '30', waist: '30', hip: '37', inseam: '32' },
  { size: '32', waist: '32', hip: '39', inseam: '32' },
  { size: '34', waist: '34', hip: '41', inseam: '32' },
  { size: '36', waist: '36', hip: '43', inseam: '32' },
  { size: '38', waist: '38', hip: '45', inseam: '32' },
];

const womensSizes = [
  { size: 'XS', bust: '31–32', waist: '24–25', hip: '34–35' },
  { size: 'S', bust: '33–34', waist: '26–27', hip: '36–37' },
  { size: 'M', bust: '35–36', waist: '28–29', hip: '38–39' },
  { size: 'L', bust: '37–39', waist: '30–32', hip: '40–42' },
  { size: 'XL', bust: '40–42', waist: '33–35', hip: '43–45' },
];

interface SizeGuideModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ open, onClose }: SizeGuideModalProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-[680px] max-h-[85vh] overflow-y-auto bg-white p-0 rounded-none sm:rounded-lg">
        {/* Header */}
        <DialogHeader className="bg-[#1a2026] text-white px-6 py-5">
          <div className="flex items-center gap-3">
            <Ruler className="w-5 h-5 text-white/60" />
            <div>
              <DialogTitle className="text-lg font-bold text-white">Size Guide</DialogTitle>
              <DialogDescription className="text-white/50 text-xs mt-0.5">
                All measurements are in inches
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 py-5 space-y-6">
          {/* Info */}
          <div className="flex items-start gap-3 bg-[#f5f7f8] border border-[#e5e5e5] p-3">
            <Info className="w-4 h-4 text-[#1a2026] shrink-0 mt-0.5" />
            <p className="text-xs text-[#333b42]">
              Between sizes? Size up for a relaxed fit, down for a slimmer fit.
            </p>
          </div>

          {/* Men's Tops */}
          <div>
            <h3 className="text-sm font-bold text-[#1a2026] mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-black inline-block" />
              Men's Tops
            </h3>
            <div className="overflow-x-auto border border-[#e5e5e5]">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#1a2026] text-white">
                    <th className="text-left p-2.5 font-bold">Size</th>
                    <th className="text-left p-2.5 font-bold">Chest</th>
                    <th className="text-left p-2.5 font-bold">Waist</th>
                    <th className="text-left p-2.5 font-bold">Sleeve</th>
                  </tr>
                </thead>
                <tbody className="text-[#333b42]">
                  {mensTopsSizes.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f7f8]'}>
                      <td className="p-2.5 font-bold text-[#1a2026]">{row.size}</td>
                      <td className="p-2.5">{row.chest}</td>
                      <td className="p-2.5">{row.waist}</td>
                      <td className="p-2.5">{row.sleeve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Men's Bottoms */}
          <div>
            <h3 className="text-sm font-bold text-[#1a2026] mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-black inline-block" />
              Men's Bottoms
            </h3>
            <div className="overflow-x-auto border border-[#e5e5e5]">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#1a2026] text-white">
                    <th className="text-left p-2.5 font-bold">Size</th>
                    <th className="text-left p-2.5 font-bold">Waist</th>
                    <th className="text-left p-2.5 font-bold">Hip</th>
                    <th className="text-left p-2.5 font-bold">Inseam</th>
                  </tr>
                </thead>
                <tbody className="text-[#333b42]">
                  {mensBottomsSizes.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f7f8]'}>
                      <td className="p-2.5 font-bold text-[#1a2026]">{row.size}</td>
                      <td className="p-2.5">{row.waist}</td>
                      <td className="p-2.5">{row.hip}</td>
                      <td className="p-2.5">{row.inseam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Women's */}
          <div>
            <h3 className="text-sm font-bold text-[#1a2026] mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-black inline-block" />
              Women's
            </h3>
            <div className="overflow-x-auto border border-[#e5e5e5]">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#1a2026] text-white">
                    <th className="text-left p-2.5 font-bold">Size</th>
                    <th className="text-left p-2.5 font-bold">Bust</th>
                    <th className="text-left p-2.5 font-bold">Waist</th>
                    <th className="text-left p-2.5 font-bold">Hip</th>
                  </tr>
                </thead>
                <tbody className="text-[#333b42]">
                  {womensSizes.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f7f8]'}>
                      <td className="p-2.5 font-bold text-[#1a2026]">{row.size}</td>
                      <td className="p-2.5">{row.bust}</td>
                      <td className="p-2.5">{row.waist}</td>
                      <td className="p-2.5">{row.hip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
