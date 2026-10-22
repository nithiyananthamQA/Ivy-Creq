import { Link } from 'react-router';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[500px] mx-auto text-center">
          <p className="text-8xl font-black text-[#1a2026]/10 mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a2026] mb-3">Page Not Found</h1>
          <p className="text-sm text-[#333b42] mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="bg-black text-white py-2.5 px-8 font-bold text-sm hover:bg-gray-900 transition-colors">
              Back to Home
            </Link>
            <Link to="/contact" className="border border-[#1a2026] text-[#1a2026] py-2.5 px-8 font-bold text-sm hover:bg-[#1a2026] hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
