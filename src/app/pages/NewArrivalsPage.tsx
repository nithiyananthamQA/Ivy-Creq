import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { newArrivals, menProducts, womenProducts } from '../data/products';
import type { Product } from '../data/products';

const allNewArrivals: Product[] = [
  ...newArrivals.map(p => ({ ...p, franchise: "MEN'S" as const })),
  ...womenProducts.filter(p => p.badge === 'NEW'),
  ...menProducts.slice(0, 2).map(p => ({ ...p, id: p.id + 200 })),
];

export default function NewArrivalsPage() {
  return (
    <>
      <SEOHead
        title="New Arrivals"
        description="Discover the latest arrivals at TravisMathew. Shop new men's and women's polos, pants, outerwear, dresses, and accessories."
      />

      {/* Hero */}
      <section className="bg-[#f5f7f8] py-12 md:py-16 lg:py-20 text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2026] mb-4">New Arrivals</h1>
        <p className="text-base md:text-lg text-[#333b42] max-w-2xl mx-auto">
          Fresh styles just landed. Be the first to shop our newest collections for men and women.
        </p>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1920px] mx-auto">
          <p className="text-sm text-[#333b42] mb-6">{allNewArrivals.length} items</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {allNewArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
