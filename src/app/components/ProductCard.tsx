import { useState } from 'react';
import { Link } from 'react-router';
import { Heart, ShoppingCart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  hoverable?: boolean;
}

export default function ProductCard({ product, hoverable = true }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  const favorited = isFavorite(product.id);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-white cursor-pointer block"
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
    >
      <div className="relative aspect-[335/421.59] overflow-hidden">
        {product.badge && (
          <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-medium px-2.5 py-1 tracking-[0.2px] z-10">
            {product.badge}
          </div>
        )}
        <img
          src={product.image1 || product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={335}
          height={422}
        />
        {product.image2 && (
          <img
            src={product.image2}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            decoding="async"
            width={335}
            height={422}
          />
        )}

        {/* Favorite button — always visible on mobile, top-right */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
          className={`absolute top-2 right-2 z-10 p-1.5 rounded-full shadow-sm transition-colors md:hidden ${favorited ? 'bg-red-500 text-white' : 'bg-white/90 text-[#1a2026]'}`}
          aria-label={favorited ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
        >
          <Heart className="w-4 h-4" fill={favorited ? 'currentColor' : 'none'} />
        </button>

        {/* Desktop hover overlay with Add to Cart and Favorite */}
        <div className={`absolute inset-x-0 bottom-0 hidden md:flex items-center justify-center gap-3 p-3 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            className="flex items-center gap-2 bg-white text-[#1a2026] px-4 py-2 text-xs font-bold hover:bg-gray-100 transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
            className={`p-2 transition-colors ${favorited ? 'bg-red-500 text-white' : 'bg-white text-[#1a2026] hover:bg-gray-100'}`}
            aria-label={favorited ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
          >
            <Heart className="w-4 h-4" fill={favorited ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
      <div className="mt-4 px-2.5">
        {product.franchise && (
          <div className="text-[#47515c] text-sm mb-1">{product.franchise}</div>
        )}
        <h3 className="text-[#1a2026] text-sm font-bold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[#333b42] text-sm">{product.price}</span>
          {/* Mobile Add to Cart button */}
          <button
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            className="md:hidden flex items-center gap-1.5 bg-[#1a2026] text-white px-3 py-1.5 text-xs font-bold active:bg-gray-700 transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-3 h-3" />
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}
