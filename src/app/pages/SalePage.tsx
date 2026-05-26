import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { menProducts } from '../data/products';
import type { Product } from '../data/products';

// Women's collection hidden for launch — add `...womenProducts.map(...)` back when re-enabled
const saleProducts: Product[] = [
  ...menProducts.map(p => ({ ...p, badge: 'SALE' as const })),
];

export default function SalePage() {
  return (
    <>
      <SEOHead
        title="Sale"
        description="Shop sale items at Ivy Crew. Find great deals on premium men's T-shirts and everyday essentials."
      />

      {/* Hero */}
      <section className="bg-black text-white py-12 md:py-16 lg:py-20 text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Sale</h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Great styles at great prices. Shop our latest markdowns on men's apparel.
        </p>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1920px] mx-auto">
          <p className="text-sm text-[#333b42] mb-6">{saleProducts.length} items</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
