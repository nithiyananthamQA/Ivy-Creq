import { lazy, Suspense } from 'react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import {
  newArrivals, womenProducts, menProducts,
  imgBannerImage, imgBannerImage1, imgBannerImage3,
} from '../data/products';

const Slider = lazy(() => import('react-slick'));

function HeroBanner() {
  return (
    <section className="relative w-full">
      <div className="relative aspect-[390/500] md:aspect-[1024/600] lg:aspect-[1920/700]">
        <img
          src={imgBannerImage}
          alt="Spring is in the Air — Shop new styles for the season ahead"
          className="w-full h-full object-cover object-[30%_center] md:object-center"
          fetchPriority="high"
          sizes="100vw"
          width={1920}
          height={700}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Spring is in the Air
            </h1>
            <p className="text-base md:text-lg mb-6 lg:mb-8">
              And even if it isn't, we can dream courtesy of new styles built for the season ahead.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link to="/new-arrivals" className="bg-white text-black px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors min-w-[260px] md:min-w-[270px] text-center">
                Shop Men's New Arrivals
              </Link>
              <Link to="/women" className="bg-white text-black px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors min-w-[260px] md:min-w-[270px] text-center">
                Shop Women's New Arrivals
              </Link>
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
              <ProductCard product={product} />
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
                <ProductCard product={product} />
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
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="text-white px-6 md:px-12 lg:px-20 max-w-md lg:max-w-lg text-right">
                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 mb-2">Women's Collection</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                  Effortless Style
                </h3>
                <p className="text-sm md:text-base text-white/80 mb-6">
                  From versatile layers to everyday essentials — discover pieces designed to move with you.
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
                Built for<br />Every Day
              </h2>
              <p className="text-white/70 text-sm md:text-base max-w-md mb-6">
                From the course to the coast — premium fabrics and modern fits designed to move with you, wherever the day takes you.
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
                  <p className="text-xs text-white/60 mt-1">Shipping $150+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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
        title="Home"
        description="Shop men's and women's premium apparel, polos, pants, outerwear, and footwear at TravisMathew. Free shipping on orders $150+."
      />
      <HeroBanner />
      <NewArrivalsSection />
      <WomensCollectionSection />
      <MensCollectionSection />
      <BottomBanner />
    </>
  );
}
