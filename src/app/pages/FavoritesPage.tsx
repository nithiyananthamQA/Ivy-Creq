import { Link } from 'react-router';
import { Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { useFavorites } from '../context/FavoritesContext';
import { newArrivals, womenProducts, menProducts } from '../data/products';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const allProducts = [...newArrivals, ...menProducts, ...womenProducts];
  const favoriteProducts = allProducts.filter(p => favorites.has(p.id));

  return (
    <>
      <SEOHead
        title="My Favorites"
        description="View your saved favorites at Ivy Crew. Keep track of items you love."
      />

      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1920px] mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a2026] mb-6 md:mb-8">
            My Favorites
          </h1>

          {favoriteProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {favoriteProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 md:py-24">
              <Heart className="w-12 h-12 text-[#cdcbcc] mx-auto mb-4" />
              <h2 className="text-lg font-bold text-[#1a2026] mb-2">No favorites yet</h2>
              <p className="text-sm text-[#333b42] mb-6">
                Hover over any product and tap the heart to save it here.
              </p>
              <Link
                to="/new-arrivals"
                className="bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-900 transition-colors inline-block"
              >
                Browse New Arrivals
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
