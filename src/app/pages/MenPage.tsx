import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { menProducts, type MenCategory } from '../data/products';

const PAGE_SIZE = 16;

type Filter = 'all' | MenCategory;

const FILTER_OPTIONS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'polos', label: 'Polos' },
  { value: 'tees', label: 'Tees' },
  { value: 'pants', label: 'Pants' },
  { value: 'outerwear', label: 'Outerwear' },
  { value: 'footwear', label: 'Footwear' },
];

const FILTER_LABEL: Record<Filter, string> = {
  all: "All Men's Products",
  polos: 'Polos',
  tees: 'Tees',
  pants: 'Pants',
  outerwear: 'Outerwear',
  footwear: 'Footwear',
};

export default function MenPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (filter === 'all' ? menProducts : menProducts.filter(p => p.category === filter)),
    [filter]
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = useMemo(
    () => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [filtered, page]
  );

  useEffect(() => {
    setPage(1);
  }, [filter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const goTo = (p: number) => setPage(Math.min(totalPages, Math.max(1, p)));

  const pageNumbers = useMemo(() => {
    const nums: (number | 'ellipsis')[] = [];
    const w = 1;
    const showLeft = page - w > 2;
    const showRight = page + w < totalPages - 1;
    nums.push(1);
    if (showLeft) nums.push('ellipsis');
    for (let p = Math.max(2, page - w); p <= Math.min(totalPages - 1, page + w); p++) nums.push(p);
    if (showRight) nums.push('ellipsis');
    if (totalPages > 1) nums.push(totalPages);
    return nums;
  }, [page, totalPages]);

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

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2 mb-5" role="tablist" aria-label="Filter by category">
              {FILTER_OPTIONS.map((opt) => {
                const active = filter === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(opt.value)}
                    className={`border px-4 py-1.5 text-[10px] uppercase tracking-wider transition-all duration-300 ${
                      active
                        ? 'bg-white text-[#0b0f12] border-white'
                        : 'border-white/20 text-white/70 hover:bg-white hover:text-[#0b0f12]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
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
          <div className="flex items-baseline justify-between mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a2026]">
              {FILTER_LABEL[filter]}
            </h2>
            <p className="text-xs md:text-sm text-[#1a2026]/60">
              {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
              {filtered.length > 0 && ` · Page ${page} of ${totalPages}`}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 md:py-24 text-center">
              <p className="text-base md:text-lg text-[#1a2026] font-medium mb-2">
                No products in this category yet
              </p>
              <p className="text-sm text-[#1a2026]/60 mb-6">
                We're working on bringing you more {FILTER_LABEL[filter].toLowerCase()}. Check back soon.
              </p>
              <button
                type="button"
                onClick={() => setFilter('all')}
                className="inline-block border-2 border-[#1a2026] text-[#1a2026] px-8 py-2.5 font-bold text-xs uppercase tracking-wider hover:bg-[#1a2026] hover:text-white transition-colors"
              >
                Browse All Men's
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="flex flex-wrap items-center justify-center gap-1.5 mt-10 md:mt-14"
            >
              <button
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                className="px-3 py-2 text-xs uppercase tracking-wider border border-[#1a2026]/15 text-[#1a2026] hover:bg-[#1a2026] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#1a2026] transition-colors"
              >
                Prev
              </button>
              {pageNumbers.map((p, idx) =>
                p === 'ellipsis' ? (
                  <span key={`e-${idx}`} className="px-2 text-[#1a2026]/40 text-sm select-none">
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => goTo(p)}
                    aria-current={p === page ? 'page' : undefined}
                    className={`min-w-[36px] px-3 py-2 text-xs font-medium border transition-colors ${
                      p === page
                        ? 'bg-[#1a2026] text-white border-[#1a2026]'
                        : 'border-[#1a2026]/15 text-[#1a2026] hover:bg-[#1a2026] hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                )
              )}
              <button
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-2 text-xs uppercase tracking-wider border border-[#1a2026]/15 text-[#1a2026] hover:bg-[#1a2026] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#1a2026] transition-colors"
              >
                Next
              </button>
            </nav>
          )}

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
