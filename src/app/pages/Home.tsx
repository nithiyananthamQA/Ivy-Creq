import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { fabricFeatures } from '../components/FabricFeatures';
import {
  newArrivals, womenProducts, menFeatured,
  imgBannerImage1, imgMensBanner,
  imgHeroSlide1, imgHeroSlide2, imgHeroSlide3,
  imgHeroSlide1Mobile, imgHeroSlide2Mobile, imgHeroSlide3Mobile,
  imgBottomBanner, imgBottomBannerMobile,
  imgCategorySolid, imgCategoryDesigner, imgCategoryClassic, imgCategoryPrinted,
  imgCategorySolidMobile, imgCategoryDesignerMobile, imgCategoryClassicMobile, imgCategoryPrintedMobile,
  imgLifestyle1a, imgLifestyle1b, imgLifestyle2a, imgLifestyle2b, imgLifestyle3a, imgLifestyle3b,
  imgLifestyle1aMobile, imgLifestyle1bMobile, imgLifestyle2aMobile, imgLifestyle2bMobile, imgLifestyle3aMobile, imgLifestyle3bMobile,
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

// 3 hero slides for auto-sliding banner; first slide is eagerly loaded for LCP.
const HERO_SLIDES: { desktop: string; mobile: string; alt: string }[] = [
  { desktop: imgHeroSlide1, mobile: imgHeroSlide1Mobile, alt: 'Ivy Crew — premium performance apparel' },
  { desktop: imgHeroSlide2, mobile: imgHeroSlide2Mobile, alt: 'Ivy Crew — engineered for the modern man' },
  { desktop: imgHeroSlide3, mobile: imgHeroSlide3Mobile, alt: 'Ivy Crew — built to move, made to stand out' },
];

function HeroBanner() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 900,
    pauseOnHover: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // Full-bleed photography hero: image fills 100vh on desktop, aspect-driven on
  // mobile. NO text overlay on the image — the photo carries the entire mood.
  // Brand statement + CTA live below in a clean white panel with generous space.
  return (
    <section className="relative w-full">
      <Suspense
        fallback={
          <div className="aspect-[16/9] md:h-screen md:aspect-auto bg-[#1a2026]" />
        }
      >
        <Slider {...settings} className="hero-slider hero-slider-full">
          {HERO_SLIDES.map((slide, i) => (
            <div key={i}>
              <picture>
                <source media="(max-width: 767px)" srcSet={slide.mobile} />
                <img
                  src={slide.desktop}
                  alt={slide.alt}
                  className="w-full aspect-[16/9] md:aspect-auto md:h-screen object-cover object-center block"
                  sizes="100vw"
                  width={2560}
                  height={1440}
                  fetchPriority={i === 0 ? 'high' : 'low'}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </picture>
            </div>
          ))}
        </Slider>
      </Suspense>

      {/* Editorial text panel below the slider — clean white space, premium typography */}
      <div className="bg-white border-t border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20 lg:py-24 text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#6c7782] mb-5 md:mb-7">
            Spring &mdash; Summer 2026
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0b0f12] leading-[1.05] tracking-tight mb-5 md:mb-7">
            Built for the way you live.
          </h1>
          <p className="text-base md:text-lg text-[#47515c] leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10">
            Premium polos &amp; tees, engineered with soft cotton blends, modern fits,
            and quiet confidence. Everyday essentials, reimagined.
          </p>
          <Link
            to="/men"
            className="inline-block bg-[#0b0f12] text-white px-10 md:px-12 py-3.5 md:py-4 font-bold text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-[#1a2026] transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Categories Section: 4 portrait tiles ---
const CATEGORY_TILES = [
  { desktop: imgCategorySolid,    mobile: imgCategorySolidMobile,    label: "Solid Polo's",    href: '/men' },
  { desktop: imgCategoryDesigner, mobile: imgCategoryDesignerMobile, label: "Designer Polo's", href: '/men' },
  { desktop: imgCategoryClassic,  mobile: imgCategoryClassicMobile,  label: "Classic Polo's",  href: '/men' },
  { desktop: imgCategoryPrinted,  mobile: imgCategoryPrintedMobile,  label: 'Printed Polo',    href: '/men' },
];

function CategoriesSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a2026]">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {CATEGORY_TILES.map((tile, i) => (
            <Link key={tile.label} to={tile.href} className="group block">
              <div className="relative aspect-[3712/4608] overflow-hidden bg-[#f5f7f8]">
                <picture>
                  <source media="(max-width: 767px)" srcSet={tile.mobile} />
                  <img
                    src={tile.desktop}
                    alt={tile.label}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    loading={i < 2 ? 'eager' : 'lazy'}
                    width={600}
                    height={745}
                  />
                </picture>
              </div>
              <p className="mt-3 text-center text-sm md:text-base text-[#1a2026] tracking-wide">
                {tile.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Lifestyle 3-set auto-slider: each slide shows 2 portrait images side-by-side ---
const LIFESTYLE_SETS: { left: { desktop: string; mobile: string }; right: { desktop: string; mobile: string } }[] = [
  {
    left:  { desktop: imgLifestyle1a, mobile: imgLifestyle1aMobile },
    right: { desktop: imgLifestyle1b, mobile: imgLifestyle1bMobile },
  },
  {
    left:  { desktop: imgLifestyle2a, mobile: imgLifestyle2aMobile },
    right: { desktop: imgLifestyle2b, mobile: imgLifestyle2bMobile },
  },
  {
    left:  { desktop: imgLifestyle3a, mobile: imgLifestyle3aMobile },
    right: { desktop: imgLifestyle3b, mobile: imgLifestyle3bMobile },
  },
];

function LifestyleSliderSection() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    pauseOnHover: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a2026]">
          Worn the Ivy Way
        </h2>
      </div>
      <div className="max-w-[1920px] mx-auto px-0 md:px-8">
        <Suspense fallback={<div className="aspect-[2/1] md:aspect-[16/9] bg-[#f5f7f8]" />}>
          <Slider {...settings} className="lifestyle-slider">
            {LIFESTYLE_SETS.map((set, i) => (
              <div key={i}>
                <div className="grid grid-cols-2 gap-1 md:gap-3 lg:gap-4">
                  <picture>
                    <source media="(max-width: 767px)" srcSet={set.left.mobile} />
                    <img
                      src={set.left.desktop}
                      alt={`Lifestyle set ${i + 1} — left`}
                      className="w-full h-full object-cover object-center aspect-[3712/4608]"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      width={900}
                      height={1117}
                    />
                  </picture>
                  <picture>
                    <source media="(max-width: 767px)" srcSet={set.right.mobile} />
                    <img
                      src={set.right.desktop}
                      alt={`Lifestyle set ${i + 1} — right`}
                      className="w-full h-full object-cover object-center aspect-[3712/4608]"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      width={900}
                      height={1117}
                    />
                  </picture>
                </div>
              </div>
            ))}
          </Slider>
        </Suspense>
      </div>
    </section>
  );
}

