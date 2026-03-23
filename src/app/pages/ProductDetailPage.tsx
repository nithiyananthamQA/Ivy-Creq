import { useState, useRef, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Heart, ChevronLeft, ChevronRight, Truck, RotateCcw, Shield, X, ZoomIn } from 'lucide-react';

/** Mobile pinch-zoom + pan + double-tap hook */
function useMobileZoom(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const stateRef = useRef({ scale: 1, tx: 0, ty: 0 });
  const pinchRef = useRef({ startDist: 0, startScale: 1 });
  const panRef = useRef({ startX: 0, startY: 0, startTx: 0, startTy: 0 });
  const lastTapRef = useRef(0);

  const clampTranslate = useCallback((tx: number, ty: number, s: number) => {
    const el = containerRef.current;
    if (!el) return { x: 0, y: 0 };
    const rect = el.getBoundingClientRect();
    const maxTx = Math.max(0, (rect.width * s - rect.width) / 2);
    const maxTy = Math.max(0, (rect.height * s - rect.height) / 2);
    return { x: Math.max(-maxTx, Math.min(maxTx, tx)), y: Math.max(-maxTy, Math.min(maxTy, ty)) };
  }, [containerRef]);

  const reset = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    stateRef.current = { scale: 1, tx: 0, ty: 0 };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const getTouchDist = (t: TouchList) => {
      const dx = t[0].clientX - t[1].clientX;
      const dy = t[0].clientY - t[1].clientY;
      return Math.hypot(dx, dy);
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        pinchRef.current = { startDist: getTouchDist(e.touches), startScale: stateRef.current.scale };
      } else if (e.touches.length === 1) {
        // Double tap detection
        const now = Date.now();
        if (now - lastTapRef.current < 300) {
          e.preventDefault();
          const newScale = stateRef.current.scale > 1.3 ? 1 : 1.8;
          const clamped = newScale === 1 ? { x: 0, y: 0 } : clampTranslate(0, 0, newScale);
          setScale(newScale);
          setTranslate(clamped);
          stateRef.current = { scale: newScale, tx: clamped.x, ty: clamped.y };
        }
        lastTapRef.current = now;
        // Pan start
        panRef.current = {
          startX: e.touches[0].clientX, startY: e.touches[0].clientY,
          startTx: stateRef.current.tx, startTy: stateRef.current.ty,
        };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dist = getTouchDist(e.touches);
        const newScale = Math.max(1, Math.min(2.5, pinchRef.current.startScale * (dist / pinchRef.current.startDist)));
        const clamped = clampTranslate(stateRef.current.tx, stateRef.current.ty, newScale);
        setScale(newScale);
        setTranslate(clamped);
        stateRef.current = { scale: newScale, tx: clamped.x, ty: clamped.y };
      } else if (e.touches.length === 1 && stateRef.current.scale > 1) {
        e.preventDefault();
        const dx = e.touches[0].clientX - panRef.current.startX;
        const dy = e.touches[0].clientY - panRef.current.startY;
        const clamped = clampTranslate(panRef.current.startTx + dx, panRef.current.startTy + dy, stateRef.current.scale);
        setTranslate(clamped);
        stateRef.current.tx = clamped.x;
        stateRef.current.ty = clamped.y;
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0 && stateRef.current.scale <= 1.05) {
        reset();
      }
    };

    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [containerRef, clampTranslate, reset]);

  return { scale, translate, reset };
}
import SEOHead from '../components/SEOHead';
import SizeGuideModal from '../components/SizeGuideModal';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { getProductById } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  // Desktop zoom state
  const [showZoom, setShowZoom] = useState(false);
  const [lensPx, setLensPx] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  // Mobile zoom state
  const [mobileZoomOpen, setMobileZoomOpen] = useState(false);
  const mobileZoomRef = useRef<HTMLDivElement>(null);
  const mobileZoom = useMobileZoom(mobileZoomRef);

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

  const images = product.images && product.images.length > 0
    ? product.images
    : [product.image1 || product.image, product.image2].filter(Boolean) as string[];
  const favorited = isFavorite(product.id);

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(product, selectedSize ?? undefined);
  };

  const prevImage = () => setActiveImage((i: number) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () => setActiveImage((i: number) => (i === images.length - 1 ? 0 : i + 1));

  const LENS_SIZE = 140; // px — lens box size
  const ZOOM = 2; // zoom factor for desktop preview

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    setContainerSize({ w: rect.width, h: rect.height });
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const half = LENS_SIZE / 2;
    setLensPx({
      x: Math.max(half, Math.min(rect.width - half, px)),
      y: Math.max(half, Math.min(rect.height - half, py)),
    });
  }, []);

  // Lens top-left corner (for transform calculation)
  const lensLeft = lensPx.x - LENS_SIZE / 2;
  const lensTop = lensPx.y - LENS_SIZE / 2;

  // Generate style code from product id
  const styleCode = `IVC-${10400 + product.id}`;

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

          {/* Image Gallery */}
          <div className="flex-1 max-w-[800px]">
            {/* Desktop main image with hover zoom */}
            <div
              ref={imgRef}
              className="relative aspect-[3/4] bg-[#f5f7f8] overflow-hidden mb-3 cursor-crosshair hidden md:block"
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
                className="w-full h-full object-cover pointer-events-none"
                width={800}
                height={1067}
              />
              {/* Zoom lens indicator — exactly matches what the preview shows */}
              {showZoom && (
                <div
                  className="absolute border-2 border-[#1a2026]/40 bg-white/15 pointer-events-none z-10"
                  style={{
                    width: LENS_SIZE,
                    height: LENS_SIZE,
                    left: lensLeft,
                    top: lensTop,
                  }}
                />
              )}
              {/* Desktop navigation arrows — hide zoom on hover/click */}
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

            {/* Mobile: tap to open fullscreen zoom */}
            <div
              className="relative aspect-[3/4] bg-[#f5f7f8] overflow-hidden mb-3 md:hidden"
              onClick={() => setMobileZoomOpen(true)}
            >
              {product.badge && (
                <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-medium px-2.5 py-1 tracking-[0.2px] z-10">
                  {product.badge}
                </div>
              )}
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                width={800}
                height={1067}
              />
              <div className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full shadow-sm">
                <ZoomIn className="w-4 h-4 text-[#1a2026]" />
              </div>
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#1a2026]" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-[#1a2026]" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-14 h-[70px] md:w-16 md:h-20 overflow-hidden border-2 transition-colors ${
                      activeImage === i ? 'border-[#1a2026]' : 'border-transparent hover:border-[#e5e5e5]'
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" width={64} height={80} />
                  </button>
                ))}
              </div>
            )}

            {/* Mobile swipe dots */}
            {images.length > 1 && (
              <div className="flex justify-center gap-2 mt-3 lg:hidden">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${activeImage === i ? 'bg-[#1a2026]' : 'bg-[#cdcbcc]'}`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info — with zoom overlay on top */}
          <div className="relative w-full lg:w-[420px] xl:w-[480px] lg:sticky lg:top-8 lg:self-start">
            {/* Desktop: Zoomed preview overlay — shows exactly what the lens covers */}
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

            {/* Color swatch — single color badge for this product */}
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
                {sizeError && (
                  <p className="text-xs text-red-600 mt-2">Please select a size</p>
                )}
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

            {/* Product Details */}
            <div className="border-t border-[#e5e5e5] pt-5 mb-5">
              <p className="text-sm font-bold text-[#1a2026] mb-3">Product Details</p>
              <div className="grid grid-cols-2 gap-y-2 text-xs">
                <span className="text-[#6c7782]">Style</span>
                <span className="text-[#1a2026]">{styleCode}</span>
                <span className="text-[#6c7782]">Product</span>
                <span className="text-[#1a2026]">T-Shirt / Knit Wear</span>
                <span className="text-[#6c7782]">Sleeve</span>
                <span className="text-[#1a2026]">Half Sleeve</span>
                <span className="text-[#6c7782]">Fabric</span>
                <span className="text-[#1a2026]">Premium Cotton Blend</span>
                <span className="text-[#6c7782]">Fit</span>
                <span className="text-[#1a2026]">Regular Fit</span>
                <span className="text-[#6c7782]">Care</span>
                <span className="text-[#1a2026]">Machine Wash Cold</span>
                <span className="text-[#6c7782]">Origin</span>
                <span className="text-[#1a2026]">Made in India</span>
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
          </div>
        </div>
      </div>

      {/* Mobile fullscreen zoom modal — pinch, pan, double-tap */}
      {mobileZoomOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col md:hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#e5e5e5]">
            <div>
              <p className="text-sm font-bold text-[#1a2026]">{product.name}</p>
              <p className="text-[10px] text-[#6c7782]">
                {mobileZoom.scale > 1.05 ? `${Math.round(mobileZoom.scale * 100)}% — drag to pan` : 'Pinch or double-tap to zoom'}
              </p>
            </div>
            <button
              onClick={() => { setMobileZoomOpen(false); mobileZoom.reset(); }}
              className="w-9 h-9 flex items-center justify-center bg-[#f5f7f8] rounded-full"
              aria-label="Close zoom"
            >
              <X className="w-5 h-5 text-[#1a2026]" />
            </button>
          </div>
          <div
            ref={mobileZoomRef}
            className="flex-1 overflow-hidden flex items-center justify-center bg-[#f5f7f8]"
            style={{ touchAction: 'none' }}
          >
            <img
              src={images[activeImage]}
              alt={product.name}
              className="w-full h-full object-contain pointer-events-none select-none"
              draggable={false}
              style={{
                transform: `translate(${mobileZoom.translate.x}px, ${mobileZoom.translate.y}px) scale(${mobileZoom.scale})`,
                transition: mobileZoom.scale === 1 ? 'transform 0.2s ease-out' : 'none',
              }}
            />
          </div>
          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="flex gap-2 px-4 py-3 border-t border-[#e5e5e5] overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveImage(i); mobileZoom.reset(); }}
                  className={`w-12 h-[60px] shrink-0 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-[#1a2026]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </>
  );
}
