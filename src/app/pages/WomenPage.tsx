import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { womenProducts } from '../data/products';

export default function WomenPage() {
  return (
    <>
      <SEOHead
        title="Women's Collection"
        description="Shop women's premium dresses, tops, skorts, jackets, and more at Ivy Crew. Designed for style and performance."
      />

      {/* Hero — Elegant editorial centered layout */}
      <section className="relative bg-[#faf7f4] overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#1a2026]/[0.04] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#1a2026]/[0.03] pointer-events-none" />

        <div className="relative max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px]">
          <div className="py-5 md:py-7 lg:py-8 text-center max-w-3xl mx-auto">
            {/* Accent line */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-[#1a2026]/20" />
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#1a2026]/40">The New Edit</p>
              <div className="w-6 h-[1px] bg-[#1a2026]/20" />
            </div>

            {/* Main heading — elegant serif-feel with weight contrast */}
            <h1 className="mb-3">
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a2026] leading-[1.1]">
                Move Beautifully.
              </span>
              <span className="block text-base md:text-lg lg:text-xl font-normal text-[#1a2026]/40 mt-2 tracking-wide">
                Dress for the day you want.
              </span>
            </h1>

            <p className="text-[#1a2026]/50 text-xs md:text-sm max-w-lg mx-auto mb-5 leading-relaxed">
              Dresses that dance, skorts that swing, tops that transition from sunrise stretch to sunset plans — all without a wardrobe change.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5">
              <Link
                to="/new-arrivals"
                className="bg-[#1a2026] text-white px-8 py-2.5 font-bold text-xs hover:bg-[#333b42] transition-colors"
              >
                Shop New Arrivals
              </Link>
              <Link
                to="/best-sellers"
                className="border border-[#1a2026]/20 text-[#1a2026] px-8 py-2.5 font-bold text-xs hover:border-[#1a2026] transition-colors"
              >
                Best Sellers
              </Link>
            </div>

            {/* Horizontal feature strip */}
            <div className="flex justify-center flex-wrap gap-5 md:gap-8 text-[#1a2026]/40">
              {[
                ['Dresses', 'Court to cocktails'],
                ['Skorts', 'All-day comfort'],
                ['Tops', 'Effortless layers'],
                ['Jackets', 'Travel-ready'],
              ].map(([title, sub]) => (
                <div key={title} className="text-center">
                  <p className="text-xs font-bold text-[#1a2026]/70">{title}</p>
                  <p className="text-[9px] uppercase tracking-wider mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1a2026]/10 to-transparent" />
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a2026] mb-6 md:mb-8">
            All Women's Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link to="/new-arrivals" className="bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-900 transition-colors inline-block">
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
