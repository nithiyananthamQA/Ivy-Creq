import SEOHead from '../components/SEOHead';

export default function ShippingReturnsPage() {
  return (
    <>
      <SEOHead
        title="Shipping & Returns"
        description="Learn about Ivy Crew shipping options, delivery times, free shipping policy, and return instructions."
      />
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a2026] mb-8">Shipping & Returns</h1>

          {/* Shipping */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#1a2026] mb-4">Shipping</h2>
            <div className="space-y-4 text-sm text-[#333b42]">
              <div className="bg-[#f5f7f8] p-6">
                <p className="font-bold text-[#1a2026] mb-2">Free Standard Shipping</p>
                <p>On all orders ₹2,000 and above. Ivy Crew Rewards members enjoy free shipping on every order.</p>
              </div>
              <div className="border border-[#e5e5e5] p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="font-bold text-[#1a2026]">Standard Shipping</span>
                  <span>5–7 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#1a2026]">Expedited Shipping</span>
                  <span>2–3 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#1a2026]">Overnight Shipping</span>
                  <span>1 business day</span>
                </div>
              </div>
              <p>Orders placed before 12pm PST on business days will ship the same day. Delivery times are estimates and not guaranteed.</p>
            </div>
          </div>

          {/* Returns */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#1a2026] mb-4">Returns</h2>
            <div className="space-y-4 text-sm text-[#333b42]">
              <p>We accept returns within 30 days of purchase for a full refund. Items must be unworn, unwashed, and in original condition with tags attached.</p>
              <div className="bg-[#f5f7f8] p-6">
                <p className="font-bold text-[#1a2026] mb-2">How to Return</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Log in to your account and navigate to Order History</li>
                  <li>Select the item(s) you'd like to return</li>
                  <li>Print your prepaid return shipping label</li>
                  <li>Pack items securely and drop off at any carrier location</li>
                </ol>
              </div>
              <p>Refunds are processed within 5–7 business days after we receive your return. The refund will be applied to the original payment method.</p>
            </div>
          </div>

          {/* Exchanges */}
          <div>
            <h2 className="text-xl font-bold text-[#1a2026] mb-4">Exchanges</h2>
            <p className="text-sm text-[#333b42]">
              We do not offer direct exchanges at this time. To exchange an item, please return the original item for a refund and place a new order for the desired item.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
