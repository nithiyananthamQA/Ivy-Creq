import { useState } from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with TravisMathew customer service. We're here to help with orders, returns, sizing, and more." />

      <section className="bg-[#1a2026] text-white py-8 md:py-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Get in Touch</h1>
          <p className="text-white/50 text-sm max-w-md mx-auto">We're here to help. Reach out and we'll get back to you as soon as possible.</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Mail, label: 'Email', value: 'support@travismathew.com' },
              { icon: Phone, label: 'Phone', value: '1-800-TRAVIS-M' },
              { icon: Clock, label: 'Hours', value: 'Mon–Fri 8am–5pm PST' },
              { icon: MapPin, label: 'Headquarters', value: 'Union City, CA 94587' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="border border-[#e5e5e5] p-5 text-center hover:border-black transition-colors">
                <Icon className="w-5 h-5 mx-auto mb-3 text-[#1a2026]" />
                <p className="text-xs font-bold text-[#1a2026] mb-1">{label}</p>
                <p className="text-xs text-[#333b42]">{value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h2 className="text-lg font-bold text-[#1a2026] mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1a2026] mb-1.5">Name *</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 border border-[#d1d9de] text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1a2026] mb-1.5">Email *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 border border-[#d1d9de] text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1a2026] mb-1.5">Message *</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full px-4 py-2.5 border border-[#d1d9de] text-sm focus:outline-none focus:border-black resize-none transition-colors" />
                </div>
                <button type="submit" className="bg-black text-white py-2.5 px-8 font-bold text-sm hover:bg-gray-900 transition-colors">Send Message</button>
              </form>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#f5f7f8] p-6 h-full">
                <h3 className="font-bold text-[#1a2026] mb-4">Before You Reach Out</h3>
                <ul className="space-y-3 text-sm text-[#333b42]">
                  <li className="flex gap-2"><span className="text-black font-bold">01</span> Check our FAQ page for quick answers</li>
                  <li className="flex gap-2"><span className="text-black font-bold">02</span> Visit Shipping & Returns for order issues</li>
                  <li className="flex gap-2"><span className="text-black font-bold">03</span> Use our Size Guide for fit questions</li>
                  <li className="flex gap-2"><span className="text-black font-bold">04</span> Response time: within 24 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
