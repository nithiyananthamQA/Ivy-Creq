import { Ruler, Info } from 'lucide-react';
import SEOHead from '../components/SEOHead';

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

export default function SizeGuidePage() {
  return (
    <>
      <SEOHead
        title="Size Guide"
        description="Find your perfect fit with the TravisMathew size guide. Size charts for men's and women's tops, bottoms, and outerwear."
      />

      <section className="bg-[#1a2026] text-white py-8 md:py-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] text-center">
          <Ruler className="w-8 h-8 mx-auto mb-3 text-white/60" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Size Guide</h1>
          <p className="text-white/50 text-sm max-w-lg mx-auto">Find your perfect fit. All measurements are in inches.</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1000px] mx-auto">

          <div className="flex items-start gap-3 bg-[#f5f7f8] border border-[#e5e5e5] p-4 mb-10">
            <Info className="w-5 h-5 text-[#1a2026] shrink-0 mt-0.5" />
            <p className="text-sm text-[#333b42]">
              If you're between sizes, we recommend sizing up for a relaxed fit or sizing down for a slimmer fit. For the most accurate results, measure yourself and compare to the charts below.
            </p>
          </div>

          <div className="space-y-10">
            {/* Men's Tops */}
            <div>
              <h2 className="text-lg font-bold text-[#1a2026] mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-black inline-block" />
                Men's Tops
              </h2>
              <div className="overflow-x-auto border border-[#e5e5e5]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1a2026] text-white">
                      <th className="text-left p-3 font-bold">Size</th>
                      <th className="text-left p-3 font-bold">Chest</th>
                      <th className="text-left p-3 font-bold">Waist</th>
                      <th className="text-left p-3 font-bold">Sleeve</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#333b42]">
                    {mensTopsSizes.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f7f8]'}>
                        <td className="p-3 font-bold text-[#1a2026]">{row.size}</td>
                        <td className="p-3">{row.chest}</td>
                        <td className="p-3">{row.waist}</td>
                        <td className="p-3">{row.sleeve}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Men's Bottoms */}
            <div>
              <h2 className="text-lg font-bold text-[#1a2026] mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-black inline-block" />
                Men's Bottoms
              </h2>
              <div className="overflow-x-auto border border-[#e5e5e5]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1a2026] text-white">
                      <th className="text-left p-3 font-bold">Size</th>
                      <th className="text-left p-3 font-bold">Waist</th>
                      <th className="text-left p-3 font-bold">Hip</th>
                      <th className="text-left p-3 font-bold">Inseam</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#333b42]">
                    {mensBottomsSizes.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f7f8]'}>
                        <td className="p-3 font-bold text-[#1a2026]">{row.size}</td>
                        <td className="p-3">{row.waist}</td>
                        <td className="p-3">{row.hip}</td>
                        <td className="p-3">{row.inseam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Women's */}
            <div>
              <h2 className="text-lg font-bold text-[#1a2026] mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-black inline-block" />
                Women's
              </h2>
              <div className="overflow-x-auto border border-[#e5e5e5]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1a2026] text-white">
                      <th className="text-left p-3 font-bold">Size</th>
                      <th className="text-left p-3 font-bold">Bust</th>
                      <th className="text-left p-3 font-bold">Waist</th>
                      <th className="text-left p-3 font-bold">Hip</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#333b42]">
                    {womensSizes.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f7f8]'}>
                        <td className="p-3 font-bold text-[#1a2026]">{row.size}</td>
                        <td className="p-3">{row.bust}</td>
                        <td className="p-3">{row.waist}</td>
                        <td className="p-3">{row.hip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* How to Measure */}
          <div className="mt-10 border border-[#e5e5e5] p-6">
            <h2 className="text-lg font-bold text-[#1a2026] mb-4">How to Measure</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Chest', desc: 'Measure around the fullest part of your chest, keeping the tape level.' },
                { step: '02', title: 'Waist', desc: 'Measure around your natural waistline, keeping the tape comfortably loose.' },
                { step: '03', title: 'Hip', desc: 'Measure around the fullest part of your hips.' },
                { step: '04', title: 'Inseam', desc: 'Measure from the crotch seam to the bottom of the leg.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="text-2xl font-black text-[#1a2026]/10">{item.step}</span>
                  <h3 className="font-bold text-[#1a2026] text-sm mt-1 mb-1">{item.title}</h3>
                  <p className="text-xs text-[#333b42]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
