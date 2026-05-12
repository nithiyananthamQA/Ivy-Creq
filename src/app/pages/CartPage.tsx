import { Link } from 'react-router';
import { Minus, Plus, Trash2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useCart, parsePrice, formatINR, FREE_SHIPPING_THRESHOLD } from '../context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, itemCount, subtotal } = useCart();

  return (
    <>
      <SEOHead title="Your Cart" description="Review items in your shopping cart and proceed to checkout at Ivy Crew." />
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] py-8 md:py-12">
        <div className="flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-[81px]">
          {/* Left Section - Cart Items */}
          <div className="w-full lg:w-[640px] flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-[28px] font-bold text-[#090c0f] leading-[33.6px]">
                YOUR CART ({itemCount})
              </h1>
              <Link
                to="/"
                className="flex items-center gap-2 text-[#090c0f] hover:underline"
              >
                <span className="text-sm">Continue Shopping</span>
              </Link>
            </div>

            {/* Cart Items */}
            <div className="border-b border-[#e5e5e5] pb-4 mb-6">
              <h2 className="text-[16px] font-bold text-[#090c0f] mb-4">Your Items</h2>

              {items.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-[#333b42] text-sm mb-4">There are no items in your cart</p>
                  <Link
                    to="/new-arrivals"
                    className="bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-900 transition-colors inline-block"
                  >
                    Shop New Arrivals
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-[#e5e5e5]">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size ?? ''}`} className="flex gap-4 md:gap-6 py-4">
                      {/* Product Image */}
                      <div className="w-[120px] md:w-[160px] h-[150px] md:h-[200px] flex-shrink-0 bg-white">
                        <img
                          src={item.product.image1 || item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                          width={160}
                          height={200}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            {item.product.franchise && (
                              <p className="text-xs text-[#6c7782] uppercase mb-1">{item.product.franchise}</p>
                            )}
                            <h3 className="text-sm md:text-base font-bold text-[#1a2026]">{item.product.name}</h3>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.size)}
                            className="p-1 text-[#6c7782] hover:text-red-500 transition-colors flex-shrink-0"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {item.size && (
                          <p className="text-xs text-[#6c7782] mt-1">Size: {item.size}</p>
                        )}
                        <p className="text-sm text-[#333b42] mt-1">{item.product.price}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-0 mt-4 border border-[#e2dfda] w-fit">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
                            className="w-9 h-9 flex items-center justify-center text-[#333b42] hover:bg-[#f5f7f8] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-10 h-9 flex items-center justify-center text-sm font-medium text-[#1a2026] border-x border-[#e2dfda]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
                            className="w-9 h-9 flex items-center justify-center text-[#333b42] hover:bg-[#f5f7f8] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Line Total */}
                        <p className="text-sm font-bold text-[#1a2026] mt-3">
                          {formatINR(parsePrice(item.product.price) * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="bg-[#f5f7f8] p-6 md:p-8 lg:sticky lg:top-8">
              <h2 className="text-[20px] font-bold text-[#090c0f] mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#333b42]">Subtotal</span>
                  <span className="text-[#090c0f]">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#333b42]">Estimated Taxes</span>
                  <span className="text-[#090c0f]">--</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#333b42]">Shipping</span>
                  <span className="text-[#090c0f]">{subtotal >= FREE_SHIPPING_THRESHOLD ? 'FREE' : '--'}</span>
                </div>
              </div>

              <div className="border-t border-[#d1d9de] pt-4 mb-6">
                <div className="flex justify-between text-base font-bold">
                  <span className="text-[#090c0f]">Total</span>
                  <span className="text-[#090c0f]">{formatINR(subtotal)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to={items.length > 0 ? '/checkout' : '#'}
                className={`block w-full bg-black text-white py-3 px-4 font-bold text-[14px] text-center hover:bg-gray-900 transition-colors mb-3 ${items.length === 0 ? 'opacity-50 pointer-events-none' : ''}`}
              >
                Checkout
              </Link>

              {items.length > 0 && subtotal < FREE_SHIPPING_THRESHOLD && (
                <p className="text-xs text-[#6c7782] text-center mt-3">
                  Add {formatINR(FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
