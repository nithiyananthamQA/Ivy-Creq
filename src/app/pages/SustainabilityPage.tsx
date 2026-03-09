import { Leaf, Recycle, Shield, TrendingDown } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function SustainabilityPage() {
  return (
    <>
      <SEOHead
        title="Sustainability"
        description="Learn about Ivy Crew's commitment to sustainability, responsible sourcing, and reducing our environmental impact."
      />

      <section className="bg-[#1a2026] text-white py-8 md:py-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] text-center">
          <Leaf className="w-8 h-8 mx-auto mb-3 text-white/60" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Sustainability</h1>
          <p className="text-white/50 text-sm max-w-lg mx-auto">Great style and environmental responsibility, hand in hand.</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1000px] mx-auto">

          {/* Commitment Statement */}
          <div className="border-l-4 border-black pl-6 mb-10">
            <p className="text-lg md:text-xl text-[#1a2026] font-bold leading-relaxed">
              We're working toward a more sustainable future — one garment at a time.
            </p>
          </div>

          <p className="text-sm text-[#333b42] leading-relaxed mb-10">
            At Ivy Crew, we believe that great style and environmental responsibility go hand in hand. We're committed to making meaningful progress in reducing our environmental footprint while continuing to deliver the quality and comfort you expect.
          </p>

          {/* Impact Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { number: '40%', label: 'Recycled materials by 2027' },
              { number: '100%', label: 'Sustainable packaging goal' },
              { number: '25%', label: 'Carbon reduction since 2020' },
              { number: '50+', label: 'Ethical factory partners' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#f5f7f8] border border-[#e5e5e5] p-5 text-center">
                <p className="text-2xl md:text-3xl font-black text-[#1a2026]">{stat.number}</p>
                <p className="text-xs text-[#333b42] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Initiatives */}
          <h2 className="text-lg font-bold text-[#1a2026] mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-black inline-block" />
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { icon: Recycle, title: 'Responsible Materials', desc: 'We\'re increasing our use of recycled polyester, organic cotton, and other sustainably sourced materials across our product lines.' },
              { icon: TrendingDown, title: 'Reduced Waste', desc: 'From packaging to production, we\'re finding ways to minimize waste at every stage. Our packaging is made from recycled materials wherever possible.' },
              { icon: Shield, title: 'Ethical Manufacturing', desc: 'We work closely with our manufacturing partners to ensure fair labor practices and safe working conditions throughout our supply chain.' },
              { icon: Leaf, title: 'Carbon Footprint', desc: 'We\'re measuring and actively working to reduce our carbon emissions across operations, shipping, and logistics.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-[#e5e5e5] p-6 hover:border-black transition-colors">
                <Icon className="w-6 h-6 text-[#1a2026] mb-3" />
                <h3 className="font-bold text-[#1a2026] text-sm mb-2">{title}</h3>
                <p className="text-xs text-[#333b42] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="bg-[#f5f7f8] border border-[#e5e5e5] p-6 md:p-8 text-center">
            <p className="text-sm text-[#333b42] leading-relaxed max-w-lg mx-auto">
              Sustainability is a journey, and we're committed to continuous improvement. We believe small steps lead to big changes, and we're dedicated to doing our part for the planet.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
