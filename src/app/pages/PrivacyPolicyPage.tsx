import { Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly to us, including:',
    list: [
      'Name, email address, and contact information when you create an account',
      'Billing and shipping address when you make a purchase',
      'Payment information (processed securely through our payment providers)',
      'Communications you send to us, including customer service inquiries',
      'Preferences and settings within your account',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to:',
    list: [
      'Process and fulfill your orders',
      'Communicate with you about your account and orders',
      'Send promotional communications (with your consent)',
      'Improve our products, services, and website',
      'Prevent fraud and ensure the security of our platform',
    ],
  },
  {
    title: '3. Information Sharing',
    content: 'We do not sell your personal information to third parties. We may share your information with service providers who assist us in operating our business (such as payment processors, shipping carriers, and email service providers). These providers are required to protect your information and only use it for the specific services they provide to us.',
  },
  {
    title: '4. Cookies and Tracking',
    content: 'We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings.',
  },
  {
    title: '5. Data Security',
    content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to:',
    list: [
      'Access and review your personal information',
      'Request correction of inaccurate information',
      'Request deletion of your personal information',
      'Opt out of marketing communications',
      'Request a copy of your data',
    ],
  },
  {
    title: '7. Contact Us',
    content: 'If you have any questions about this Privacy Policy, please contact us at privacy@travismathew.com or call 1-800-TRAVIS-M.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Read the TravisMathew Privacy Policy to understand how we collect, use, and protect your personal information."
      />

      <section className="bg-[#1a2026] text-white py-8 md:py-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] text-center">
          <Shield className="w-8 h-8 mx-auto mb-3 text-white/60" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-white/50 text-sm">Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-[#e5e5e5] pb-8 last:border-b-0">
                <h2 className="text-base font-bold text-[#1a2026] mb-3">{section.title}</h2>
                <p className="text-sm text-[#333b42] leading-relaxed">{section.content}</p>
                {section.list && (
                  <ul className="mt-3 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#333b42]">
                        <span className="w-1.5 h-1.5 bg-[#1a2026] rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
