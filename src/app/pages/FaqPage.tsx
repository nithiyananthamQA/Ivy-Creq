import { Link } from 'react-router';
import { HelpCircle, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const faqs = [
  {
    category: 'Orders & Shipping',
    items: [
      {
        question: 'How do I track my order?',
        answer: 'Once your order ships, you will receive a confirmation email with a tracking number. You can use this number to track your package on the carrier\'s website. You can also check your order status by logging into your account.',
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes! We offer free standard shipping on all orders ₹2,000 and above. Ivy Crew Rewards members enjoy free shipping on every order, regardless of order total.',
      },
      {
        question: 'Can I cancel or modify my order?',
        answer: 'We process orders quickly and may not be able to make changes once an order is placed. Please contact our customer service team as soon as possible and we\'ll do our best to help.',
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    items: [
      {
        question: 'What is your return policy?',
        answer: 'We accept returns within 30 days of purchase for a full refund. Items must be unworn, unwashed, and in original condition with tags attached. Visit our Shipping & Returns page for complete details.',
      },
    ],
  },
  {
    category: 'Product & Sizing',
    items: [
      {
        question: 'How do I find my size?',
        answer: 'Check our Size Guide page for detailed measurements and fit recommendations for all of our men\'s and women\'s products. If you\'re between sizes, we generally recommend sizing up for a more relaxed fit.',
      },
      {
        question: 'How do I care for my Ivy Crew apparel?',
        answer: 'We recommend machine washing in cold water with like colors and tumble drying on low heat. Avoid bleach and ironing directly on prints or logos. Check the care label on each garment for specific instructions.',
      },
    ],
  },
  {
    category: 'Account & Rewards',
    items: [
      {
        question: 'How do I join Ivy Crew Rewards?',
        answer: 'Joining Ivy Crew Rewards is free and easy. Simply create an account on our website and you\'ll automatically be enrolled. Start earning points on every purchase, get exclusive offers, and enjoy free shipping.',
      },
      {
        question: 'Do you have physical store locations?',
        answer: 'Yes, we have retail stores across the United States. Visit our Store Locator page to find the nearest Ivy Crew store to you.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <SEOHead
        title="FAQ"
        description="Find answers to frequently asked questions about Ivy Crew orders, shipping, returns, sizing, rewards, and more."
      />

      <section className="bg-[#1a2026] text-white py-8 md:py-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] text-center">
          <HelpCircle className="w-8 h-8 mx-auto mb-3 text-white/60" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-white/50 text-sm max-w-lg mx-auto">Quick answers to common questions about orders, returns, sizing, and more.</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1000px] mx-auto">

          <div className="space-y-8">
            {faqs.map((group) => (
              <div key={group.category}>
                <h2 className="text-lg font-bold text-[#1a2026] mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-black inline-block" />
                  {group.category}
                </h2>
                <Accordion type="single" collapsible className="w-full border border-[#e5e5e5]">
                  {group.items.map((faq, index) => (
                    <AccordionItem key={index} value={`${group.category}-${index}`} className="border-b border-[#e5e5e5] last:border-b-0">
                      <AccordionTrigger className="text-left font-bold text-[#1a2026] px-5 py-4 hover:bg-[#f5f7f8] transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#333b42] text-sm px-5 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still need help */}
          <div className="mt-10 bg-[#f5f7f8] border border-[#e5e5e5] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5">
            <MessageCircle className="w-10 h-10 text-[#1a2026] shrink-0" />
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-bold text-[#1a2026] mb-1">Still have questions?</h3>
              <p className="text-sm text-[#333b42]">Our customer service team is here to help. We typically respond within 24 hours.</p>
            </div>
            <Link to="/contact" className="bg-black text-white py-2.5 px-8 font-bold text-sm hover:bg-gray-900 transition-colors shrink-0">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
