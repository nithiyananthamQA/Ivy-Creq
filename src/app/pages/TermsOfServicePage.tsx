import { FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using the TravisMathew website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.',
  },
  {
    title: '2. Use of Website',
    content: 'You agree to use this website only for lawful purposes. You may not:',
    list: [
      'Use the site in any way that violates applicable laws or regulations',
      'Attempt to interfere with the proper working of the site',
      'Use automated systems to access the site without our permission',
      'Impersonate any person or entity',
    ],
  },
  {
    title: '3. Products and Pricing',
    content: 'We make every effort to display accurate product descriptions and pricing. However, we reserve the right to correct any errors and to change or update information at any time. Prices are subject to change without notice. All prices are displayed in US dollars.',
  },
  {
    title: '4. Orders and Payment',
    content: 'By placing an order, you represent that all information you provide is accurate and complete. We reserve the right to refuse or cancel any order for any reason, including limitations on product availability, errors in pricing, or suspected fraud.',
  },
  {
    title: '5. Intellectual Property',
    content: 'All content on this website, including text, images, logos, and graphics, is the property of TravisMathew and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written consent.',
  },
  {
    title: '6. TM Rewards Program',
    content: 'The TM Rewards Program is subject to its own terms and conditions. By participating in the program, you agree to those additional terms, which are available on the TM Rewards page.',
  },
  {
    title: '7. Limitation of Liability',
    content: 'TravisMathew shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the website or purchase of products. Our total liability shall not exceed the amount you paid for the product giving rise to the claim.',
  },
  {
    title: '8. Governing Law',
    content: 'These Terms of Service are governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles.',
  },
  {
    title: '9. Contact',
    content: 'For questions about these Terms of Service, please contact us at legal@travismathew.com or call 1-800-TRAVIS-M.',
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Read the TravisMathew Terms of Service governing your use of our website, purchases, and TM Rewards program."
      />

      <section className="bg-[#1a2026] text-white py-8 md:py-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] text-center">
          <FileText className="w-8 h-8 mx-auto mb-3 text-white/60" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Terms of Service</h1>
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
