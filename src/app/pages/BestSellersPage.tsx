import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { menProducts, newArrivals } from '../data/products';
import type { Product } from '../data/products';

// Women's collection hidden for launch — add `...womenProducts.slice(0, 3).map(...)` back when re-enabled
const bestSellers: Product[] = [
  ...menProducts.filter(p => p.badge === 'BEST SELLER'),
  ...menProducts.filter(p => !p.badge).slice(0, 2).map(p => ({ ...p, badge: 'BEST SELLER' })),
  ...newArrivals.slice(0, 2).map(p => ({ ...p, badge: 'BEST SELLER' })),
];

export default function BestSellersPage() {
  return (
    <>
      <SEOHead
        title="Best Sellers"
        description="Shop Ivy Crew's best selling men's apparel. Our most popular T-shirts and everyday essentials."
      />

      {/* Hero */}
      <section className="bg-[#1a2026] text-white py-12 md:py-16 lg:py-20 text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Best Sellers</h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Our most popular styles — the pieces our customers can't stop wearing.
        </p>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1920px] mx-auto">
          <p className="text-sm text-[#333b42] mb-6">{bestSellers.length} items</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
