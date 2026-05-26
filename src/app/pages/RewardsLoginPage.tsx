import { useState } from 'react';
import { Link } from 'react-router';
import SEOHead from '../components/SEOHead';

export default function RewardsLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }
    setSignedIn(true);
  };

  return (
    <>
      <SEOHead title="Sign In — Ivy Crew Rewards" description="Sign in to your Ivy Crew Rewards account to earn points, access exclusive offers, and track your orders." />
      <div className="max-w-[492px] mx-auto px-4 py-8 md:py-12">
        {/* Rewards Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">m</span>
            </div>
            <span className="text-2xl font-bold">REWARDS</span>
          </div>

          {/* Sign in with Shop Button */}
          <button className="w-full max-w-[350px] bg-[#5a31f4] hover:bg-[#4a21d4] text-white py-3 px-4 rounded font-bold text-sm mb-3 transition-colors">
            Sign in with Shop
          </button>

          <p className="text-sm text-[#333b42]">Or sign in with</p>
        </div>

        {signedIn ? (
          <div className="text-center py-10 border border-[#e5e5e5] bg-[#f5f7f8] mb-6">
            <h2 className="text-xl font-bold text-[#1a2026] mb-2">You're signed in</h2>
            <p className="text-sm text-[#333b42] mb-6">Welcome back, {email}.</p>
            <Link
              to="/"
              className="inline-block bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-900 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
        <>
        {/* Login Form */}
        <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-2">
              * Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#d1d9de] rounded focus:outline-none focus:border-black"
              placeholder="Email"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm">
                * Password
              </label>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-sm text-black hover:underline">
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-[#d1d9de] rounded focus:outline-none focus:border-black"
              placeholder="Password"
            />
          </div>

          <div className="text-sm">
            <p className="mb-2">
              By signing in, you agree to Ivy Crew's{' '}
              <Link to="/terms-of-service" className="underline">Terms of Use</Link> and{' '}
              <Link to="/terms-of-service" className="underline">Ivy Crew Rewards Program Terms & Conditions</Link>. To learn more about how we use and protect your data, please see our{' '}
              <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
            </p>
          </div>

          {error && (
            <p className="text-xs text-red-600" role="alert">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-4 font-bold text-sm hover:bg-gray-900 transition-colors"
          >
            SIGN IN
          </button>
        </form>
        </>
        )}

        {/* Links */}
        <div className="text-center space-y-2 mb-8">
          <div>
            <span className="text-sm text-[#333b42]">Forgot Your Password? </span>
            <button type="button" className="text-sm underline">Reset Here</button>
          </div>
          <div>
            <span className="text-sm text-[#333b42]">Looking for your Ivy Crew Rewards points? </span>
            <button type="button" className="text-sm underline">Look them up.</button>
          </div>
        </div>

        {/* Not a Member Section */}
        <div className="text-center py-6 border-t border-[#e5e5e5]">
          <p className="text-sm mb-3">Not a Member?</p>
          <Link
            to="/rewards/signup"
            className="text-sm underline"
          >
            Sign Up
          </Link>
          <p className="text-sm text-[#333b42] mt-2">
            Learn More at <Link to="/rewards" className="underline">Ivy Crew Rewards</Link>
          </p>
        </div>

        {/* My Bag Section */}
        <div className="mt-8 pt-6 border-t border-[#e5e5e5]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm">My Bag (0 Item)</h3>
            <Link to="/rewards/login" className="text-sm underline">Free Shipping for Members. Log In or Join</Link>
          </div>

          <div className="bg-[#f5f7f8] p-6 text-center">
            <h4 className="font-bold text-lg mb-4">Your Cart Is Empty</h4>
            <div className="space-y-3">
              <Link to="/rewards/login" className="block w-full bg-black text-white py-3 font-bold text-sm hover:bg-gray-900">
                Log In
              </Link>
              <Link to="/new-arrivals" className="block w-full bg-black text-white py-3 font-bold text-sm hover:bg-gray-900">
                Shop Men's New Arrivals
              </Link>
              {/* Women's collection hidden for launch — re-enable when stocked */}
              {/* <Link to="/women" className="block w-full bg-black text-white py-3 font-bold text-sm hover:bg-gray-900">
                Shop Women's New Arrivals
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
