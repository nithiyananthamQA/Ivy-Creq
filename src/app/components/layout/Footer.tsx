import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';
import { imgIcon, imgYourPrivacyChoicesIcon } from '../../data/products';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setSubmitted(true);
    setEmail('');
  };

  if (submitted) {
    return (
      <p className="text-sm text-white/80" role="status">
        Thanks — you're subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-white text-black rounded"
          aria-label="Email for newsletter"
        />
        <button
          type="submit"
          className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-200"
        >
          Join
        </button>
      </div>
      {error && (
        <p className="text-xs text-red-400 mt-2" role="alert">{error}</p>
      )}
    </form>
  );
}

function FooterAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 md:border-none">
      {/* Mobile: collapsible button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center justify-between w-full py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-sm">{title}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Desktop: always-visible heading */}
      <h3 className="hidden md:block font-bold mb-4">{title}</h3>

      {/* Content: collapsible on mobile, always visible on desktop */}
      <div className={`md:!block overflow-hidden transition-[max-height] duration-200 ease-in-out ${open ? 'max-h-60' : 'max-h-0'} md:max-h-none`}>
        <div className="pb-4 md:pb-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-0 md:pt-12 pb-6">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        {/* Mobile: accordion list / Desktop: 4-column grid */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 mb-8">
          <FooterAccordion title="Shop">
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/men" className="hover:underline">Men</Link></li>
              {/* Women's collection hidden for launch — re-enable when stocked */}
              {/* <li><Link to="/women" className="hover:underline">Women</Link></li> */}
              <li><Link to="/sale" className="hover:underline">Sale</Link></li>
              <li><Link to="/new-arrivals" className="hover:underline">New Arrivals</Link></li>
            </ul>
          </FooterAccordion>

          <FooterAccordion title="Customer Service">
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/shipping-returns" className="hover:underline">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="hover:underline">Size Guide</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </FooterAccordion>

          <FooterAccordion title="About">
            <ul className="space-y-2 text-sm">
              <li><Link to="/our-story" className="hover:underline">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:underline">Sustainability</Link></li>
              <li><Link to="/store-locator" className="hover:underline">Store Locator</Link></li>
            </ul>
          </FooterAccordion>

          {/* Newsletter — always visible, no accordion */}
          <div className="pt-6 md:pt-0">
            <h3 className="font-bold mb-4 text-sm md:text-base">Stay Connected</h3>
            <p className="text-sm mb-4 text-gray-400">Sign up for exclusive offers and updates</p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-4">
              <img src={imgIcon} alt="Payment methods" className="h-6" width={24} height={24} />
              <img src={imgYourPrivacyChoicesIcon} alt="Your Privacy Choices" className="h-6" width={24} height={24} />
            </div>
            <p className="text-gray-400">&copy; 2026 Ivy Crew. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
