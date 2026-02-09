"use client";

interface IconProps {
  className?: string;
}

// Fabric Icons
export function TShirtIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8v12a1 1 0 001 1h10a1 1 0 001-1V8" />
      <path d="M4 5v3a1 1 0 001 1h3v12" />
      <path d="M20 5v3a1 1 0 01-1 1h-3" />
      <path d="M9 5h6" />
      <path d="M9 5c0-1 1-2 3-2s3 1 3 2" />
    </svg>
  );
}

export function JacketIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M5 20V7l4-4h6l4 4v13" />
      <path d="M5 8h14" />
      <path d="M9 3v5" />
      <path d="M15 3v5" />
    </svg>
  );
}

export function WoolIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c3 3 3 8 0 11s-3 3-6 0" />
      <path d="M21 12c-3-3-8-3-11 0s-3 3 0 6" />
      <path d="M12 21c-3-3-3-8 0-11s3-3 6 0" />
      <path d="M3 12c3 3 8 3 11 0s3-3 0-6" />
    </svg>
  );
}

export function JeansIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 2h14v3H5z" />
      <path d="M5 5l1 17h5l1-10 1 10h5l1-17" />
      <path d="M10 5v5" />
      <path d="M14 5v5" />
      <path d="M5 8h14" />
    </svg>
  );
}

export function ShirtIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21V9" />
      <path d="M6 3.5L12 9l6-5.5" />
      <path d="M20 7v14H4V7l4-4h8l4 4z" />
    </svg>
  );
}

export function SilkIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3c0 10 14 10 14 18" />
      <path d="M19 3C19 13 5 13 5 21" />
      <path d="M12 3v18" />
    </svg>
  );
}

export function TowelIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M4 10h16" />
      <path d="M4 14h16" />
      <path d="M8 6v12" />
      <path d="M16 6v12" />
    </svg>
  );
}

export function BedIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20V8a2 2 0 012-2h16a2 2 0 012 2v12" />
      <path d="M2 13h20" />
      <circle cx="7" cy="10" r="1.5" />
      <circle cx="17" cy="10" r="1.5" />
    </svg>
  );
}

// Weather Icons
export function SunIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

export function CloudSunIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2" />
      <circle cx="12" cy="8" r="3" />
      <path d="M18 18H6a4 4 0 010-8h.5a5.5 5.5 0 0111 0H18a3 3 0 010 6z" />
    </svg>
  );
}

export function CloudIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 18H6a4 4 0 010-8h.5a5.5 5.5 0 0111 0H18a3 3 0 010 6z" />
    </svg>
  );
}

export function WindIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1111 8H2" />
      <path d="M12.6 19.4A2 2 0 1014 16H2" />
    </svg>
  );
}

export function DropletIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  );
}

// UI Icons
export function CalculatorIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8" />
      <path d="M8 10h8M8 14h8M8 18h8" />
      <path d="M12 10v8" />
    </svg>
  );
}

export function ThermometerIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4v10.54a4 4 0 11-4 0V4a2 2 0 014 0z" />
      <path d="M12 9v4" />
    </svg>
  );
}

export function LightbulbIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
    </svg>
  );
}

export function AlertIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <path d="M12 9v4" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
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
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3" />
      <path d="M12 9v1" />
      <path d="M18 18H6a4 4 0 010-8c.3 0 .5 0 .8.1a5.5 5.5 0 0110.4 0c.3-.1.5-.1.8-.1a4 4 0 010 8z" />
    </svg>
  );
}

export function SmartphoneIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function FlagIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6l-2 2" />
      <path d="M6 6h12" />
      <path d="M6 10h12" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}

export function FabricIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
      <path d="M6 3v18M12 3v18M18 3v18" />
    </svg>
  );
}

// Specialty Icons (Basic Style)
export function CottonIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Cotton Boll (The fluffy part) */}
      <path d="M12 14c2.5 0 4.5-2 4.5-4.5S14.5 5 12 5 7.5 7 7.5 9.5 9.5 14 12 14z" />
      <path d="M8 11.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
      <path d="M16 11.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
      {/* Stem/Leaves (The bottom part) */}
      <path d="M12 14v6" />
      <path d="M12 14c-1.5 1.5-3.5 2-5 2" />
      <path d="M12 14c1.5 1.5 3.5 2 5 2" />
      <path d="M12 14v3" />
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
