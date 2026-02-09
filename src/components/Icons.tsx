"use client";

interface IconProps {
  className?: string;
}

// Fabric Icons
export function TShirtIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* T-Shirt Body (Darker for visibility) */}
      <path d="M12 4c-2 0-3.5 1-3.5 2 0 .5.5 1 1.5 1v11c0 .5.5 1 1 1h2c.5 0 1-.5 1-1V7c1 0 1.5-.5 1.5-1 0-1-1.5-2-3.5-2z" fill="#CBD5E1" />
      {/* Sleeves (Slightly darker slate) */}
      <path d="M7 6L3 7v4c0 .5.5 1 1 1h2V8l.5-1.5L7 6z" fill="#94A3B8" />
      <path d="M17 6l4 1v4c0 .5-.5 1-1 1h-2V8l-.5-1.5L17 6z" fill="#94A3B8" />
      {/* Subtle Highlight */}
      <path d="M12 4c1 0 1.5.5 1.5 1s-.5 1-1.5 1-1.5-.5-1.5-1s.5-1 1.5-1z" fill="white" opacity="0.3" />
    </svg>
  );
}

export function JacketIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 3c-1.5 0-3 1-4 2.5L5 8v12c0 .5.5 1 1 1h12c.5 0 1-.5 1-1V8l-3-2.5C15 4 13.5 3 12 3z" fill="#F97316" />
      <path d="M13 17h-2v-2h2v2zm0-4h-2v-3h2v3z" fill="white" opacity="0.3" />
      <path d="M12 3l-3 3v4h2V5c.3-.3.7-.3 1 0v5h2V6l-3-3z" fill="#EA580C" />
    </svg>
  );
}

export function WoolIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" fill="#A855F7" />
      <path d="M12 3.5c3 0 5.5 2.5 5.5 5.5S15 14.5 12 14.5s-5.5-2.5-5.5-5.5S9 3.5 12 3.5z" opacity="0.2" fill="white" />
      <path d="M12 6c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3z" opacity="0.3" fill="white" />
      <path d="M19 19s-2 2-5 1-4-2-4-2" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function JeansIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* Main Jeans Body */}
      <path d="M5 8c0 0 0 13 1 13h4l1-10 1 10h4c1 0 1-13 1-13H5z" fill="#2563EB" />
      {/* Waistband Area */}
      <path d="M19 3H5a1 1 0 00-1 1v4h16V4a1 1 0 00-1-1z" fill="#60A5FA" />
      {/* Pocket Details (Negative/Opacity) */}
      <path d="M7 10h3v2H7v-2zM14 10h3v2h-3v-2z" fill="white" opacity="0.2" />
      {/* Waistband Detail */}
      <rect x="11" y="4" width="2" height="3" fill="white" opacity="0.3" rx="0.5" />
    </svg>
  );
}

export function ShirtIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L6 8v13h12V8l-6-5z" fill="#D6D3D1" />
      <path d="M13 17h-2v-2h2v2zm0-4h-2v-2h2v2z" fill="#44403C" opacity="0.2" />
      <path d="M12 3l-2 2h4l-2-2z" fill="#A8A29E" />
    </svg>
  );
}

export function SilkIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" fill="#DB2777" />
      <path d="M12 5c-2 2-2 5 0 8 2-3 2-6 0-8z" fill="white" opacity="0.4" />
    </svg>
  );
}

export function TowelIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="15" rx="1" fill="#2DD4BF" />
      <rect x="4" y="9" width="16" height="2" fill="white" opacity="0.2" />
      <rect x="4" y="13" width="16" height="2" fill="white" opacity="0.2" />
    </svg>
  );
}

export function BedIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M21 8h-2V7a1 1 0 00-1-1H6a1 1 0 00-1 1v1H3a1 1 0 00-1 1v11a1 1 0 001 1h2v-2h14v2h2a1 1 0 001-1V9a1 1 0 00-1-1z" fill="#1E3A8A" />
      <rect x="6" y="9" width="4" height="1.5" fill="white" opacity="0.3" />
      <rect x="14" y="9" width="4" height="1.5" fill="white" opacity="0.3" />
    </svg>
  );
}

// Weather Icons
export function SunIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" fill="#FACC15" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloudSunIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="15" cy="8" r="4" fill="#FACC15" />
      <path d="M18 18H6a4 4 0 010-8h.5a5.5 5.5 0 0111 0H18a3 3 0 010 6z" fill="#E2E8F0" />
    </svg>
  );
}

export function CloudIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M18 18H6a4 4 0 010-8h.5a5.5 5.5 0 0111 0H18a3 3 0 010 6z" fill="#94A3B8" />
    </svg>
  );
}

export function WindIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1111 8H2" />
      <path d="M12.6 19.4A2 2 0 1014 16H2" />
    </svg>
  );
}

