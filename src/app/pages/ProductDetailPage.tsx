import { useState, useRef, useCallback, useEffect, Fragment } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { Heart, ChevronLeft, ChevronRight, Truck, RotateCcw, Shield, X, ZoomIn } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SizeGuideModal from '../components/SizeGuideModal';
import FabricFeatures from '../components/FabricFeatures';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { getProductById, getProductBySlug, getProductSlug, getMobileImages, getMobileHdImages } from '../data/products';

const LENS_SIZE = 140;
const ZOOM = 2;

/* ─── Fullscreen mobile viewer ────────────────────────────────────────────────
   Swipeable gallery (slide animation) + per-image pinch-zoom / double-tap /
   pan.  Matches the UX of Myntra, Amazon, ASOS, and similar apps.
   ────────────────────────────────────────────────────────────────────────── */
function MobileImageViewer({
  images,
  initialIndex,
  productName,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  productName: string;
  onClose: (currentIndex: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* lock body scroll while viewer is open */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* mutable state kept in a ref so touch-event closures always see
     the latest values without re-attaching listeners */
  const s = useRef({
    scale: 1, tx: 0, ty: 0,
    drag: 0, idx: initialIndex,
    dragging: false, pinching: false,
  });
  const pinch  = useRef({ dist: 0, baseScale: 1 });
  const pan    = useRef({ x0: 0, y0: 0, tx0: 0, ty0: 0 });
  const swipe  = useRef({ x0: 0, y0: 0, t0: 0, moved: false });
  const tap    = useRef(0);

  const clamp = useCallback((tx: number, ty: number, sc: number) => {
    if (sc <= 1) return { x: 0, y: 0 };
    const el = containerRef.current;
    if (!el) return { x: 0, y: 0 };
    const r = el.getBoundingClientRect();
    const mxT = Math.max(0, (r.width  * sc - r.width)  / 2);
    const mxY = Math.max(0, (r.height * sc - r.height) / 2);
    return { x: Math.max(-mxT, Math.min(mxT, tx)), y: Math.max(-mxY, Math.min(mxY, ty)) };
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    Object.assign(s.current, { scale: 1, tx: 0, ty: 0 });
  }, []);

  const goTo = useCallback((i: number) => {
    const idx = Math.max(0, Math.min(images.length - 1, i));
    setIsSnapping(true);
    setDragOffset(0);
    setCurrentIndex(idx);
    s.current.drag = 0;
    s.current.idx  = idx;
    resetZoom();
    setTimeout(() => setIsSnapping(false), 320);
  }, [images.length, resetZoom]);

  /* ── touch handling ─────────────────────────────────────────────────── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const dist = (t: TouchList) =>
      Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);

    const onStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        s.current.pinching = true;
        pinch.current = { dist: dist(e.touches), baseScale: s.current.scale };
        return;
      }
      if (e.touches.length !== 1) return;

      const now = Date.now();
      /* double-tap → zoom centred on tap point */
      if (now - tap.current < 300) {
        e.preventDefault();
        if (s.current.scale > 1.3) {
          resetZoom();
        } else {
          const r  = el.getBoundingClientRect();
          const tx = (r.width  / 2 - (e.touches[0].clientX - r.left)) * 1.5;
          const ty = (r.height / 2 - (e.touches[0].clientY - r.top )) * 1.5;
          const c  = clamp(tx, ty, 2.5);
          setScale(2.5);
          setTranslate(c);
          Object.assign(s.current, { scale: 2.5, tx: c.x, ty: c.y });
        }
        tap.current = 0;
        return;
      }
      tap.current = now;

      s.current.dragging = true;
      s.current.pinching = false;
      swipe.current = { x0: e.touches[0].clientX, y0: e.touches[0].clientY, t0: now, moved: false };
      pan.current   = { x0: e.touches[0].clientX, y0: e.touches[0].clientY, tx0: s.current.tx, ty0: s.current.ty };
    };

    const onMove = (e: TouchEvent) => {
      /* pinch zoom */
      if (e.touches.length === 2) {
        e.preventDefault();
        const ns = Math.max(1, Math.min(3, pinch.current.baseScale * (dist(e.touches) / pinch.current.dist)));
        const c = clamp(s.current.tx, s.current.ty, ns);
        setScale(ns);
        setTranslate(c);
        Object.assign(s.current, { scale: ns, tx: c.x, ty: c.y });
        return;
      }
      if (e.touches.length !== 1 || !s.current.dragging) return;

      const dx = e.touches[0].clientX - swipe.current.x0;
      const dy = e.touches[0].clientY - swipe.current.y0;

      if (s.current.scale > 1.05) {
        /* panning when zoomed */
        e.preventDefault();
        const c = clamp(pan.current.tx0 + dx, pan.current.ty0 + dy, s.current.scale);
        setTranslate(c);
        s.current.tx = c.x;
        s.current.ty = c.y;
      } else if (Math.abs(dx) > 5) {
        /* horizontal swipe — slide gallery */
        e.preventDefault();
        swipe.current.moved = true;
        let off = dx;
        const idx = s.current.idx;
        if ((idx === 0 && dx > 0) || (idx === images.length - 1 && dx < 0)) off = dx * 0.2;
        setDragOffset(off);
        s.current.drag = off;
      }
    };

    const onEnd = (e: TouchEvent) => {
      /* one finger lifted during pinch → transition to pan */
      if (e.touches.length === 1 && s.current.pinching) {
        pan.current = {
          x0: e.touches[0].clientX, y0: e.touches[0].clientY,
          tx0: s.current.tx, ty0: s.current.ty,
        };
        s.current.dragging = true;
        s.current.pinching = false;
        swipe.current.moved = false;
        return;
      }
      if (e.touches.length > 0) return;
      s.current.dragging = false;

      /* after pinch ended */
      if (s.current.pinching) {
        s.current.pinching = false;
        if (s.current.scale <= 1.05) resetZoom();
        return;
      }

      /* gallery swipe at 1× */
      if (s.current.scale <= 1.05 && swipe.current.moved) {
        const dx  = s.current.drag;
        const vel = Math.abs(dx) / Math.max(1, Date.now() - swipe.current.t0);
        const thr = vel > 0.3 ? 30 : window.innerWidth * 0.2;
        const idx = s.current.idx;

        if (Math.abs(dx) > thr) {
          if (dx < 0 && idx < images.length - 1) { goTo(idx + 1); return; }
          if (dx > 0 && idx > 0)                  { goTo(idx - 1); return; }
        }
        /* snap back */
        setIsSnapping(true);
        setDragOffset(0);
        s.current.drag = 0;
        setTimeout(() => setIsSnapping(false), 320);
        return;
      }

      if (s.current.scale <= 1.05) resetZoom();
    };

    el.addEventListener('touchstart', onStart, { passive: false });
    el.addEventListener('touchmove',  onMove,  { passive: false });
    el.addEventListener('touchend',   onEnd);
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove',  onMove);
      el.removeEventListener('touchend',   onEnd);
    };
  }, [clamp, resetZoom, goTo, images.length]);

  /* gallery position */
  const slidePct = 100 / images.length;
  const pxToPct  = (dragOffset / (typeof window !== 'undefined' ? window.innerWidth : 390)) * slidePct;
  const galleryX = -currentIndex * slidePct + pxToPct;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col md:hidden" style={{ touchAction: 'none' }}>
      {/* header */}
      <div className="flex items-center justify-between px-4 h-12 shrink-0 z-20">
        <span className="text-sm text-white/70 font-medium tabular-nums">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={() => onClose(currentIndex)}
          className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full active:bg-white/20"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* swipeable gallery */}
      <div ref={containerRef} className="flex-1 overflow-hidden" style={{ touchAction: 'none' }}>
        <div
          className="flex h-full will-change-transform"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(${galleryX}%)`,
            transition: isSnapping ? 'transform 0.3s cubic-bezier(.25,1,.5,1)' : 'none',
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="h-full flex items-center justify-center" style={{ width: `${slidePct}%` }}>
              <img
                src={img}
                alt={`${productName} ${i + 1}`}
                className="max-w-full max-h-full object-contain select-none"
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : undefined}
                decoding={i === 0 ? 'sync' : 'async'}
                draggable={false}
                style={
                  i === currentIndex
                    ? {
                        transform: `translate(${translate.x}px,${translate.y}px) scale(${scale})`,
                        transition: scale === 1 && !s.current.dragging ? 'transform 0.2s ease-out' : 'none',
                      }
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* zoom hint */}
      <p className="text-center text-[11px] text-white/30 py-1 shrink-0">
        {scale > 1.05
          ? 'Drag to pan · Double-tap to reset'
          : 'Pinch or double-tap to zoom · Swipe to browse'}
      </p>

      {/* pill dots */}
      {images.length > 1 && (
        <div className="flex justify-center items-center gap-1.5 h-8 shrink-0">
          {images.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Product detail page ────────────────────────────────────────────────── */
export default function ProductDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  // Legacy numeric URLs (/product/401) still resolve, then redirect to the slug URL below.
  const product = /^\d+$/.test(slug) ? getProductById(Number(slug)) : getProductBySlug(slug);
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  // Desktop zoom
  const [showZoom, setShowZoom] = useState(false);
  const [lensPx, setLensPx] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  // Mobile viewer
  const [viewerOpen, setViewerOpen] = useState(false);

  // Mobile inline scroll-snap gallery
  const inlineScrollRef = useRef<HTMLDivElement>(null);
  const programmaticScroll = useRef(false);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const desktopImages = product
    ? (product.hdImages && product.hdImages.length > 0
        ? product.hdImages
        : product.images && product.images.length > 0
          ? product.images
          : [product.image1 || product.image, product.image2].filter(Boolean) as string[])
    : [];

  const mobileImages = product
    ? (product.hdImages && product.hdImages.length > 0
        ? getMobileHdImages(product)
        : product.images && product.images.length > 0
          ? getMobileImages(product)
          : desktopImages)
    : [];

  const images = isMobile ? mobileImages : desktopImages;

  // Sync inline scroll position when activeImage changes from thumbnail click
  useEffect(() => {
    const el = inlineScrollRef.current;
    if (!el || !images.length) return;
    const target = activeImage * el.clientWidth;
    if (Math.abs(el.scrollLeft - target) > 5) {
      programmaticScroll.current = true;
      el.scrollTo({ left: target, behavior: 'smooth' });
    }
  }, [activeImage, images.length]);

  // Listen for scrollend to detect which image is visible (no re-renders during scroll)
  useEffect(() => {
    const el = inlineScrollRef.current;
    if (!el) return;
    const onScrollEnd = () => {
      if (programmaticScroll.current) {
        programmaticScroll.current = false;
        return;
      }
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      if (idx >= 0 && idx < images.length) {
        setActiveImage(idx);
      }
    };
    el.addEventListener('scrollend', onScrollEnd);
    return () => el.removeEventListener('scrollend', onScrollEnd);
  }, [images.length]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    setContainerSize({ w: rect.width, h: rect.height });
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const half = LENS_SIZE / 2;
    setLensPx({
      x: Math.max(half, Math.min(rect.width  - half, px)),
      y: Math.max(half, Math.min(rect.height - half, py)),
    });
  }, []);

  /* ── early return ──────────────────────────────────────────────────── */
  if (product && slug !== getProductSlug(product)) {
    return <Navigate to={`/product/${getProductSlug(product)}`} replace />;
  }

  if (!product) {
    return (
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] py-16 text-center">
        <h1 className="text-2xl font-bold text-[#1a2026] mb-4">Product Not Found</h1>
        <p className="text-[#6c7782] mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/" className="bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-900 transition-colors inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  const favorited = isFavorite(product.id);
  const styleCode = `IVC-${10400 + product.id}`;

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addToCart(product, selectedSize ?? undefined);
  };

  const prevImage = () => setActiveImage((i: number) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () => setActiveImage((i: number) => (i === images.length - 1 ? 0 : i + 1));


  const openViewer  = (i: number) => { setActiveImage(i); setViewerOpen(true); };
  const closeViewer = (i: number) => { setActiveImage(i); setViewerOpen(false); };

  const lensLeft = lensPx.x - LENS_SIZE / 2;
  const lensTop  = lensPx.y - LENS_SIZE / 2;

  return (
    <>
      <SEOHead title={product.name} description={product.description || product.name} />

      {/* Breadcrumb */}
      <nav className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] py-3">
        <ol className="flex items-center gap-2 text-xs text-[#6c7782]">
          <li><Link to="/" className="hover:text-[#1a2026] transition-colors">Home</Link></li>
          <li>/</li>
          {product.franchise && (
            <>
              <li>
                <Link
                  to={product.franchise === "WOMEN'S" ? '/women' : '/men'}
                  className="hover:text-[#1a2026] transition-colors"
                >
                  {product.franchise === "WOMEN'S" ? "Women" : "Men"}
                </Link>
              </li>
              <li>/</li>
            </>
          )}
          <li className="text-[#1a2026]">{product.name}</li>
        </ol>
      </nav>

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] pb-12 md:pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">

          {/* ── Image gallery ──────────────────────────────────────────── */}
          <div className="flex-1 max-w-[800px] lg:overflow-y-auto lg:h-full scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
          >

            {/* Desktop: thumbnails + main image */}
            <div className="hidden md:flex gap-3">
              {/* Thumbnail strip - vertical */}
              {images.length > 1 && (
                <div className="flex flex-col gap-2 shrink-0">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                        activeImage === i ? 'border-[#1a2026]' : 'border-transparent hover:border-[#e5e5e5]'
                      }`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain" width={64} height={80} loading="lazy" />
                    </button>
                  ))}
                </div>
              )}

              {/* Main image */}
              <div
                ref={imgRef}
                className="relative aspect-[3/4] bg-[#f5f7f8] overflow-hidden flex-1 cursor-crosshair"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
              >
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-medium px-2.5 py-1 tracking-[0.2px] z-10">
                    {product.badge}
                  </div>
                )}
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-contain pointer-events-none"
                  width={800}
                  height={1067}
                  loading={activeImage === 0 ? 'eager' : 'lazy'}
                  fetchPriority={activeImage === 0 ? 'high' : undefined}
                />
                {showZoom && (
                  <div
                    className="absolute border-2 border-[#1a2026]/40 bg-white/15 pointer-events-none z-10"
                    style={{ width: LENS_SIZE, height: LENS_SIZE, left: lensLeft, top: lensTop }}
                  />
                )}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); setShowZoom(false); prevImage(); }}
                      onMouseEnter={() => setShowZoom(false)}
                      onMouseLeave={() => setShowZoom(true)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors z-20 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#1a2026]" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setShowZoom(false); nextImage(); }}
                      onMouseEnter={() => setShowZoom(false)}
                      onMouseLeave={() => setShowZoom(true)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors z-20 cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-[#1a2026]" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile: scroll-snap swipeable gallery */}
            <div className="relative md:hidden mb-3">
              <div
                ref={inlineScrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
              >
                {images.map((img, i) => (
                  <div key={i} className="w-full shrink-0 snap-start snap-always">
                    <div className="aspect-[3/4] bg-[#f5f7f8]">
                      <img
                        src={img}
                        alt={`${product.name} – ${i + 1}`}
                        className="w-full h-full object-contain cursor-zoom-in"
                        onClick={() => openViewer(i)}
                        width={600}
                        height={800}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        fetchPriority={i === 0 ? 'high' : undefined}
                        decoding={i === 0 ? 'sync' : 'async'}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {product.badge && (
                <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-medium px-2.5 py-1 tracking-[0.2px] z-10 pointer-events-none">
                  {product.badge}
                </div>
              )}
              <div className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full shadow-sm pointer-events-none">
                <ZoomIn className="w-4 h-4 text-[#1a2026]" />
              </div>
            </div>

            {/* Mobile: pill dots */}
            {images.length > 1 && (
              <div className="flex justify-center gap-1.5 mb-3 md:hidden">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      activeImage === i ? 'w-5 h-1.5 bg-[#1a2026]' : 'w-1.5 h-1.5 bg-[#cdcbcc]'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── Product info ───────────────────────────────────────────── */}
          <div className="relative w-full lg:w-[420px] xl:w-[480px] lg:sticky lg:top-8 lg:self-start">
            {/* Desktop: zoomed preview overlay */}
            {showZoom && (
              <div className="hidden lg:block absolute inset-0 z-30 bg-white border border-[#e5e5e5] shadow-xl overflow-hidden">
                <img
                  src={images[activeImage]}
                  alt=""
                  className="max-w-none pointer-events-none"
                  style={{
                    width: containerSize.w,
                    height: containerSize.h,
                    transform: `scale(${ZOOM}) translate(${-lensLeft}px, ${-lensTop}px)`,
                    transformOrigin: '0 0',
                  }}
                />
              </div>
            )}

            {product.franchise && (
              <p className="text-sm text-[#6c7782] uppercase tracking-wider mb-1">{product.franchise}</p>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-[#1a2026] mb-1">{product.name}</h1>
            <p className="text-xs text-[#6c7782] mb-3">Style: {styleCode}</p>
            <p className="text-xl font-bold text-[#1a2026] mb-1">{product.price}</p>
            <p className="text-[10px] text-[#6c7782] mb-5">MRP inclusive of all taxes</p>

            {product.description && (
              <p className="text-sm text-[#47515c] leading-relaxed mb-6">{product.description}</p>
            )}

            {/* Color swatch */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-bold text-[#1a2026] mb-2">Color</p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full border-2 border-[#1a2026] ring-2 ring-offset-1 ring-[#1a2026]/20"
                    style={{ backgroundColor: product.colors[0] }}
                  />
                </div>
              </div>
            )}

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-[#1a2026]">
                    Size {selectedSize && <span className="font-normal text-[#6c7782]">— {selectedSize}</span>}
                  </p>
                  <button
                    onClick={() => setSizeGuideOpen(true)}
                    className="text-xs text-[#1a2026] underline hover:no-underline"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => { setSelectedSize(size); setSizeError(false); }}
                      className={`min-w-[48px] h-11 px-3 border text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'bg-[#1a2026] text-white border-[#1a2026]'
                          : 'bg-white text-[#1a2026] border-[#e5e5e5] hover:border-[#1a2026]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && <p className="text-xs text-red-600 mt-2">Please select a size</p>}
              </div>
            )}

            {/* Add to Cart + Favorite */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-3.5 px-6 font-bold text-sm hover:bg-gray-900 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => toggleFavorite(product.id)}
                className={`w-[52px] h-[52px] flex items-center justify-center border transition-colors ${
                  favorited
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-white text-[#1a2026] border-[#e5e5e5] hover:border-[#1a2026]'
                }`}
                aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart className="w-5 h-5" fill={favorited ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Product details */}
            <div className="border-t border-[#e5e5e5] pt-5 mb-5">
              <p className="text-sm font-bold text-[#1a2026] mb-3">Product Details</p>
              <div className="grid grid-cols-2 gap-y-2 text-xs">
                <span className="text-[#6c7782]">Style</span>
                <span className="text-[#1a2026]">{styleCode}</span>
                {[
                  ['Product', product.productType],
                  ['Sleeve', product.sleeve],
                  ['Fabric', product.fabric],
                  ['Fit', product.fit],
                  ['Care', product.care],
                  ['Origin', product.origin],
                ]
                  .filter(([, value]) => Boolean(value))
                  .map(([label, value]) => (
                    <Fragment key={label}>
                      <span className="text-[#6c7782]">{label}</span>
                      <span className="text-[#1a2026]">{value}</span>
                    </Fragment>
                  ))}
              </div>
            </div>

            {/* Shipping info */}
            <div className="border-t border-[#e5e5e5] pt-5 space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4 text-[#6c7782] shrink-0" />
                <p className="text-xs text-[#47515c]">Free shipping on orders ₹2,000+</p>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-4 h-4 text-[#6c7782] shrink-0" />
                <p className="text-xs text-[#47515c]">Free returns within 30 days</p>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#6c7782] shrink-0" />
                <p className="text-xs text-[#47515c]">Secure checkout</p>
              </div>
            </div>

            <FabricFeatures variant="product" />
          </div>
        </div>
      </div>

      {/* ── Mobile fullscreen viewer ─────────────────────────────────── */}
      {viewerOpen && (
        <MobileImageViewer
          images={images}
          initialIndex={activeImage}
          productName={product.name}
          onClose={closeViewer}
        />
      )}

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </>
  );
}
