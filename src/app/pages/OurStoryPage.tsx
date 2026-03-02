import { Award, Compass, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function OurStoryPage() {
  return (
    <>
      <SEOHead
        title="Our Story"
        description="Learn about TravisMathew — a lifestyle brand born in Southern California, designed for those who live life on the edge of comfort and style."
      />

      <section className="bg-[#1a2026] text-white py-8 md:py-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Our Story</h1>
          <p className="text-white/50 text-sm max-w-lg mx-auto">Born in Southern California. Built for everywhere.</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1000px] mx-auto">

          {/* Mission Statement */}
          <div className="border-l-4 border-black pl-6 mb-10">
            <p className="text-lg md:text-xl text-[#1a2026] font-bold leading-relaxed">
              "To create premium apparel that empowers people to look and feel their best, wherever life takes them."
            </p>
          </div>

          {/* Story Content */}
          <div className="space-y-6 text-sm text-[#333b42] leading-relaxed mb-10">
            <p>
              TravisMathew was founded in 2007 with a simple idea: create apparel that moves with you, looks great, and feels even better. Born out of the Southern California lifestyle, our brand blends performance fabrics with everyday versatility.
            </p>
            <p>
              From the golf course to the city streets, our designs are rooted in the belief that what you wear should never hold you back. Every piece is crafted with premium materials and a modern aesthetic that transitions seamlessly from work to weekend.
            </p>
            <p>
              Today, TravisMathew continues to push boundaries in men's and women's apparel. We're proud to be part of your daily uniform — whether you're hitting the links, exploring a new city, or just making the most of a beautiful day.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-[#f5f7f8] p-6 md:p-8 mb-10">
            <h2 className="text-lg font-bold text-[#1a2026] mb-6">The Journey</h2>
            <div className="space-y-6">
              {[
                { year: '2007', text: 'Founded in Carlsbad, California with a vision for versatile, premium apparel.' },
                { year: '2012', text: 'Expanded beyond golf into a full lifestyle brand — from course to coast.' },
                { year: '2017', text: 'Launched women\'s collection, bringing the same quality and comfort to a new audience.' },
                { year: '2020', text: 'Opened flagship retail stores across the United States.' },
                { year: 'Today', text: 'A global community of people who believe in looking good and living well.' },
              ].map((item) => (
                <div key={item.year} className="flex gap-4">
                  <span className="text-sm font-black text-[#1a2026] w-12 shrink-0">{item.year}</span>
                  <div className="flex-1 border-l-2 border-[#e5e5e5] pl-4">
                    <p className="text-sm text-[#333b42]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <h2 className="text-lg font-bold text-[#1a2026] mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-black inline-block" />
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Award, title: 'Quality', desc: 'Premium materials and meticulous construction in every piece we make.' },
              { icon: Compass, title: 'Versatility', desc: 'Apparel that moves with you, from the course to the coast and everywhere in between.' },
              { icon: Users, title: 'Community', desc: 'Building connections through shared experiences and a love for the good life.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-[#e5e5e5] p-6 hover:border-black transition-colors">
                <Icon className="w-6 h-6 text-[#1a2026] mb-3" />
                <h3 className="font-bold text-[#1a2026] text-sm mb-2">{title}</h3>
                <p className="text-xs text-[#333b42]">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
