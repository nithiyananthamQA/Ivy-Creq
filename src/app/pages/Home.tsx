import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { fabricFeatures } from '../components/FabricFeatures';
import {
  newArrivals, womenProducts, menFeatured,
  imgBannerImage, imgBannerImage1, imgMensBanner,
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
      <div className="relative aspect-[390/520] md:aspect-[1024/600] lg:aspect-[1920/700]">
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
          <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-12 pb-4 px-4">
            <div className="text-center text-white bg-black/40 backdrop-blur-[2px] border border-white/15 rounded-sm px-5 py-4">
              <h1 className="text-xl font-bold mb-1.5 leading-tight drop-shadow-md">
                Performance,&nbsp;Tailored.
              </h1>
              <p className="text-xs mb-3.5 text-white/90 leading-snug drop-shadow-sm">
                Premium apparel engineered to move with you.
              </p>
              <div className="flex gap-2.5">
                <Link to="/men" className="flex-1 bg-white text-black px-4 py-2.5 font-bold text-xs hover:bg-gray-100 transition-colors text-center">
                  Shop Men's
                </Link>
                <Link to="/women" className="flex-1 bg-white text-black px-4 py-2.5 font-bold text-xs hover:bg-gray-100 transition-colors text-center">
                  Shop Women's
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop — centered right */}
        <div className="absolute inset-0 hidden md:flex items-center justify-end">
          <div className="text-right text-white px-12 lg:px-20">
            <div className="bg-black/30 backdrop-blur-[3px] border border-white/15 rounded-sm px-10 py-10 lg:px-12 lg:py-12 max-w-2xl lg:max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-md">
                Performance,&nbsp;Tailored.
              </h1>
              <p className="text-lg mb-8 text-white/90 drop-shadow-sm">
                Premium apparel engineered to move with you — from boardroom to&nbsp;fairway.
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
      <div className="px-4 md:px-8 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a2026]">
          New Arrivals
        </h2>
      </div>

      {/* Mobile: horizontal scroll — one card at a time */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pl-4 pr-4 pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          {newArrivals.map((product) => (
            <div key={product.id} className="w-[80vw] shrink-0 snap-start">
              <ProductCard product={product} loading="eager" />
            </div>
          ))}
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

      <div className="text-center mt-8 md:mt-12 px-4">
        <Link
          to="/new-arrivals"
          className="inline-block border-2 border-[#1a2026] text-[#1a2026] px-8 py-2.5 font-bold text-xs uppercase tracking-wider hover:bg-[#1a2026] hover:text-white transition-colors"
        >
          View All New Arrivals
        </Link>
      </div>
    </section>
  );
}


function WomensCollectionSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1920px] mx-auto">
        {/* Banner — edge-to-edge on mobile, padded on desktop */}
        <div className="relative mb-6 md:mb-12 md:mx-8">
          <div className="relative aspect-[390/440] md:aspect-[1024/600] lg:aspect-[1920/780]">
            <img
              src={imgBannerImage1}
              alt="Women's Collection"
              className="w-full h-full object-cover object-left md:object-center"
              loading="lazy"
              decoding="async"
              width={1920}
              height={780}
            />
            {/* Mobile — pinned to bottom, gradient fade + glass card */}
            <div className="absolute inset-x-0 bottom-0 md:hidden">
              <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-12 pb-4 px-4">
                <div className="text-white bg-black/40 backdrop-blur-[2px] border border-white/15 rounded-sm px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 mb-1.5">Women's Collection</p>
                  <h3 className="text-lg font-bold mb-1.5 leading-tight drop-shadow-md">
                    Move with Confidence.
                  </h3>
                  <p className="text-xs text-white/90 mb-3 leading-snug drop-shadow-sm">
                    Performance essentials cut for the way you live.
                  </p>
                  <Link
                    to="/women"
                    className="inline-block bg-white text-[#1a2026] px-6 py-2.5 font-bold text-xs hover:bg-gray-200 transition-colors"
                  >
                    Shop Women's
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop — wide unified glass card with text + stats row (mirrors men's) */}
            <div className="absolute inset-x-0 bottom-0 hidden md:flex justify-center pb-6 lg:pb-10 px-4 lg:px-8">
              <div className="bg-black/30 backdrop-blur-[3px] border border-white/15 rounded-sm px-8 lg:px-12 py-5 lg:py-6 w-full max-w-7xl">
                <div className="flex items-center gap-6 lg:gap-10">
                  <div className="flex-1 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2">Women's Collection</p>
                    <h3 className="text-2xl lg:text-4xl font-bold mb-2 leading-tight drop-shadow-md">
                      Move with Confidence.
                    </h3>
                    <p className="text-base lg:text-lg text-white/90 drop-shadow-sm">
                      Performance essentials cut for the way you live — refined, breathable, ready for anything.
                    </p>
                  </div>
                  <Link
                    to="/women"
                    className="shrink-0 inline-block bg-white text-[#1a2026] px-6 lg:px-8 py-3 font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Shop Women's
                  </Link>
                </div>
                {/* Stats row inside the same card — compact */}
                <div className="mt-3 pt-3 border-t border-white/15 grid grid-cols-4 gap-2 text-white">
                  <div className="px-3 py-1 border-l border-white/15 first:border-l-0">
                    <p className="text-lg lg:text-xl font-bold drop-shadow-md leading-tight">40+</p>
                    <p className="text-xs text-white/80 mt-0.5 drop-shadow-sm">New This Season</p>
                  </div>
                  <div className="px-3 py-1 border-l border-white/15">
                    <p className="text-lg lg:text-xl font-bold drop-shadow-md leading-tight">MoveKnit</p>
                    <p className="text-xs text-white/80 mt-0.5 drop-shadow-sm">Signature Fabric</p>
                  </div>
                  <div className="px-3 py-1 border-l border-white/15">
                    <p className="text-lg lg:text-xl font-bold drop-shadow-md leading-tight">All-Day</p>
                    <p className="text-xs text-white/80 mt-0.5 drop-shadow-sm">Comfort</p>
                  </div>
                  <div className="px-3 py-1 border-l border-white/15">
                    <p className="text-lg lg:text-xl font-bold drop-shadow-md leading-tight">Free</p>
                    <p className="text-xs text-white/80 mt-0.5 drop-shadow-sm">Shipping ₹2,000+</p>
                  </div>
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

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/women"
              className="inline-block border-2 border-[#1a2026] text-[#1a2026] px-8 py-2.5 font-bold text-xs uppercase tracking-wider hover:bg-[#1a2026] hover:text-white transition-colors"
            >
              View All Women's
            </Link>
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
        {/* Banner — edge-to-edge on mobile, padded on desktop */}
        <div className="relative mb-6 md:mb-12 md:mx-8">
          <div className="relative aspect-[390/440] md:aspect-[1024/600] lg:aspect-[1920/780]">
            <img
              src={imgMensBanner}
              alt="Men's Collection"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={1920}
              height={700}
            />
            {/* Mobile — pinned to bottom, gradient fade + glass card */}
            <div className="absolute inset-x-0 bottom-0 md:hidden">
              <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-12 pb-4 px-4">
                <div className="text-white bg-black/40 backdrop-blur-[2px] border border-white/15 rounded-sm px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 mb-1.5">Men's Collection</p>
                  <h3 className="text-lg font-bold mb-1.5 leading-tight drop-shadow-md">
                    Built to Move. Made to Stand Out.
                  </h3>
                  <p className="text-xs text-white/90 mb-3 leading-snug drop-shadow-sm">
                    UPF 50, 4-way stretch, quick-dry — engineered for the modern man.
                  </p>
                  <Link
                    to="/men"
                    className="inline-block bg-white text-[#1a2026] px-6 py-2.5 font-bold text-xs hover:bg-gray-200 transition-colors"
                  >
                    Shop Men's
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop — wide unified glass card with text + stats row */}
            <div className="absolute inset-x-0 bottom-0 hidden md:flex justify-center pb-6 lg:pb-10 px-4 lg:px-8">
              <div className="bg-black/30 backdrop-blur-[3px] border border-white/15 rounded-sm px-8 lg:px-12 py-5 lg:py-6 w-full max-w-7xl">
                <div className="flex items-center gap-6 lg:gap-10">
                  <div className="flex-1 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-2">Men's Collection</p>
                    <h3 className="text-2xl lg:text-4xl font-bold mb-2 leading-tight drop-shadow-md">
                      Built to Move. Made to Stand Out.
                    </h3>
                    <p className="text-base lg:text-lg text-white/90 drop-shadow-sm">
                      UPF 50, 4-way stretch, quick-dry — engineered for the modern man, on and off the course.
                    </p>
                  </div>
                  <Link
                    to="/men"
                    className="shrink-0 inline-block bg-white text-[#1a2026] px-6 lg:px-8 py-3 font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Shop Men's
                  </Link>
                </div>
                {/* Stats row inside the same card — compact */}
                <div className="mt-3 pt-3 border-t border-white/15 grid grid-cols-4 gap-2 text-white">
                  <div className="px-3 py-1 border-l border-white/15 first:border-l-0">
                    <p className="text-lg lg:text-xl font-bold drop-shadow-md leading-tight">50+</p>
                    <p className="text-xs text-white/80 mt-0.5 drop-shadow-sm">New This Season</p>
                  </div>
                  <div className="px-3 py-1 border-l border-white/15">
                    <p className="text-lg lg:text-xl font-bold drop-shadow-md leading-tight">4-Way</p>
                    <p className="text-xs text-white/80 mt-0.5 drop-shadow-sm">Stretch</p>
                  </div>
                  <div className="px-3 py-1 border-l border-white/15">
                    <p className="text-lg lg:text-xl font-bold drop-shadow-md leading-tight">UPF 50</p>
                    <p className="text-xs text-white/80 mt-0.5 drop-shadow-sm">Sun Shield</p>
                  </div>
                  <div className="px-3 py-1 border-l border-white/15">
                    <p className="text-lg lg:text-xl font-bold drop-shadow-md leading-tight">Free</p>
                    <p className="text-xs text-white/80 mt-0.5 drop-shadow-sm">Shipping ₹2,000+</p>
                  </div>
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
              className="inline-block border-2 border-[#1a2026] text-[#1a2026] px-8 py-2.5 font-bold text-xs uppercase tracking-wider hover:bg-[#1a2026] hover:text-white transition-colors"
            >
              View All Men's
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

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

        {/* Mobile: 2-column minimal grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:hidden">
          {fabricFeatures.map(({ Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3 text-white">
                <Icon className="w-12 h-12" />
              </div>
              <p className="text-xs font-semibold text-white mb-1">{label}</p>
              <p className="text-[10px] leading-snug text-white/55">{desc}</p>
            </div>
          ))}
        </div>

        {/* Desktop: 4-per-row minimal grid with subtle dividers */}
        <div className="hidden md:grid md:grid-cols-4 gap-y-10 lg:gap-y-12 mt-2">
          {fabricFeatures.map(({ Icon, label, desc }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center px-6 ${
                i % 4 !== 0 ? 'md:border-l md:border-white/10' : ''
              }`}
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 mb-4 text-white">
                <Icon className="w-14 h-14 lg:w-16 lg:h-16" />
              </div>
              <p className="text-sm lg:text-base font-semibold text-white mb-1.5">{label}</p>
              <p className="text-xs leading-snug text-white/55">{desc}</p>
            </div>
          ))}
        </div>
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
    </>
  );
}