// --- Bottom hero banner with overlay text ---
function BottomBannerSection() {
  return (
    <section className="relative w-full">
      <div className="relative aspect-[1920/816] md:aspect-[16/9] lg:aspect-[1920/780]">
        <picture>
          <source media="(max-width: 767px)" srcSet={imgBottomBannerMobile} />
          <img
            src={imgBottomBanner}
            alt="Built to Move. Made to Stand Out."
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
            width={1920}
            height={780}
          />
        </picture>
        {/* Overlay: card on the right (desktop) / centered text (mobile) */}
        <div className="absolute inset-0 hidden md:flex items-end justify-start pb-8 lg:pb-12 px-6 lg:px-12">
          <div className="bg-black/35 backdrop-blur-[3px] border border-white/15 rounded-sm px-8 lg:px-12 py-6 lg:py-8 max-w-xl text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-2">Men's Collection</p>
            <h2 className="text-2xl lg:text-4xl font-bold mb-3 leading-tight drop-shadow-md">
              Built to Move. Made to Stand Out.
            </h2>
            <p className="text-sm lg:text-base text-white/90 mb-5 drop-shadow-sm">
              Performance essentials cut for the way you live — refined, breathable, ready for anything.
            </p>
            <Link
              to="/men"
              className="inline-block bg-white text-[#1a2026] px-6 lg:px-8 py-3 font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Shop Men's
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile text */}
      <div className="md:hidden bg-[#1a2026] text-white text-center px-5 py-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1.5">Men's Collection</p>
        <h2 className="text-xl font-bold mb-2 leading-tight">
          Built to Move. Made to Stand Out.
        </h2>
        <p className="text-xs text-white/80 mb-4 leading-snug">
          Performance essentials cut for the way you live.
        </p>
        <Link
          to="/men"
          className="inline-block bg-white text-[#1a2026] px-6 py-2.5 font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
        >
          Shop Men's
        </Link>
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
        {/* Mobile-only: image strip (no people cropped) */}
        <div className="md:hidden">
          <div className="relative aspect-[1920/816]">
            <img
              src={imgBannerImage1}
              alt="Women's Collection"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={1920}
              height={816}
            />
          </div>
          <div className="bg-[#1a2026] text-white px-5 py-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1.5">Women's Collection</p>
            <h3 className="text-xl font-bold mb-2 leading-tight">
              Move with Confidence.
            </h3>
            <p className="text-xs text-white/80 mb-4 leading-snug">
              Performance essentials cut for the way you live.
            </p>
            <Link
              to="/women"
              className="inline-block bg-white text-[#1a2026] px-6 py-2.5 font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Shop Women's
            </Link>
          </div>
        </div>

        {/* Desktop banner — image with overlay (unchanged) */}
        <div className="relative mb-6 md:mb-12 md:mx-8 hidden md:block">
          <div className="relative md:aspect-[1024/600] lg:aspect-[1920/780]">
            <img
              src={imgBannerImage1}
              alt="Women's Collection"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={1920}
              height={780}
            />

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
        {/* Mobile-only: image strip (no people cropped) */}
        <div className="md:hidden">
          <div className="relative aspect-[1920/816]">
            <img
              src={imgMensBanner}
              alt="Men's Collection"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={1920}
              height={816}
            />
          </div>
          <div className="bg-[#1a2026] text-white px-5 py-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1.5">Men's Collection</p>
            <h3 className="text-xl font-bold mb-2 leading-tight">
              Built to Move. Made to Stand Out.
            </h3>
            <p className="text-xs text-white/80 mb-4 leading-snug">
              UPF 50, 4-way stretch, quick-dry — engineered for the modern man.
            </p>
            <Link
              to="/men"
              className="inline-block bg-white text-[#1a2026] px-6 py-2.5 font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Shop Men's
            </Link>
          </div>
        </div>

        {/* Desktop banner — image with overlay (unchanged) */}
        <div className="relative mb-6 md:mb-12 md:mx-8 hidden md:block">
          <div className="relative md:aspect-[1024/600] lg:aspect-[1920/780]">
            <img
              src={imgMensBanner}
              alt="Men's Collection"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
              width={1920}
              height={700}
            />

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
            Every Ivy Crew piece is crafted with advanced fabric technology — so you look sharp and feel comfortable, all day long.
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
      <LazySection fallbackHeight="600px">
        <CategoriesSection />
      </LazySection>
      <LazySection fallbackHeight="500px">
        <NewArrivalsSection />
      </LazySection>
      <LazySection fallbackHeight="600px">
        <LifestyleSliderSection />
      </LazySection>
      <LazySection fallbackHeight="600px">
        <MensCollectionSection />
      </LazySection>
      <LazySection fallbackHeight="500px">
        <BottomBannerSection />
      </LazySection>
      {/* Women's collection hidden for launch — swap `false` to `true` to re-enable */}
      {false && (
        <LazySection fallbackHeight="600px">
          <WomensCollectionSection />
        </LazySection>
      )}
      <LazySection fallbackHeight="100px">
        <FabricTechnologySection />
      </LazySection>
    </>
  );
}
