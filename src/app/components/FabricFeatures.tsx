/* Icons mirror the IVY CREW fabric-feature line-art set: black ring with
   minimal stroke glyph inside.  Built as SVGs so they stay crisp at any
   size and keep parity with the source PDF. */

type IconProps = { className?: string };

const Ring = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="3" />
    {children}
  </svg>
);

const PerformanceFinishIcon = ({ className }: IconProps) => (
  <div className={className}>
    <Ring>
      <path d="M22 38 L34 22 L30 30 L40 28 L28 44 L32 36 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </Ring>
  </div>
);

const WrinkleResistantIcon = ({ className }: IconProps) => (
  <div className={className}>
    <Ring>
      <path d="M18 36 Q24 24 30 36 T42 36 T48 30" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </Ring>
  </div>
);

const CoolComfortIcon = ({ className }: IconProps) => (
  <div className={className}>
    <Ring>
      <path d="M22 42 Q26 30 38 24 Q44 22 46 20 Q44 30 36 38 Q28 44 22 42 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M28 38 L40 26" stroke="currentColor" strokeWidth="1.6" />
      <path d="M30 40 L36 34" stroke="currentColor" strokeWidth="1.4" />
    </Ring>
  </div>
);

const QuickDryIcon = ({ className }: IconProps) => (
  <div className={className}>
    <Ring>
      <path d="M22 24 L22 18 M22 18 L19 21 M22 18 L25 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 24 L32 16 M32 16 L29 19 M32 16 L35 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 24 L42 18 M42 18 L39 21 M42 18 L45 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 32 Q22 28 25 28 Q22 28 22 32 Z" fill="currentColor" />
      <path d="M32 32 Q32 28 35 28 Q32 28 32 32 Z" fill="currentColor" />
      <path d="M42 32 Q42 28 45 28 Q42 28 42 32 Z" fill="currentColor" />
      <path d="M20 40 Q22 36 24 40 T28 40" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M30 40 Q32 36 34 40 T38 40" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M40 40 Q42 36 44 40" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </Ring>
  </div>
);

const DynamicStretchIcon = ({ className }: IconProps) => (
  <div className={className}>
    <Ring>
      <path d="M32 18 V46 M18 32 H46" stroke="currentColor" strokeWidth="2" />
      <path d="M32 18 L29 22 M32 18 L35 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 46 L29 42 M32 46 L35 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 32 L22 29 M18 32 L22 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 32 L42 29 M46 32 L42 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 22 L42 42 M42 22 L22 42" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
    </Ring>
  </div>
);

const UVProtectionIcon = ({ className }: IconProps) => (
  <div className={className}>
    <Ring>
      <circle cx="32" cy="28" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M32 16 V20 M32 36 V40 M20 28 H24 M40 28 H44 M24 20 L26 22 M38 22 L40 20 M24 36 L26 34 M38 34 L40 36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <text x="32" y="50" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif">UV</text>
    </Ring>
  </div>
);

const EasyCareIcon = ({ className }: IconProps) => (
  <div className={className}>
    <Ring>
      <path d="M22 26 L28 20 L36 20 L42 26 L40 30 L36 26 V44 H28 V26 L24 30 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <text x="32" y="40" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" fontFamily="ui-sans-serif, system-ui, sans-serif">M</text>
    </Ring>
  </div>
);

const DurableIcon = ({ className }: IconProps) => (
  <div className={className}>
    <Ring>
      <path d="M32 16 L44 22 V32 Q44 42 32 48 Q20 42 20 32 V22 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M32 24 V40" stroke="currentColor" strokeWidth="2" />
    </Ring>
  </div>
);

export const fabricFeatures = [
  { Icon: PerformanceFinishIcon, label: 'Performance finish', desc: 'Premium detailing on every stitch' },
  { Icon: WrinkleResistantIcon, label: 'Wrinkle resistant', desc: 'Stays crisp from morning to night' },
  { Icon: CoolComfortIcon, label: 'Cool comfort', desc: 'Breathable fabric keeps you cool all day' },
  { Icon: QuickDryIcon, label: 'Quick dry technology', desc: 'Moisture-wicking, fast-drying fabric' },
  { Icon: DynamicStretchIcon, label: 'Dynamic stretch', desc: '4-way stretch moves with your body' },
  { Icon: UVProtectionIcon, label: 'UV protection-UPF 30+', desc: 'Rated sun shielding fabric' },
  { Icon: EasyCareIcon, label: 'Easy care', desc: 'Machine washable, minimal ironing' },
  { Icon: DurableIcon, label: 'Durable', desc: 'Built to last through every wear and wash' },
] as const;

interface FabricFeaturesProps {
  variant?: 'home' | 'product';
}

export default function FabricFeatures({ variant = 'home' }: FabricFeaturesProps) {
  if (variant === 'product') {
    return (
      <div className="border-t border-[#e5e5e5] pt-6 mt-6">
        <p className="text-sm font-bold text-[#1a2026] mb-1">Fabric Technology</p>
        <p className="text-xs text-[#6c7782] mb-5">Engineered for comfort and performance</p>
        <div className="grid grid-cols-2 gap-3">
          {fabricFeatures.map(({ Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-10 h-10 shrink-0 text-[#1a2026]">
                <Icon className="w-10 h-10" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#1a2026] leading-snug">{label}</p>
                <p className="text-[10px] text-[#6c7782] leading-snug mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
