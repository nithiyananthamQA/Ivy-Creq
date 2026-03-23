import { useState } from 'react';
import { Menu, User, ShoppingCart, Heart, X } from 'lucide-react';
import { Link } from 'react-router';
import { useFavorites } from '../../context/FavoritesContext';
import { useCart } from '../../context/CartContext';
import BlackLogo from '../../../assets/Black.svg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count: favoritesCount } = useFavorites();
  const { itemCount, isCartOpen, setCartOpen } = useCart();

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top announcement bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <p>Free Shipping on Orders ₹2,000+ | <Link to="/new-arrivals" className="underline">Shop Now</Link></p>
      </div>

      {/* Main header */}
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={BlackLogo} alt="Ivy Crew" className="h-8 lg:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            <Link to="/" className="text-[#333b42] hover:text-black">Home</Link>
            <Link to="/men" className="text-[#333b42] hover:text-black">Men</Link>
            <Link to="/women" className="text-[#333b42] hover:text-black">Women</Link>
            <Link to="/sale" className="text-[#333b42] hover:text-black">Sale</Link>
            <Link to="/new-arrivals" className="text-[#333b42] hover:text-black">New Arrivals</Link>
            <Link to="/best-sellers" className="text-[#333b42] hover:text-black">Best Sellers</Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 lg:gap-4">
            <Link to="/favorites" className="p-2 relative" aria-label="Favorites">
              <Heart className="w-5 h-5 text-[#333b42]" />
              {favoritesCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <Link to="/rewards/login" className="p-2" aria-label="Account">
              <User className="w-5 h-5 text-[#333b42]" />
            </Link>
            <button className="p-2 relative" onClick={() => setCartOpen(!isCartOpen)} aria-label="Shopping cart">
              <ShoppingCart className="w-5 h-5 text-[#333b42]" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50">
          <div className="flex justify-between items-center p-4 border-b">
            <img src={BlackLogo} alt="Ivy Crew" className="h-8 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4" aria-label="Mobile navigation">
            <Link to="/" className="text-lg" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/men" className="text-lg" onClick={() => setMobileMenuOpen(false)}>Men</Link>
            <Link to="/women" className="text-lg" onClick={() => setMobileMenuOpen(false)}>Women</Link>
            <Link to="/sale" className="text-lg" onClick={() => setMobileMenuOpen(false)}>Sale</Link>
            <Link to="/new-arrivals" className="text-lg" onClick={() => setMobileMenuOpen(false)}>New Arrivals</Link>
            <Link to="/best-sellers" className="text-lg" onClick={() => setMobileMenuOpen(false)}>Best Sellers</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
