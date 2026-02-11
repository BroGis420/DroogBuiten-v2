"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { dutchCities, allDutchPlaces, fetchAllCitiesWeather, fetchCityWeather, getWeatherIcon } from "@/lib/weather";
import { useTheme } from "@/lib/theme";
import { Navbar } from "@/components/Navbar";
import { ThermometerIcon, DropletIcon, WindIcon, AlertIcon } from "@/components/Icons";

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
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([]);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [loadingGPS, setLoadingGPS] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
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
    ? Math.round(citiesWeather.reduce((a: number, b: CityWeather) => a + b.temperature, 0) / citiesWeather.length)
    : 0;
  const avgHumidity = citiesWeather.length > 0
    ? Math.round(citiesWeather.reduce((a: number, b: CityWeather) => a + b.humidity, 0) / citiesWeather.length)
    : 0;
  const avgDryingScore = citiesWeather.length > 0
    ? Math.round(citiesWeather.reduce((a: number, b: CityWeather) => a + b.dryingScore, 0) / citiesWeather.length)
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

      <Navbar />

      {/* Main Content - Reorganized for better UX */}
      <main className="relative z-10 pt-32 sm:pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">

          {/* Hero Section - Compact & Focused */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >


            {/* Main headline - Compact */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-6 whitespace-nowrap text-center w-full">
              <span className={isDark ? 'text-white' : 'text-sky-950'}>Kan mijn was vandaag </span>
              <span className="animate-text-shimmer">buiten drogen?</span>
            </h1>

            <p className={`font-medium text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
              Bekijk het direct voor elke plek in Nederland.
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
                  placeholder="Typ je plaats..."
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
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5-1.12 2.5-2.5 2.5z" />
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
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5-2.5-1.12 2.5-2.5 2.5z" />
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
              {(citiesWeather.length > 0 ? citiesWeather : dutchCities.map(c => ({ ...c, temperature: 0, humidity: 0, dryingScore: 0, weatherCode: 0, isDayTime: true }))).map((city, index) => {
                const jaVerdicts = ["Gewoon doen.", "Zeker wel.", "Hang het op.", "Perfect weer.", "Heerlijk fris.", "Ideaal vandaag."];
                const misschienVerdicts = ["Misschien.", "Gokje wagen?", "Laten we zien.", "Twijfelgeval.", "Even kijken.", "Op eigen risico."];
                const neeVerdicts = ["Vandaag niet.", "Nope.", "Nee hoor.", "Beter binnen.", "Laat maar.", "Geen succes."];
                const vIndex = index % 6;

                return (
                  <motion.div
                    key={city.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <Link
                      href={`/stad/${city.slug}`}
                      className="group p-8 glass-card rounded-3xl text-center overflow-hidden relative block hover:scale-[1.02] transition-all duration-300"
                    >
                      {/* Hover gradient */}
                      <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'bg-gradient-to-br from-cyan-500/0 to-emerald-500/0 group-hover:from-cyan-500/10 group-hover:to-emerald-500/10' : 'bg-gradient-to-br from-sky-400/0 to-sky-300/0 group-hover:from-sky-400/10 group-hover:to-sky-300/10'}`} />

                      <div className="relative z-10 space-y-2">
                        <h3 className={`text-xl font-black transition-colors duration-300 ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-sky-950 group-hover:text-sky-700'}`}>
                          {city.name}
                        </h3>

                        <div className={`text-sm font-bold uppercase tracking-wider ${loadingWeather ? 'opacity-30' :
                          city.dryingScore >= 70 ? (isDark ? 'text-emerald-400' : 'text-emerald-500') :
                            city.dryingScore >= 40 ? (isDark ? 'text-amber-400' : 'text-amber-500') :
                              (isDark ? 'text-red-400' : 'text-red-500')
                          }`}>
                          {loadingWeather ? "Laden..." :
                            city.dryingScore >= 70 ? jaVerdicts[vIndex] :
                              city.dryingScore >= 40 ? misschienVerdicts[vIndex] :
                                neeVerdicts[vIndex]}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </motion.section>

          {/* SEO Content Block */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-40 max-w-4xl mx-auto"
          >
            <div className={`glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden ${isDark ? 'border-white/5' : 'border-sky-200/50'}`}>
              {/* Background gradient */}
              <div className={`absolute inset-0 opacity-10 ${isDark ? 'bg-gradient-to-br from-cyan-500 via-transparent to-emerald-500' : 'bg-gradient-to-br from-sky-400 via-transparent to-amber-400'}`} />

              <div className="relative z-10">
                <h2 className={`text-2xl sm:text-3xl font-black mb-6 tracking-tight text-center ${isDark ? 'text-white' : 'text-sky-950'}`}>
                  Hoe werkt de wasdroogvoorspeller?
                </h2>

                <div className={`space-y-6 leading-relaxed ${isDark ? 'text-white/70' : 'text-sky-900/80'}`}>
                  <p>
                    Twijfel je of de was vandaag naar buiten kan? Onze slimme <strong>wasdroogvoorspeller</strong> berekent real-time of het weer geschikt is om je kleding in de frisse lucht te laten drogen. Wij analyseren niet alleen of het regent, maar kijken naar de complete droogomstandigheden.
                  </p>

                  <h3 className={`text-lg font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-sky-900'}`}>De formule</h3>
                  <p>
                    Onze unieke <strong>Droogscore (0-100%)</strong> combineert vier essentiële meteorologische factoren die bepalen hoe snel vocht uit textiel verdampt:
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                    <li className={`flex items-start gap-4 p-5 rounded-2xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/60'} transition-colors duration-300`}>
                      <div className={`p-3 rounded-xl ${isDark ? 'bg-white/10' : 'bg-sky-100'} shrink-0`}>
                        <ThermometerIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className={`block text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-sky-950'}`}>Temperatuur</strong>
                        <span className="text-xs sm:text-sm opacity-80 leading-relaxed">Warmte versnelt verdamping. Ideaal is 20°C+, maar ook met 15°C en zon kan het hard gaan.</span>
                      </div>
                    </li>
                    <li className={`flex items-start gap-4 p-5 rounded-2xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/60'} transition-colors duration-300`}>
                      <div className={`p-3 rounded-xl ${isDark ? 'bg-white/10' : 'bg-sky-100'} shrink-0`}>
                        <DropletIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className={`block text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-sky-950'}`}>Luchtvochtigheid</strong>
                        <span className="text-xs sm:text-sm opacity-80 leading-relaxed">De belangrijkste factor. Boven de 80% droogt was nauwelijks, zelfs als het warm is.</span>
                      </div>
                    </li>
                    <li className={`flex items-start gap-4 p-5 rounded-2xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/60'} transition-colors duration-300`}>
                      <div className={`p-3 rounded-xl ${isDark ? 'bg-white/10' : 'bg-sky-100'} shrink-0`}>
                        <WindIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className={`block text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-sky-950'}`}>Windkracht</strong>
                        <span className="text-xs sm:text-sm opacity-80 leading-relaxed">Wind blaast het vochtlaagje rond je was weg. Een briesje doet wonderen voor de droogtijd.</span>
                      </div>
                    </li>
                    <li className={`flex items-start gap-4 p-5 rounded-2xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/50 hover:bg-white/60'} transition-colors duration-300`}>
                      <div className={`p-3 rounded-xl ${isDark ? 'bg-white/10' : 'bg-sky-100'} shrink-0`}>
                        <AlertIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <strong className={`block text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-sky-950'}`}>Waarschijnlijkheid</strong>
                        <span className="text-xs sm:text-sm opacity-80 leading-relaxed">Regen is natuurlijk een no-go. Wij checken de actuele buienradar per uur.</span>
                      </div>
                    </li>
                  </ul>

                  <h3 className={`text-lg font-bold mt-8 mb-2 ${isDark ? 'text-white' : 'text-sky-900'}`}>Waarom sommige dagen misleidend zijn</h3>
                  <p>
                    Soms schijnt de zon, maar is de luchtvochtigheid zo hoog dat je was klam blijft. Andersom kan een bewolkte dag met veel wind perfect zijn om je beddengoed droog te wapperen. <strong>DroogWeerVandaag.nl</strong> kijkt verder dan alleen de zon en geeft je een eerlijk advies per stad in Nederland.
                  </p>

                  <p className="text-sm italic opacity-60 mt-6">
                    Check elke ochtend je lokale droogscore en bespaar energie door de droger uit te laten. Beter voor je kleding, beter voor het milieu, en beter voor je energierekening.
                  </p>
                </div>
              </div>
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
                  className={`text-[9px] font-bold uppercase tracking-widest opacity-30 hover:opacity-60 transition-opacity ${isDark ? 'text-white' : 'text-sky-800'}`}
                >
                  Niet oké
                </button>
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40' : 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40'}`}
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