export function DropletIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2.7l5.7 5.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0-3.1-8.2 0-11.3L12 2.7z" fill="#0EA5E9" />
    </svg>
  );
}

// UI Icons
export function CalculatorIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" fill="#3B82F6" />
      <rect x="6" y="5" width="12" height="4" fill="white" opacity="0.4" />
      <rect x="7" y="11" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="11" y="11" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="15" y="11" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="7" y="15" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="11" y="15" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
      <rect x="15" y="15" width="2" height="2" fill="white" opacity="0.3" rx="0.5" />
    </svg>
  );
}

export function ThermometerIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M14 4v10.5a4.5 4.5 0 11-4 0V4a2 2 0 114 0z" fill="#EF4444" />
      <circle cx="12" cy="17" r="2" fill="white" opacity="0.4" />
      <path d="M12 4v8" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function LightbulbIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2a7 7 0 00-7 7c0 2.4 1.2 4.5 3 5.7V18a1 1 0 001 1h6a1 1 0 001-1v-3.3c1.8-1.2 3-3.3 3-5.7a7 7 0 00-7-7z" fill="#FACC15" />
      <path d="M12 9s-2.5 0-2.5 2.5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M10 22h4v-1h-4v1z" fill="#4B5563" />
    </svg>
  );
}

export function AlertIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 .6L.4 21h23.2L12 .6z" fill="#F59E0B" />
      <rect x="11" y="8" width="2" height="6" fill="white" rx="1" />
      <rect x="11" y="16" width="2" height="2" fill="white" rx="1" />
    </svg>
  );
}

export function WaveIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 7c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 17c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}

export function HandWaveIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 00-4 0" />
      <path d="M14 10V4a2 2 0 00-4 0v7" />
      <path d="M10 10.5V6a2 2 0 00-4 0v8" />
      <path d="M18 8a2 2 0 014 0v6a8 8 0 01-8 8h-2c-2.8 0-4.5-.9-5.7-2.4" />
      <path d="M6 14c-1.6-2.7-2-5.4-1-7" />
    </svg>
  );
}

export function WeatherIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="6" r="3" fill="#FACC15" />
      <path d="M18 18H6a4 4 0 010-8c.3 0 .5 0 .8.1a5.5 5.5 0 0110.4 0c.3-.1.5-.1.8-.1a4 4 0 010 8z" fill="#94A3B8" />
    </svg>
  );
}

export function SmartphoneIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" fill="#4B5563" />
      <rect x="7" y="5" width="10" height="13" fill="white" opacity="0.1" />
      <path d="M12 18h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FlagIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 2v20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 4c0 0 4-2 8 0s8 0 8 0v8s-4-2-8 0-8 0-8 0V4z" fill="#EF4444" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}

export function FabricIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
      <path d="M6 3v18M12 3v18M18 3v18" />
    </svg>
  );
}

// Specialty Icons (Basic Style)
export function CottonIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* Cotton Boll Background (Solid Slate for visibility) */}
      <path d="M12 14c2.5 0 4.5-2 4.5-4.5S14.5 5 12 5 7.5 7 7.5 9.5 9.5 14 12 14z" fill="#E2E8F0" />
      <circle cx="8" cy="7.5" r="3.5" fill="#E2E8F0" />
      <circle cx="16" cy="7.5" r="3.5" fill="#E2E8F0" />
      {/* Cotton Boll Highlight (White Shine) */}
      <circle cx="12" cy="8" r="3" fill="white" opacity="0.6" />
      <circle cx="8" cy="7.5" r="2" fill="white" opacity="0.4" />
      <circle cx="16" cy="7.5" r="2" fill="white" opacity="0.4" />
      {/* Stem/Leaves (Vibrant Green) */}
      <path d="M12 14v6h-1v-6h1z" fill="#15803D" />
      <path d="M12 14c-1.5 1.5-3.5 2-5 2l.5-.8c1.5 0 3.5-.5 4-1.2z" fill="#166534" />
      <path d="M12 14c1.5 1.5 3.5 2 5 2l-.5-.8c-1.5 0-3.5-.5-4-1.2z" fill="#166534" />
    </svg>
  );
}


// Icon mapping for fabric types
export const fabricIcons: Record<string, React.FC<IconProps>> = {
  cotton: CottonIcon,
  synthetic: JacketIcon,
  wool: WoolIcon,
  denim: JeansIcon,
  linen: ShirtIcon,
  silk: SilkIcon,
  towels: TowelIcon,
  bedding: BedIcon,
};

// Icon mapping for weather conditions
export const weatherIcons: Record<string, React.FC<IconProps>> = {
  sunny: SunIcon,
  "partly-cloudy": CloudSunIcon,
  cloudy: CloudIcon,
  windy: WindIcon,
  humid: DropletIcon,
};
