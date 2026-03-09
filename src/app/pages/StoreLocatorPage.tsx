import { MapPin, Phone, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const stores = [
  { name: 'Ivy Crew Carlsbad', address: '5620 Paseo Del Norte, Suite 100', city: 'Carlsbad, CA 92008', phone: '(760) 931-7800', hours: 'Mon–Sat 10am–7pm, Sun 11am–6pm' },
  { name: 'Ivy Crew Scottsdale', address: '15044 N Scottsdale Rd, Suite 120', city: 'Scottsdale, AZ 85254', phone: '(480) 421-5900', hours: 'Mon–Sat 10am–7pm, Sun 11am–6pm' },
  { name: 'Ivy Crew Manhattan Beach', address: '1100 Manhattan Ave', city: 'Manhattan Beach, CA 90266', phone: '(310) 545-3500', hours: 'Mon–Sat 10am–7pm, Sun 11am–6pm' },
  { name: 'Ivy Crew Fashion Island', address: '401 Newport Center Dr, Suite A112', city: 'Newport Beach, CA 92660', phone: '(949) 706-2100', hours: 'Mon–Sat 10am–8pm, Sun 11am–7pm' },
  { name: 'Ivy Crew Dallas', address: '3699 McKinney Ave, Suite 253', city: 'Dallas, TX 75204', phone: '(214) 520-4100', hours: 'Mon–Sat 10am–7pm, Sun 12pm–6pm' },
  { name: 'Ivy Crew Nashville', address: '2024 Broadway', city: 'Nashville, TN 37203', phone: '(615) 457-2200', hours: 'Mon–Sat 10am–8pm, Sun 11am–6pm' },
];

export default function StoreLocatorPage() {
  return (
    <>
      <SEOHead
        title="Store Locator"
        description="Find an Ivy Crew store near you. Visit us for the full collection, expert fitting, and an in-store shopping experience."
      />

      <section className="bg-[#1a2026] text-white py-8 md:py-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[60px] text-center">
          <MapPin className="w-8 h-8 mx-auto mb-3 text-white/60" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Store Locator</h1>
          <p className="text-white/50 text-sm max-w-lg mx-auto">Visit us in person. Our team is ready to help you find your perfect fit.</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-[60px]">
        <div className="max-w-[1000px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stores.map((store) => (
              <div key={store.name} className="border border-[#e5e5e5] p-6 hover:border-black transition-colors">
                <h2 className="font-bold text-[#1a2026] mb-3">{store.name}</h2>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#6c7782] shrink-0 mt-0.5" />
                    <div className="text-sm text-[#333b42]">
                      <p>{store.address}</p>
                      <p>{store.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#6c7782] shrink-0" />
                    <p className="text-sm text-[#333b42]">{store.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#6c7782] shrink-0" />
                    <p className="text-xs text-[#6c7782]">{store.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#f5f7f8] border border-[#e5e5e5] p-6 text-center">
            <h3 className="font-bold text-[#1a2026] mb-2">Can't find a store near you?</h3>
            <p className="text-sm text-[#333b42]">Shop the full collection online with free shipping on orders $150+.</p>
          </div>

        </div>
      </section>
    </>
  );
}
