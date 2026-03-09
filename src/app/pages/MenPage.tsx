import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { menProducts } from '../data/products';

export default function MenPage() {
  return (
    <>
      <SEOHead
        title="Men's Collection"
        description="Shop men's premium polos, pants, outerwear, tees, and footwear at Ivy Crew. Built for comfort and style on and off the course."
      />

      {/* Hero — Bold typographic split */}
      <section className="relative bg-[#0b0f12] text-white overflow-hidden">
        {/* Large watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[20vw] font-black text-white/[0.03] leading-none tracking-tighter">MEN</span>
        </div>

        <div className="relative max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px]">
          <div className="py-5 md:py-7 lg:py-8">
            {/* Top line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-white/30" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Spring 2026</p>
            </div>

            {/* Main heading — stacked with accent */}
            <h1 className="mb-3">
              <span className="block text-3xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                Look Sharp.
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight text-white/20 mt-1">
                Feel Nothing.
              </span>
            </h1>

            <p className="text-white/50 text-xs md:text-sm max-w-md mb-5 leading-relaxed">
              Zero restriction. Total range of motion. Fabrics so light you forget you're wearing them — until someone asks where you got that shirt.
            </p>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {['Polos', 'Pants', 'Outerwear', 'Tees', 'Footwear'].map((cat) => (
                <Link
                  key={cat}
                  to="/men"
                  className="border border-white/20 text-white/70 px-4 py-1.5 text-[10px] uppercase tracking-wider hover:bg-white hover:text-[#0b0f12] transition-all duration-300"
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/new-arrivals"
              className="inline-block bg-white text-[#0b0f12] px-8 py-2.5 font-bold text-xs hover:bg-[#e5e5e5] transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>

        {/* Decorative bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a2026] mb-6 md:mb-8">
            All Men's Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {menProducts.map((product) => (
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
