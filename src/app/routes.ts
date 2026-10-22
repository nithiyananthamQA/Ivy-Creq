import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';
import Layout from './components/layout/Layout';

// Eager load the homepage for fastest initial paint
import Home from './pages/Home';

// Lazy load all other pages for code splitting
const CartPage = lazy(() => import('./pages/CartPage'));
const RewardsLoginPage = lazy(() => import('./pages/RewardsLoginPage'));
const RewardsSignupPage = lazy(() => import('./pages/RewardsSignupPage'));
const MenPage = lazy(() => import('./pages/MenPage'));
const WomenPage = lazy(() => import('./pages/WomenPage'));
const SalePage = lazy(() => import('./pages/SalePage'));
const NewArrivalsPage = lazy(() => import('./pages/NewArrivalsPage'));
const BestSellersPage = lazy(() => import('./pages/BestSellersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ShippingReturnsPage = lazy(() => import('./pages/ShippingReturnsPage'));
const SizeGuidePage = lazy(() => import('./pages/SizeGuidePage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const OurStoryPage = lazy(() => import('./pages/OurStoryPage'));
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage'));
const StoreLocatorPage = lazy(() => import('./pages/StoreLocatorPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: '/', Component: Home },
      { path: '/cart', Component: CartPage },
      { path: '/checkout', Component: CheckoutPage },
      { path: '/product/:slug', Component: ProductDetailPage },
      { path: '/favorites', Component: FavoritesPage },
      { path: '/rewards/login', Component: RewardsLoginPage },
      { path: '/rewards/signup', Component: RewardsSignupPage },
      { path: '/rewards', Component: RewardsLoginPage },

      // Category pages
      { path: '/men', Component: MenPage },
      { path: '/women', Component: WomenPage },
      { path: '/sale', Component: SalePage },
      { path: '/new-arrivals', Component: NewArrivalsPage },
      { path: '/best-sellers', Component: BestSellersPage },

      // Info pages
      { path: '/contact', Component: ContactPage },
      { path: '/shipping-returns', Component: ShippingReturnsPage },
      { path: '/size-guide', Component: SizeGuidePage },
      { path: '/faq', Component: FaqPage },

      // About pages
      { path: '/our-story', Component: OurStoryPage },
      { path: '/sustainability', Component: SustainabilityPage },
      { path: '/store-locator', Component: StoreLocatorPage },

      // Legal pages
      { path: '/privacy-policy', Component: PrivacyPolicyPage },
      { path: '/terms-of-service', Component: TermsOfServicePage },

      // 404 catch-all
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
