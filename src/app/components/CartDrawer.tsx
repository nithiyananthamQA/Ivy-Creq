import { Link } from 'react-router';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, formatINR } from '../context/CartContext';

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, itemCount, subtotal, isCartOpen, setCartOpen } = useCart();

  const onClose = () => setCartOpen(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-full md:w-[390px] lg:w-[492px] bg-white z-50 shadow-xl overflow-hidden flex flex-col transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="bg-white flex-shrink-0">
          <div className="flex items-center justify-between px-[22px] py-[10px]">
            <div className="flex-1 flex items-center justify-center">
              <h2 className="font-medium text-[14px] text-black text-center tracking-[0.14px] leading-[30px]">
                My Bag ({itemCount} {itemCount === 1 ? 'Item' : 'Items'})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-[24px] h-[24px] hover:bg-gray-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Banner */}
          <div className="py-[21px] border-t border-b border-[#e2dfda]">
            <p className="text-center text-[14px] font-medium text-black tracking-[0.14px] leading-[21px] px-4">
              <span>Free Shipping for Members. </span>
              <Link to="/rewards/login" onClick={onClose} className="underline hover:no-underline">Log In</Link>
              <span> or </span>
              <Link to="/rewards/signup" onClick={onClose} className="underline hover:no-underline">Join</Link>
            </p>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white">
          {items.length === 0 ? (
            /* Empty Cart State */
            <div className="px-[18.5px] pt-[10px] pb-[36px]">
              <div className="py-10 text-center">
                <h4 className="font-bold text-[18px] text-[#333b42] mb-6">Your Cart is Empty</h4>
                <div className="space-y-3 px-4">
                  <Link
                    to="/rewards/login"
                    onClick={onClose}
                    className="block bg-black text-white px-[16px] py-[11px] font-bold text-[14px] text-center hover:bg-gray-900 transition-colors"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/new-arrivals"
                    onClick={onClose}
                    className="block bg-black text-white px-[16px] py-[11px] font-bold text-[14px] text-center hover:bg-gray-900 transition-colors"
                  >
                    Shop Men's New Arrivals
                  </Link>
                  <Link
                    to="/women"
                    onClick={onClose}
                    className="block bg-black text-white px-[16px] py-[11px] font-bold text-[14px] text-center hover:bg-gray-900 transition-colors"
                  >
                    Shop Women's New Arrivals
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* Cart Items */
            <div className="divide-y divide-[#e2dfda]">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size ?? ''}`} className="flex gap-4 p-4">
                  {/* Product Image */}
                  <div className="w-[100px] h-[126px] flex-shrink-0 bg-white">
                    <img
                      src={item.product.image1 || item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                      width={100}
                      height={126}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div className="min-w-0">
                        {item.product.franchise && (
                          <p className="text-[11px] text-[#6c7782] uppercase">{item.product.franchise}</p>
                        )}
                        <h3 className="text-sm font-bold text-[#1a2026] truncate">{item.product.name}</h3>
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
                    <div className="flex items-center gap-0 mt-3 border border-[#e2dfda] w-fit">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
                        className="w-8 h-8 flex items-center justify-center text-[#333b42] hover:bg-[#f5f7f8] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#1a2026] border-x border-[#e2dfda]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
                        className="w-8 h-8 flex items-center justify-center text-[#333b42] hover:bg-[#f5f7f8] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer — only when there are items */}
        {items.length > 0 && (
          <div className="flex-shrink-0 border-t border-[#e2dfda] bg-white p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold text-[#1a2026]">Subtotal</span>
              <span className="text-sm font-bold text-[#1a2026]">{formatINR(subtotal)}</span>
            </div>
            <Link
              to="/cart"
              onClick={onClose}
              className="block w-full bg-black text-white py-3 font-bold text-[14px] text-center hover:bg-gray-900 transition-colors mb-2"
            >
              View Cart & Checkout
            </Link>
            <p className="text-[11px] text-[#6c7782] text-center">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
