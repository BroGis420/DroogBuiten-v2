"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { dutchCities, allDutchPlaces, fetchAllCitiesWeather, fetchCityWeather, getWeatherIcon } from "@/lib/weather";
import { useTheme } from "@/lib/theme";
import { ThemeToggle, ThemeToggleCompact } from "@/components/ThemeToggle";

// Weather icon component
function WeatherIcon({ type }: { type: string }) {
  if (type === "sunny" || type === "clear-night") {
    return (
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "cloudy" || type === "partly-cloudy") {
    return (
      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-3.037,2.463-5.5,5.5-5.5c3.037,0,5.5,2.463,5.5,5.5C23,16.537,20.537,19,17.5,19z M17.5,9.5c-2.206,0-4,1.794-4,4c0,2.206,1.794,4,4,4c2.206,0,4-1.794,4-4C21.5,11.294,19.706,9.5,17.5,9.5z" opacity=".2" />
        <path d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-3.037,2.463-5.5,5.5-5.5c3.037,0,5.5,2.463,5.5,5.5C23,16.537,20.537,19,17.5,19z" opacity=".2" />
        <path d="M17.5,6c-1.724,0-3.355,0.795-4.426,2.169C12.446,7.864,11.758,7.75,11,7.75c-3.176,0-5.75,2.574-5.75,5.75c0,2.716,1.906,4.986,4.464,5.615L17.5,19c3.037,0,5.5-2.463,5.5-5.5C23,10.463,20.537,8,17.5,8V6z" />
        <path d="M11,19.25c-0.12,0-0.24-0.009-0.358-0.026C10.849,19.239,11.02,19.25,11,19.25z" />
        <path d="M6.5,18.75c-3.176,0-5.75-2.574-5.75-5.75c0-3.176,2.574-5.75,5.75-5.75c0.758,0,1.446,0.114,2.074,0.419C9.674,5.925,11.305,5.13,13.029,5.13c3.584,0,6.5,2.916,6.5,6.5c0,0.175-0.011,0.347-0.026,0.518C19.74,12.051,19.967,12,20.199,12c2.099,0,3.8,1.701,3.8,3.8s-1.701,3.8-3.8,3.8H6.5z" />
      </svg>
    );
  }
  if (type === "rainy" || type === "drizzle") {
    return (
      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 10a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 9.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" />
        <line x1="8" y1="14" x2="8" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="15" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 14a4 4 0 014-4 4 4 0 013.5 2A3.5 3.5 0 0118 13.5a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-3z" />
    </svg>
  );
}

// Stars for night mode
function NightParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.5,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Clouds for day mode
function DayParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/40 rounded-full blur-xl animate-cloud"
          style={{
            left: `${10 + i * 20}%`,
            top: `${10 + Math.random() * 30}%`,
            width: `${100 + Math.random() * 100}px`,
            height: `${40 + Math.random() * 30}px`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Sun rays for day mode
function SunRays() {
  const rays = Array.from({ length: 12 }).map((_, i) => ({
    angle: (i * 30) - 60,
    delay: i * 0.3,
    length: 200 + Math.random() * 150,
  }));

  return (
    <div className="fixed top-0 right-0 pointer-events-none z-0">
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full animate-sun-glow"
        style={{
          background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, rgba(251,191,36,0.1) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full animate-sun-glow"
        style={{
          background: 'radial-gradient(circle, rgba(253,224,71,0.6) 0%, rgba(251,191,36,0.3) 50%, transparent 70%)',
        }}
      />
      {rays.map((ray, i) => (
        <div
          key={i}
          className="absolute origin-top animate-sun-ray"
          style={{
            top: '10px',
            right: '10px',
            width: '3px',
            height: `${ray.length}px`,
            background: 'linear-gradient(to bottom, rgba(253,224,71,0.5), rgba(251,191,36,0.2) 30%, transparent)',
            '--ray-angle': `${ray.angle}deg`,
            transform: `rotate(${ray.angle}deg)`,
            animationDelay: `${ray.delay}s`,
            borderRadius: '2px',
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

interface CityWeather {
  slug: string;
  name: string;
  temperature: number;
  humidity: number;
  dryingScore: number;
  weatherCode: number;
  isDayTime: boolean;
}

export default function Home() {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [searchValue, setSearchValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  // saveLocation state removed as it was unused logic (we always save)
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([]);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [loadingGPS, setLoadingGPS] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Function to calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // GPS handler function
  const handleUseGPS = () => {
    if (!navigator.geolocation) {
      alert('GPS wordt niet ondersteund door je browser');
      return;
    }

    setLoadingGPS(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;

        // Find nearest city
        let nearestCity = allDutchPlaces[0];
        let shortestDistance = Infinity;

        allDutchPlaces.forEach((place) => {
          const distance = calculateDistance(userLat, userLon, place.lat, place.lon);
          if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestCity = place;
          }
        });

        localStorage.setItem('lastVisitedCity', nearestCity.slug);
        setLoadingGPS(false);
        router.push(`/stad/${nearestCity.slug}`);
      },
      (error) => {
        setLoadingGPS(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert('Locatietoegang geweigerd. Geef toestemming in je browserinstellingen.');
            break;
          case error.POSITION_UNAVAILABLE:
            alert('Locatie niet beschikbaar.');
            break;
          case error.TIMEOUT:
            alert('Locatieverzoek verlopen. Probeer opnieuw.');
            break;
          default:
            alert('Er is een fout opgetreden bij het ophalen van je locatie.');
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  useEffect(() => {
    const loadCities = async () => {
      // 1. Fetch standard cities
      const standardCities = await fetchAllCitiesWeather();

      // 2. Check for last visited city
      const lastVisitedSlug = localStorage.getItem('lastVisitedCity');

      if (lastVisitedSlug) {
        // Fetch specific weather for this city
        const lastVisitedWeather = await fetchCityWeather(lastVisitedSlug);

        if (lastVisitedWeather) {
          // Filter duplicates: remove the last visited city from standard list if present
          const uniqueStandardCities = standardCities.filter(c => c.slug !== lastVisitedSlug);

          // Prepend last visited city and limit to 6 items
          setCitiesWeather([lastVisitedWeather, ...uniqueStandardCities].slice(0, 6));
          setLoadingWeather(false);
          return;
        }
      }

      // Fallback: just show standard cities
      setCitiesWeather(standardCities);
      setLoadingWeather(false);
    };

    setMounted(true);
    loadCities();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPlaces = searchValue.length > 0
    ? allDutchPlaces.filter((place) =>
      place.name.toLowerCase().includes(searchValue.toLowerCase())
    ).slice(0, 10)
    : [];

  const handleSelectPlace = (slug: string) => {
    localStorage.setItem('lastVisitedCity', slug);
    setShowDropdown(false);
    setSearchValue("");
    router.push(`/stad/${slug}`);
  };

  const handleSearch = () => {
    if (filteredPlaces.length > 0) {
      handleSelectPlace(filteredPlaces[0].slug);
    }
  };

  const avgTemp = citiesWeather.length > 0
    ? Math.round(citiesWeather.reduce((a, b) => a + b.temperature, 0) / citiesWeather.length)
    : 0;
  const avgHumidity = citiesWeather.length > 0
    ? Math.round(citiesWeather.reduce((a, b) => a + b.humidity, 0) / citiesWeather.length)
    : 0;
  const avgDryingScore = citiesWeather.length > 0
    ? Math.round(citiesWeather.reduce((a, b) => a + b.dryingScore, 0) / citiesWeather.length)
    : 0;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Theme-specific particles */}
      {mounted && (
        isDark ? <NightParticles /> : (
          <>
            <DayParticles />
            <SunRays />
          </>
        )
      )}

      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-cyan-500/20' : 'bg-white/30'}`} />
        <div className={`absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full blur-3xl animate-orb-2 ${isDark ? 'bg-emerald-500/15' : 'bg-sky-200/40'}`} />
        <div className={`absolute -bottom-32 left-1/3 w-80 h-80 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-purple-500/10' : 'bg-white/25'}`} style={{ animationDelay: '5s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl border-b transition-colors duration-300 ${isDark ? 'bg-black/30 border-white/5' : 'bg-white/50 border-sky-200/50'}`}>
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-3 rounded-2xl transition-all duration-300 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-white/50'}`}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-sky-800'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-sky-800'} ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-white' : 'bg-sky-800'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>

            <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter group relative">
              <span className={`absolute -inset-4 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20' : 'bg-gradient-to-r from-sky-400/20 to-amber-400/20'}`} />
              <span className={`relative transition-all duration-300 ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-sky-900 group-hover:text-sky-600'}`}>DroogWeerVandaag</span>
              <span className="relative animate-text-shimmer">.nl</span>
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/over-ons" className={`px-6 py-2.5 rounded-full glass-card text-xs font-bold uppercase tracking-widest transition-all duration-300 group relative overflow-hidden ${isDark ? 'text-white' : 'text-sky-800'}`}>
                <span className="relative z-10">Over Ons</span>
                <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${isDark ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20' : 'bg-gradient-to-r from-sky-400/20 to-amber-400/20'}`} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      <aside className={`fixed top-0 left-0 h-full w-80 sm:w-96 z-[100] transition-all duration-500 ease-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`h-full backdrop-blur-3xl border-r p-8 flex flex-col ${isDark ? 'bg-black/80 border-white/10' : 'bg-white/90 border-sky-200'}`}>
          <div className="flex justify-between items-center mb-12">
            <span className={`text-xs font-black uppercase tracking-[0.3em] ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90 ${isDark ? 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10' : 'bg-sky-100 text-sky-400 hover:text-sky-600 hover:bg-sky-200'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-3 flex-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group border ${isDark ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-cyan-500/30' : 'bg-gradient-to-r from-sky-400/20 to-amber-400/20 border-amber-400/30'}`}
            >
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
              </svg>
              <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-sky-900'}`}>Droogvoorspelling</span>
              <div className={`ml-auto w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-cyan-400' : 'bg-amber-500'}`} />
            </Link>
            <Link
              href="/calculator"
              onClick={() => setMenuOpen(false)}
              className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-sky-100'}`}
            >
              <svg className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />
              </svg>
              <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-sky-900'}`}>Droogtijd Calculator</span>
            </Link>
            <Link
              href="/stoffen"
              onClick={() => setMenuOpen(false)}
              className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-sky-100'}`}
            >
              <svg className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-sky-500'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 2L1 7l4 2v13h14V9l4-2-5-5h-4.5a2.5 2.5 0 01-5 0H6z" />
              </svg>
              <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-sky-900'}`}>Stoffen Gids</span>
            </Link>
            <Link
              href="/over-ons"
              onClick={() => setMenuOpen(false)}
              className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 group ${isDark ? 'hover:bg-white/5' : 'hover:bg-sky-100'}`}
            >
              <svg className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-sky-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-sky-900'}`}>Over Ons</span>
            </Link>
          </nav>

          <div className={`mt-auto space-y-3 pt-8 border-t ${isDark ? 'border-white/10' : 'border-sky-200'}`}>
            <ThemeToggleCompact />
          </div>
        </div>
      </aside>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[99] backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Content - Reorganized for better UX */}
      <main className="relative z-10 pt-28 sm:pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">

          {/* Hero Section - Compact & Focused */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            {/* Live status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-emerald-400' : 'bg-amber-500'}`} />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-sky-700'}`}>
                {loadingWeather ? "Weer laden..." : `Landelijk gemiddelde: ${avgDryingScore}% droogscore`}
              </span>
            </motion.div>

            {/* Main headline - Compact */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
              <span className={isDark ? 'text-white' : 'text-sky-950'}>Kan ik mijn was </span>
              <span className="animate-text-shimmer">buiten drogen?</span>
            </h1>

            <p className={`font-medium text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
              Slimme wasdroogvoorspeller voor {allDutchPlaces.length}+ Nederlandse locaties
            </p>
          </motion.section>

          {/* Search Section - Primary Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto mb-16"
            ref={searchRef}
          >
            <div className="relative group">
              <div className={`absolute -inset-2 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-gradient ${isDark ? 'bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500' : 'bg-gradient-to-r from-sky-400 via-amber-400 to-sky-400'}`} />
              <div className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    setShowDropdown(e.target.value.length > 0);
                  }}
                  onFocus={() => searchValue.length > 0 && setShowDropdown(true)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Zoek je stad of gemeente..."
                  className="w-full px-8 py-6 rounded-2xl modern-input text-lg font-semibold outline-none"
                />
                <button
                  onClick={handleSearch}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-xl hover:scale-110 active:scale-95 transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:shadow-xl hover:shadow-cyan-500/40' : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:shadow-xl hover:shadow-amber-500/40'}`}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {showDropdown && filteredPlaces.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden z-50 max-h-80 overflow-y-auto shadow-2xl border ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-sky-200'}`}
                  >
                    {filteredPlaces.map((place, index) => (
                      <motion.button
                        key={place.slug}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: Math.min(index * 0.03, 0.3) }}
                        onClick={() => handleSelectPlace(place.slug)}
                        className={`w-full px-6 py-3 flex items-center justify-between transition-colors group ${isDark ? 'hover:bg-cyan-500/20 border-b border-slate-700/50' : 'hover:bg-sky-50 border-b border-sky-100'}`}
                      >
                        <div className="flex items-center gap-3">
                          <svg className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          <div className="text-left">
                            <span className={`font-semibold block ${isDark ? 'text-white' : 'text-slate-900'}`}>{place.name}</span>
                            <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{place.province}</span>
                          </div>
                        </div>
                        <svg className={`w-4 h-4 group-hover:translate-x-1 transition-all ${isDark ? 'text-slate-500 group-hover:text-cyan-400' : 'text-slate-300 group-hover:text-sky-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick actions below search */}
            <div className="flex items-center justify-center gap-6 mt-4">


              <button
                onClick={handleUseGPS}
                disabled={loadingGPS}
                className={`font-medium text-xs flex items-center gap-1.5 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-sky-600 hover:text-sky-500'}`}
              >
                {loadingGPS ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                )}
                {loadingGPS ? 'Locatie ophalen...' : 'Gebruik GPS'}
              </button>
            </div>
          </motion.section>



          {/* City Cards Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-6">
              <h2 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-sky-700/60'}`}>
                Populaire steden
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {(citiesWeather.length > 0 ? citiesWeather : dutchCities.map(c => ({ ...c, temperature: 0, humidity: 0, dryingScore: 0, weatherCode: 0, isDayTime: true }))).map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <Link
                    href={`/stad/${city.slug}`}
                    className="group p-5 sm:p-6 glass-card rounded-2xl text-left overflow-hidden relative block hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Hover gradient */}
                    <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-cyan-500/0 to-emerald-500/0 group-hover:from-cyan-500/10 group-hover:to-emerald-500/10' : 'bg-gradient-to-br from-sky-400/0 to-sky-300/0 group-hover:from-sky-400/10 group-hover:to-sky-300/10'}`} />

                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <h3 className={`text-lg sm:text-xl font-black transition-colors duration-300 ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-sky-950 group-hover:text-sky-700'}`}>
                          {city.name}
                        </h3>
                        {!loadingWeather && (
                          <div className={`flex flex-col gap-1 mt-2`}>
                            <div className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-white/60' : 'text-sky-700/80'}`}>
                              {/* Thermometer icon */}
                              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z" />
                              </svg>
                              <span className="font-semibold">{city.temperature}°C</span>
                            </div>
                            <div className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-white/60' : 'text-sky-700/80'}`}>
                              {/* Water drop icon */}
                              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />
                              </svg>
                              <span className="font-semibold">{city.humidity}%</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Drying score badge */}
                      <div className={`flex flex-col items-center ${loadingWeather ? 'opacity-50' : ''}`}>
                        <div className={`text-xl sm:text-2xl font-black ${city.dryingScore >= 70 ? (isDark ? 'text-emerald-400' : 'text-emerald-500') :
                          city.dryingScore >= 40 ? (isDark ? 'text-yellow-400' : 'text-amber-500') :
                            (isDark ? 'text-red-400' : 'text-red-500')
                          }`}>
                          {loadingWeather ? "--" : city.dryingScore}
                        </div>
                        <div className={`text-[9px] font-bold uppercase tracking-wider ${isDark ? 'text-white/30' : 'text-sky-600/50'}`}>
                          score
                        </div>
                      </div>
                    </div>

                    {/* Weather icon */}
                    <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                      {!loadingWeather && <WeatherIcon type={getWeatherIcon(city.weatherCode, city.isDayTime)} />}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 border-t mt-16 ${isDark ? 'border-white/5' : 'border-sky-200/50'}`}>
        <div className="container mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-4 space-y-4">
              <h3 className="text-xl font-black tracking-tighter">
                <span className={isDark ? 'text-white' : 'text-sky-950'}>DroogWeerVandaag</span>
                <span className="animate-text-shimmer">.nl</span>
              </h3>
              <p className={`text-xs font-medium uppercase tracking-widest leading-relaxed ${isDark ? 'text-white/40' : 'text-sky-800/60'}`}>
                Slimme wasdroogvoorspeller voor het moderne huishouden.
              </p>
              <div className="flex gap-3">
                <div className={`w-2 h-2 rounded-full animate-pulse-glow ${isDark ? 'bg-cyan-500' : 'bg-sky-500'}`} />
                <div className={`w-2 h-2 rounded-full animate-pulse-glow delay-200 ${isDark ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                <div className={`w-2 h-2 rounded-full animate-pulse-glow delay-400 ${isDark ? 'bg-purple-500' : 'bg-sky-300'}`} />
              </div>
            </div>

            {/* App Tools */}
            <div className="md:col-span-3 space-y-4">
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Tools</span>
              <nav className="space-y-3">
                <Link href="/" className={`block text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:translate-x-2 ${isDark ? 'text-white/50 hover:text-cyan-400' : 'text-sky-700/70 hover:text-sky-600'}`}>
                  Droogvoorspelling
                </Link>
                <Link href="/calculator" className={`block text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:translate-x-2 ${isDark ? 'text-white/50 hover:text-cyan-400' : 'text-sky-700/70 hover:text-sky-600'}`}>
                  Droogtijd Calculator
                </Link>
                <Link href="/stoffen" className={`block text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:translate-x-2 ${isDark ? 'text-white/50 hover:text-cyan-400' : 'text-sky-700/70 hover:text-sky-600'}`}>
                  Stoffen Gids
                </Link>
              </nav>
            </div>

            {/* Support */}
            <div className="md:col-span-3 space-y-4">
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Info</span>
              <nav className="space-y-3">
                <Link href="/over-ons" className={`block text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:translate-x-2 ${isDark ? 'text-white/50 hover:text-cyan-400' : 'text-sky-700/70 hover:text-sky-600'}`}>
                  Over Ons
                </Link>
              </nav>
            </div>

            {/* Visual Element */}
            <div className="md:col-span-2 flex justify-end">
              <div className="relative w-20 h-20">
                <div className={`absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse-glow ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-gradient-to-r from-sky-400 to-sky-300'}`} />
                <div className={`absolute inset-4 rounded-full opacity-20 animate-float ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-gradient-to-r from-sky-400 to-sky-300'}`} />
                <div className={`absolute inset-6 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-white/50'}`}>
                  <svg className={`w-4 h-4 ${isDark ? 'text-white/50' : 'text-sky-600'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t ${isDark ? 'border-white/5' : 'border-sky-200/50'}`}>
            <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-white/30' : 'text-sky-700/50'}`}>
              © 2026 DroogWeerVandaag.nl
            </p>
            <div className="flex gap-6">
              <a href="#" className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isDark ? 'text-white/30 hover:text-cyan-400' : 'text-sky-700/50 hover:text-sky-600'}`}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 right-6 w-auto z-[200]"
          >
            <div className={`glass-card rounded-3xl p-4 shadow-xl border backdrop-blur-md transition-all duration-500 hover:scale-[1.02] flex items-center gap-6 ${isDark ? 'border-white/10 bg-black/40' : 'border-sky-100 bg-white/60'}`}>
              <p className={`text-[11px] font-bold whitespace-nowrap ${isDark ? 'text-white/80' : 'text-sky-950'}`}>
                Een website zonder cookies is als was drogen zonder zon.
              </p>

              <div className="flex items-center gap-4 shrink-0">
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className={`text-[9px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity ${isDark ? 'text-white' : 'text-sky-800'}`}
                >
                  Niet oké
                </button>
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-sky-100 hover:bg-sky-200 text-sky-800'}`}
                >
                  Oké
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
