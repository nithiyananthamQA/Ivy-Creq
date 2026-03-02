import { X } from 'lucide-react';
import { Link } from 'react-router';

interface MysteryDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MysteryDiscountModal({ isOpen, onClose }: MysteryDiscountModalProps) {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white max-w-[600px] md:max-w-[800px] w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left Side - Form */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              A Special Deal Is Waiting for You
            </h2>
            <p className="text-[#333b42] mb-6">Pick your style and reveal your offer:</p>

            <div className="space-y-3">
              <Link
                to="/men"
                onClick={onClose}
                className="block w-full bg-black text-white py-3 px-4 font-bold text-sm hover:bg-gray-900 transition-colors text-center"
              >
                Men
              </Link>
              <Link
                to="/women"
                onClick={onClose}
                className="block w-full bg-black text-white py-3 px-4 font-bold text-sm hover:bg-gray-900 transition-colors text-center"
              >
                Women
              </Link>
              <Link
                to="/new-arrivals"
                onClick={onClose}
                className="block w-full bg-black text-white py-3 px-4 font-bold text-sm hover:bg-gray-900 transition-colors text-center"
              >
                I Want It All
              </Link>
              <button
                onClick={onClose}
                className="w-full bg-white border border-black text-black py-3 px-4 font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                No, I'll Pay Full Price
              </button>
            </div>

            <p className="text-xs text-[#666] mt-6 leading-relaxed">
              * Availability is limited and subject to change.
              <br />
              ** Applies to eligible items only. Excludes clearance and already-reduced products. One offer per customer. Rewards members get priority access.
              <br />
              *** Valid across all channels. Cannot be stacked with other promotions or active codes.
              <br />
              **** Discount is applicable to regular-priced merchandise only.
            </p>
          </div>

          {/* Right Side - Visual */}
          <div className="hidden md:block relative min-h-[400px] bg-[#1a2026]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 text-white">
                <p className="text-5xl font-bold mb-1">Your</p>
                <p className="text-5xl font-bold mb-1">Exclusive</p>
                <p className="text-5xl font-bold">Offer</p>
                <div className="w-16 h-[2px] bg-white mx-auto mt-6 mb-4" />
                <p className="text-base tracking-widest uppercase">Unlock Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
