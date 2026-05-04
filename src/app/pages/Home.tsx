import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Shield, Sparkles, Sun, Maximize2, Droplets, Wind, Waves, Scissors } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import {
  newArrivals, womenProducts, menFeatured,
  imgBannerImage, imgBannerImage1, imgBannerImage3,
} from '../data/products';

const Slider = lazy(() => import('react-slick'));

/** Renders children only after the section scrolls near the viewport */
function LazySection({ children, fallbackHeight = '200px' }: { children: React.ReactNode; fallbackHeight?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? children : <div style={{ minHeight: fallbackHeight }} />}
    </div>
  );
}

function HeroBanner() {
  return (
    <section className="relative w-full">
      <div className="relative aspect-[390/500] md:aspect-[1024/600] lg:aspect-[1920/700]">
        <img
          src={imgBannerImage}
          alt="Ivy Crew — Premium performance apparel for men and women"
          className="w-full h-full object-cover object-[30%_center] md:object-center"
          sizes="100vw"
          width={1920}
          height={700}
          fetchPriority="high"
        />
        {/* Mobile — pinned to bottom with gradient fade */}
        <div className="absolute inset-x-0 bottom-0 md:hidden">
          <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-16 pb-5 px-4">
            <div className="text-right text-white bg-black/40 backdrop-blur-[2px] border border-white/15 rounded-sm px-5 py-5">
              <h1 className="text-2xl font-bold mb-2 drop-shadow-md">
                Look Sharp. Feel&nbsp;Unstoppable.
              </h1>
              <p className="text-sm mb-4 text-white/90 drop-shadow-sm">
                Premium apparel engineered with performance fabrics — so you look your best from the office to the weekend.
              </p>
              <div className="flex flex-col gap-3 items-stretch">
                <Link to="/men" className="bg-white text-black px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors text-center">
                  Shop Men's Collection
                </Link>
                <Link to="/women" className="bg-white text-black px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors text-center">
                  Shop Women's Collection
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop — centered right */}
        <div className="absolute inset-0 hidden md:flex items-center justify-end">
          <div className="text-right text-white px-12 lg:px-20">
            <div className="bg-black/30 backdrop-blur-[3px] border border-white/15 rounded-sm px-10 py-10 lg:px-12 lg:py-12 max-w-xl lg:max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-md">
                Look Sharp. Feel&nbsp;Unstoppable.
              </h1>
              <p className="text-lg mb-8 text-white/90 drop-shadow-sm">
                Premium apparel engineered with performance fabrics — so you look your best from the office to the weekend.
              </p>
              <div className="flex flex-row gap-4 justify-end">
                <Link to="/men" className="bg-white text-black px-6 lg:px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors text-center whitespace-nowrap">
                  Shop Men's Collection
                </Link>
                <Link to="/women" className="bg-white text-black px-6 lg:px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors text-center whitespace-nowrap">
                  Shop Women's Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewArrivalsSection() {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 max-w-[1920px] mx-auto overflow-x-clip">
      <div className="px-4 md:px-8 flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a2026]">
          New Arrivals
        </h2>
        <Link to="/new-arrivals" className="hidden md:inline-block text-sm font-bold text-[#1a2026] border border-[#1a2026] px-5 py-2 hover:bg-[#1a2026] hover:text-white transition-colors">
          View All
        </Link>
      </div>

      {/* Mobile: horizontal scroll — one card at a time */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pl-4 pr-4 pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          {newArrivals.map((product) => (
            <div key={product.id} className="w-[80vw] shrink-0 snap-start">
              <ProductCard product={product} loading="eager" />
            </div>
          ))}
          <Link to="/new-arrivals" className="w-[50vw] shrink-0 snap-start flex flex-col items-center justify-center bg-[#f5f7f8] border border-[#e5e5e5] active:border-black transition-colors rounded">
            <span className="text-sm font-bold text-[#1a2026] mb-1">View All</span>
            <span className="text-xs text-[#6c7782]">New Arrivals {'\u2192'}</span>
          </Link>
        </div>
      </div>

      {/* Desktop: slider */}
      <div className="hidden md:block px-8">
        <Suspense fallback={<div className="h-[460px]" />}>
          <Slider {...sliderSettings} className="new-arrivals-slider">
            {newArrivals.map((product) => (
              <div key={product.id} className="px-2">
                <ProductCard product={product} loading="eager" />
              </div>
            ))}
          </Slider>
        </Suspense>
      </div>
    </section>
  );
}


function WomensCollectionSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#f5f7f8]">
      <div className="max-w-[1920px] mx-auto">
        {/* Banner — edge-to-edge on mobile, padded on desktop */}
        <div className="relative mb-6 md:mb-12 md:mx-8">
          <div className="relative aspect-[390/300] md:aspect-[1024/400] lg:aspect-[1920/500]">
            <img
              src={imgBannerImage1}
              alt="Women's Collection"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={1920}
              height={500}
            />
            {/* Mobile — pinned to bottom, wider glass card */}
            <div className="absolute inset-x-0 bottom-0 md:hidden">
              <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-14 pb-4 px-3">
                <div className="text-white text-right bg-black/40 backdrop-blur-[2px] border border-white/15 rounded-sm px-5 py-5 w-[90%] ml-auto">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 mb-1.5">Women's Collection</p>
                  <h3 className="text-xl font-bold mb-2 leading-tight drop-shadow-md">
                    Effortless Style, All Day
                  </h3>
                  <p className="text-xs text-white/90 mb-4 drop-shadow-sm">
                    Versatile layers and everyday essentials in performance fabrics that keep you cool, dry, and confident.
                  </p>
                  <Link
                    to="/women"
                    className="inline-block bg-white text-[#1a2026] px-8 py-3 font-bold text-sm hover:bg-gray-200 transition-colors"
                  >
                    Shop Women's
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop — centered right */}
            <div className="absolute inset-0 hidden md:flex items-center justify-end">
              <div className="text-white px-12 lg:px-20 max-w-md lg:max-w-lg text-right">
                <div className="bg-black/30 backdrop-blur-[3px] border border-white/15 rounded-sm px-8 py-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2">Women's Collection</p>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight drop-shadow-md">
                    Effortless Style, All Day
                  </h3>
                  <p className="text-base text-white/90 mb-6 drop-shadow-sm">
                    Versatile layers and everyday essentials in performance fabrics that keep you cool, dry, and confident.
                  </p>
                  <Link
                    to="/women"
                    className="inline-block bg-white text-[#1a2026] px-8 py-3 font-bold text-sm hover:bg-gray-200 transition-colors"
                  >
                    Shop Women's
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a2026] mb-6 md:mb-8">
            Women's Collection
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MensCollectionSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1920px] mx-auto">
        {/* Content Banner — edge-to-edge on mobile */}
        <div className="bg-[#1a2026] text-white py-10 md:py-14 px-6 md:px-12 mb-6 md:mb-12 md:mx-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-3">Men's Collection</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Built to Perform,<br />Made to Impress
              </h2>
              <p className="text-white/70 text-sm md:text-base max-w-md mb-6">
                Premium fabrics with UPF protection, 4-way stretch, and quick-dry technology — modern fits for every occasion.
              </p>
              <Link
                to="/men"
                className="inline-block bg-white text-[#1a2026] px-8 py-3 font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                Shop Men's
              </Link>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm p-5 border border-white/10 hover:border-white/30 transition-colors duration-300">
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-xs text-white/60 mt-1">New Styles This Season</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 border border-white/10 hover:border-white/30 transition-colors duration-300">
                  <p className="text-2xl font-bold">4-Way</p>
                  <p className="text-xs text-white/60 mt-1">Stretch Fabric</p>
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm p-5 border border-white/10 hover:border-white/30 transition-colors duration-300">
                  <p className="text-2xl font-bold">UPF 50</p>
                  <p className="text-xs text-white/60 mt-1">Sun Protection</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 border border-white/10 hover:border-white/30 transition-colors duration-300">
                  <p className="text-2xl font-bold">Free</p>
                  <p className="text-xs text-white/60 mt-1">Shipping ₹2,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
            {menFeatured.map((product, index) => (
              <ProductCard key={product.id} product={product} loading={index < 2 ? 'eager' : 'lazy'} />
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/men"
              className="inline-block border-2 border-[#1a2026] text-[#1a2026] px-10 py-3 font-bold text-sm hover:bg-[#1a2026] hover:text-white transition-colors"
            >
              View All Men's
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const fabricFeatures = [
  { icon: Shield, label: 'Durable', desc: 'Built to last through every wear and wash' },
  { icon: Sparkles, label: 'Easy Care', desc: 'Machine washable, minimal ironing needed' },
  { icon: Sun, label: 'UV Protection', desc: 'UPF 30+ rated sun shielding fabric' },
  { icon: Maximize2, label: 'Dynamic Stretch', desc: '4-way stretch moves with your body' },
  { icon: Droplets, label: 'Quick Dry', desc: 'Moisture-wicking, fast-drying technology' },
  { icon: Wind, label: 'Cool Comfort', desc: 'Breathable fabric keeps you cool all day' },
  { icon: Waves, label: 'Wrinkle Resistant', desc: 'Stays crisp from morning to night' },
  { icon: Scissors, label: 'Performance Finish', desc: 'Premium detailing on every stitch' },
];

function FabricTechnologySection() {
  return (
    <section className="bg-[#1a2026] text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
            Ivy Crew Fabric Technology
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Engineered for Performance
          </h2>
          <p className="text-sm md:text-base text-white/60 max-w-lg mx-auto">
            Every Ivy Crew polo is crafted with advanced fabric technology — so you look sharp and feel comfortable, all day long.
          </p>
        </div>

        {/* Mobile: 2-column grid with cards */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {fabricFeatures.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-white/[0.06] border border-white/10 rounded-sm p-4 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2.5">
                <Icon className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold text-white mb-1">{label}</p>
              <p className="text-[10px] leading-snug text-white/50">{desc}</p>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal strip with dividers */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-8 gap-0">
          {fabricFeatures.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center px-4 lg:px-5 py-6 ${
                i > 0 ? 'border-l border-white/10' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold text-white mb-1.5">{label}</p>
              <p className="text-[10px] leading-snug text-white/45">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomBanner() {
  return (
    <section className="relative w-full">
      <div className="relative aspect-[390/400] md:aspect-[1024/500] lg:aspect-[1920/600]">
        <img
          src={imgBannerImage3}
          alt="Explore More"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={1920}
          height={600}
        />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Ivy Crew — Premium Performance Apparel for Men & Women"
        description="Shop men's and women's premium performance apparel at Ivy Crew. UV-protective, quick-dry, wrinkle-resistant clothing built for style and comfort. Free shipping on orders ₹2,000+."
      />
      <HeroBanner />
      <NewArrivalsSection />
      <MensCollectionSection />
      <LazySection fallbackHeight="600px">
        <WomensCollectionSection />
      </LazySection>
      <LazySection fallbackHeight="100px">
        <FabricTechnologySection />
      </LazySection>
      <LazySection fallbackHeight="400px">
        <BottomBanner />
      </LazySection>
    </>
  );
}
