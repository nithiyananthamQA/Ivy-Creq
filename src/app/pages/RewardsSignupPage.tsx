import { useState } from 'react';
import { Link } from 'react-router';
import SEOHead from '../components/SEOHead';

export default function RewardsSignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!agreedToTerms) {
      setError('Please agree to the terms to continue.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead title="Join Ivy Crew Rewards" description="Join Ivy Crew Rewards for free. Earn points on every purchase, get exclusive offers, free gifts, and early access to new collections." />
      <div className="max-w-[600px] mx-auto px-4 py-8 md:py-12">
        {/* Rewards Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">m</span>
            </div>
            <span className="text-2xl font-bold">REWARDS</span>
          </div>

          <h1 className="text-xl font-bold mb-4">
            It's free to join & you can start earning right away!
          </h1>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" stroke="black" strokeWidth="2"/>
                  <path d="M24 14v10l7 4" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-sm font-bold mb-1">Get FREE</p>
              <p className="text-xs text-[#333b42]">Gifts & Exclusive Offers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="12" y="16" width="24" height="20" stroke="black" strokeWidth="2"/>
                  <path d="M16 16v-4a8 8 0 0116 0v4" stroke="black" strokeWidth="2"/>
                </svg>
              </div>
              <p className="text-sm font-bold mb-1">Unlock The</p>
              <p className="text-xs text-[#333b42]">Perks With Every Purchase</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M14 24h20M24 14l10 10-10 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm font-bold mb-1">Earn &</p>
              <p className="text-xs text-[#333b42]">Redeem Rewards</p>
            </div>
          </div>

          <p className="text-xs text-[#333b42] mb-8">
            Plus other exclusive benefits. Exclusions Apply.<br/>
            <Link to="/rewards" className="underline">See Details</Link>
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-10 border border-[#e5e5e5] bg-[#f5f7f8] mb-6">
            <h2 className="text-xl font-bold text-[#1a2026] mb-2">Welcome to Ivy Crew Rewards!</h2>
            <p className="text-sm text-[#333b42] mb-6">
              We've sent a confirmation to {email}. Start earning points on your next purchase.
            </p>
            <Link
              to="/"
              className="inline-block bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-900 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
        <>
        {/* Signup Form */}
        <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-2">* First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#d1d9de] rounded focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">* Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#d1d9de] rounded focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">* Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#d1d9de] rounded focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm">* Password</label>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-sm text-black hover:underline">
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#d1d9de] rounded focus:outline-none focus:border-black"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1"
            />
            <label className="text-xs text-[#333b42]">
              By joining, you agree to receive emails from Ivy Crew, and you acknowledge that you have read the{' '}
              <Link to="/privacy-policy" className="underline">Privacy Policy</Link>. You can unsubscribe at any time. View our{' '}
              <Link to="/terms-of-service" className="underline">Terms of Use</Link> and{' '}
              <Link to="/terms-of-service" className="underline">Ivy Crew Rewards Program Terms & Conditions</Link>.
            </label>
          </div>

          {error && (
            <p className="text-xs text-red-600" role="alert">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-4 font-bold text-sm hover:bg-gray-900 transition-colors"
          >
            SIGN UP
          </button>
        </form>
        </>
        )}

        {/* Sign In Link */}
        <div className="text-center py-6 border-t border-[#e5e5e5]">
          <p className="text-sm mb-2">Already a Member?</p>
          <Link to="/rewards/login" className="text-sm underline">Sign In</Link>
          <p className="text-sm text-[#333b42] mt-2">
            Learn More at <Link to="/rewards" className="underline">Ivy Crew Rewards</Link>
          </p>
        </div>
      </div>
    </>
  );
}
