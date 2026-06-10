import { useState } from 'react';
import { Link } from 'react-router';
import { Lock, ChevronLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  useCart,
  parsePrice,
  formatINR,
  FREE_SHIPPING_THRESHOLD,
  FLAT_SHIPPING_RATE,
  TAX_RATE,
} from '../context/CartContext';
import { openRazorpayCheckout, type RazorpaySuccess } from '../lib/razorpay';

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID as string | undefined;

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING_RATE;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;

  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (paying) return;
    setError(null);

    if (!RAZORPAY_KEY_ID) {
      setError('Payment is not configured. Please contact support.');
      return;
    }

    setPaying(true);
    try {
      const amountPaise = Math.round(total * 100);

      const createRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          amount: amountPaise,
          currency: 'INR',
          receipt: `ivycrew_${Date.now()}`,
          notes: {
            email: form.email,
            customer: `${form.firstName} ${form.lastName}`.trim(),
            city: form.city,
          },
        }),
      });

      const rawText = await createRes.text();
      if (!createRes.ok) {
        let detail = `HTTP ${createRes.status}`;
        try {
          const data = JSON.parse(rawText);
          if (data?.error) detail = data.error;
        } catch {
          // Non-JSON response (e.g. dev server returned an HTML 404).
          if (rawText.startsWith('<')) detail = `Endpoint /api/razorpay/create-order not reachable (got HTML ${createRes.status}). Run via wrangler pages dev so functions/ runs.`;
        }
        throw new Error(detail);
      }
      let orderResp: { orderId: string; amount: number; keyId: string };
      try {
        orderResp = JSON.parse(rawText);
      } catch {
        throw new Error('Order endpoint returned non-JSON response');
      }
      const { orderId, amount, keyId } = orderResp;

      await openRazorpayCheckout({
        amountPaise: amount,
        orderId,
        keyId: keyId || RAZORPAY_KEY_ID,
        prefill: {
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          contact: form.phone,
        },
        notes: {
          address: `${form.address}, ${form.city}, ${form.state} ${form.zip}`,
        },
        onSuccess: async (resp: RazorpaySuccess) => {
          try {
            const verifyRes = await fetch('/api/razorpay/verify', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(resp),
            });
            const data = await verifyRes.json();
            if (!verifyRes.ok || !data.ok) {
              throw new Error(data.error || 'Payment verification failed');
            }
            clearCart();
            setSubmitted(true);
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Payment verification failed');
          } finally {
            setPaying(false);
          }
        },
        onDismiss: () => {
          setPaying(false);
          setError('Payment cancelled. You can try again whenever you’re ready.');
        },
      });
    } catch (err) {
      setPaying(false);
      setError(err instanceof Error ? err.message : 'Something went wrong starting payment');
    }
  };

  if (submitted) {
    return (
      <>
        <SEOHead title="Order Confirmed" description="Your order has been placed." />
        <div className="max-w-[600px] mx-auto px-4 py-16 text-center">
          <div className="w-16 h-16 bg-[#1a2026] text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a2026] mb-3">Order Confirmed</h1>
          <p className="text-sm text-[#47515c] mb-8">
            Thank you for your purchase! A confirmation email has been sent to {form.email || 'your email'}.
          </p>
          <Link
            to="/"
            className="inline-block bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-900 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <SEOHead title="Checkout" description="Complete your purchase at Ivy Crew." />
        <div className="max-w-[600px] mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-[#1a2026] mb-4">Your cart is empty</h1>
          <Link
            to="/"
            className="inline-block bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-900 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </>
    );
  }

  const inputClass =
    'w-full border border-[#e5e5e5] px-3 py-2.5 text-sm text-[#1a2026] placeholder:text-[#a0a8b0] focus:outline-none focus:border-[#1a2026] transition-colors';

  return (
    <>
      <SEOHead title="Checkout" description="Complete your purchase at Ivy Crew." />
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] py-8 md:py-12">
        {/* Back link */}
        <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-[#6c7782] hover:text-[#1a2026] transition-colors mb-6">
          <ChevronLeft className="w-4 h-4" />
          Back to Cart
        </Link>

        <div className="flex flex-col-reverse lg:flex-row lg:justify-center gap-8 lg:gap-[81px]">
          {/* Left — Order Summary */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="bg-[#f5f7f8] p-6 md:p-8 lg:sticky lg:top-8">
              <h2 className="text-base font-bold text-[#1a2026] mb-4">
                Order Summary ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>

              <div className="divide-y divide-[#e5e5e5] mb-4">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size ?? ''}`} className="flex gap-3 py-3">
                    <div className="w-14 h-[70px] bg-white flex-shrink-0">
                      <img
                        src={item.product.image1 || item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                        width={56}
                        height={70}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#1a2026] truncate">{item.product.name}</p>
                      {item.size && <p className="text-[11px] text-[#6c7782]">Size: {item.size}</p>}
                      <p className="text-[11px] text-[#6c7782]">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-xs font-bold text-[#1a2026] shrink-0">
                      {formatINR(parsePrice(item.product.price) * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-[#d1d9de] pt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#333b42]">Subtotal</span>
                  <span className="text-[#1a2026]">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333b42]">Shipping</span>
                  <span className="text-[#1a2026]">{shipping === 0 ? 'FREE' : formatINR(shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#333b42]">Tax</span>
                  <span className="text-[#1a2026]">{formatINR(tax)}</span>
                </div>
                <div className="flex justify-between font-bold text-base border-t border-[#d1d9de] pt-3 mt-3">
                  <span className="text-[#1a2026]">Total</span>
                  <span className="text-[#1a2026]">{formatINR(total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Checkout Form */}
          <div className="w-full lg:w-[640px] flex-shrink-0">
            <form onSubmit={handleSubmit} className="w-full">
              <h1 className="text-2xl md:text-[28px] font-bold text-[#1a2026] mb-6">Checkout</h1>

              {/* Contact */}
              <section className="mb-8">
                <h2 className="text-sm font-bold text-[#1a2026] mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-black inline-block" />
                  Contact
                </h2>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    value={form.phone}
                    onChange={update('phone')}
                    className={inputClass}
                  />
                </div>
              </section>

              {/* Shipping */}
              <section className="mb-8">
                <h2 className="text-sm font-bold text-[#1a2026] mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-black inline-block" />
                  Shipping Address
                </h2>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      required
                      value={form.firstName}
                      onChange={update('firstName')}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      value={form.lastName}
                      onChange={update('lastName')}
                      className={inputClass}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    value={form.address}
                    onChange={update('address')}
                    className={inputClass}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      value={form.city}
                      onChange={update('city')}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="State"
                      required
                      value={form.state}
                      onChange={update('state')}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="ZIP code"
                      required
                      value={form.zip}
                      onChange={update('zip')}
                      className={`${inputClass} col-span-2 sm:col-span-1`}
                    />
                  </div>
                </div>
              </section>

              {/* Payment notice */}
              <section className="mb-6">
                <h2 className="text-sm font-bold text-[#1a2026] mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-black inline-block" />
                  Payment
                </h2>
                <div className="border border-[#e5e5e5] bg-[#f9fafb] p-4 text-sm text-[#47515c] flex items-start gap-3">
                  <Lock className="w-4 h-4 mt-0.5 text-[#1a2026] flex-shrink-0" />
                  <p>
                    You’ll be redirected to Razorpay’s secure checkout to complete payment.
                    We accept UPI, cards, net banking, and wallets.
                  </p>
                </div>
              </section>

              {error && (
                <p className="mb-4 text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={paying}
                className="w-full bg-black text-white py-3.5 px-6 font-bold text-sm hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Lock className="w-4 h-4" />
                {paying ? 'Processing…' : `Pay ${formatINR(total)}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
