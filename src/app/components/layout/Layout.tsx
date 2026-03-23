import { useState, useEffect, lazy, Suspense } from 'react';
import { Outlet, useLocation, ScrollRestoration } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../CartDrawer';
import ChatWidget from '../ChatWidget';
import { FavoritesProvider } from '../../context/FavoritesContext';
import { CartProvider } from '../../context/CartContext';

const MysteryDiscountModal = lazy(() => import('../MysteryDiscountModal'));

export default function Layout() {
  const [mysteryModalOpen, setMysteryModalOpen] = useState(false);
  const location = useLocation();

  // Mystery modal timer: only fires on homepage
  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setMysteryModalOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <CartProvider>
      <FavoritesProvider>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
          <CartDrawer />
          <ChatWidget />
          {mysteryModalOpen && (
            <Suspense>
              <MysteryDiscountModal isOpen={mysteryModalOpen} onClose={() => setMysteryModalOpen(false)} />
            </Suspense>
          )}
          <ScrollRestoration />
        </div>
      </FavoritesProvider>
    </CartProvider>
  );
}
