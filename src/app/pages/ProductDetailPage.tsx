import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Heart, ChevronLeft, ChevronRight, Truck, RotateCcw, Shield } from 'lucide-react';
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
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-[#f5f7f8] overflow-hidden mb-3">
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

              {/* Navigation arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#1a2026]" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
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
                    className={`w-16 h-20 md:w-20 md:h-[100px] overflow-hidden border-2 transition-colors ${
                      activeImage === i ? 'border-[#1a2026]' : 'border-transparent hover:border-[#e5e5e5]'
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" width={80} height={100} />
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

          {/* Product Info */}
          <div className="w-full lg:w-[420px] xl:w-[480px] lg:sticky lg:top-8 lg:self-start">
            {product.franchise && (
              <p className="text-sm text-[#6c7782] uppercase tracking-wider mb-1">{product.franchise}</p>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-[#1a2026] mb-3">{product.name}</h1>
            <p className="text-lg text-[#333b42] mb-6">{product.price}</p>

            {product.description && (
              <p className="text-sm text-[#47515c] leading-relaxed mb-6">{product.description}</p>
            )}

            {/* Color swatches */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-bold text-[#1a2026] mb-2">Color</p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-full border border-[#e5e5e5]"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
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

            {/* Shipping info */}
            <div className="border-t border-[#e5e5e5] pt-5 space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4 text-[#6c7782] shrink-0" />
                <p className="text-xs text-[#47515c]">Free shipping on orders $150+</p>
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

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </>
  );
}
