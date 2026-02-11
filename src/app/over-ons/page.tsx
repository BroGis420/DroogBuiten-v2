"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/theme";
import { Navbar } from "@/components/Navbar";
import {
  WeatherIcon,
  CalculatorIcon,
  SmartphoneIcon,
  FlagIcon,
  HandWaveIcon,
} from "@/components/Icons";

interface Feature {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: WeatherIcon,
    title: "Real-time Weerdata",
    description: "We gebruiken de Open-Meteo API voor nauwkeurige, actuele weersvoorspellingen voor heel Nederland.",
  },
  {
    icon: CalculatorIcon,
    title: "Wetenschappelijke Berekening",
    description: "Onze droogscore is gebaseerd op verdampingsfysica, rekening houdend met temperatuur, vochtigheid, wind en UV-index.",
  },
  {
    icon: SmartphoneIcon,
    title: "Modern Design",
    description: "Een hypermoderne interface met vloeiende animaties, glasmorfisme en dag/nacht thema voor comfortabel gebruik.",
  },
  {
    icon: FlagIcon,
    title: "100% Nederlands",
    description: "Speciaal gemaakt voor Nederlandse huishoudens met lokale steden en weersomstandigheden.",
  },
];

const stats = [
  { value: "150+", label: "Nederlandse Plaatsen" },
  { value: "24/7", label: "Live Updates" },
  { value: "12u", label: "Voorspelling" },
  { value: "100%", label: "Gratis" },
];

export default function OverOnsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-cyan-500/20' : 'bg-white/30'}`} />
        <div className={`absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full blur-3xl animate-orb-2 ${isDark ? 'bg-emerald-500/15' : 'bg-sky-200/40'}`} />
        <div className={`absolute -bottom-32 left-1/3 w-80 h-80 rounded-full blur-3xl animate-orb-1 ${isDark ? 'bg-purple-500/10' : 'bg-white/25'}`} />
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <HandWaveIcon className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-sky-700'}`}>Hoi!</span>
            </div>
            <h1 className={`text-4xl sm:text-6xl font-black tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-sky-950'}`}>
              Omdat niemand van <span className="animate-text-shimmer">klamme handdoeken</span> houdt
            </h1>
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
              DroogWeerVandaag.nl is ontstaan uit een diepgewortelde obsessie met de Nederlandse wind en een gezonde hekel aan was die maar niet droog wordt.
            </p>
          </motion.div>

          {/* New Simplified Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-sky-100 text-sky-600'}`}>
                <CalculatorIcon className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-sky-900'}`}>Wiskunde met een doel</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
                Onze droogscore kijkt naar temperatuur, luchtvochtigheid, windkracht en UV-index. We berekenen hoe snel water verdampt op basis van echte natuurkunde, zodat jij niet naar buiten hoeft te staren om te gokken of je jeans morgen ook echt droog is.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                <WeatherIcon className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-sky-900'}`}>Gratis frisse lucht</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
                Buiten drogen is beter voor het milieu, beter voor je energierekening, en je kleding ruikt naar &apos;lekker buiten&apos; in plaats van &apos;vergeten in de machine&apos;. Win-win-win.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-sky-100 text-sky-400'}`}>
                <FlagIcon className="w-6 h-6" />
              </div>
              <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-sky-900'}`}>100% Hollands</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
                Gemaakt door voor mensen die weten dat 5 minuten zon in Nederland geen garantie is voor een droge middag. We dekken alle Nederlandse gemeenten en steden, van de grootste metropool tot het kleinste dorp.
              </p>
            </motion.div>
          </div>

          {/* Transparency Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`max-w-2xl mx-auto mb-16 p-8 rounded-3xl border text-center ${isDark ? 'bg-white/5 border-white/10' : 'bg-sky-50/50 border-sky-100'}`}
          >
            <h4 className={`text-sm font-black uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`}>Geen geheimen tussen ons</h4>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-white/50' : 'text-sky-800/60'}`}>
              Laten we eerlijk zijn: wij zijn geen weergoden (helaas). De voorspellingen die je hier ziet komen van de slimme koppen bij <a href="https://open-meteo.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-400 transition-colors">Open-Meteo</a>. Wij combineren hun rauwe data met onze eigen droog-algoritmes, zodat we ons kunnen focussen op wat écht belangrijk is: jouw was.
            </p>
          </motion.div>

          {/* Simple CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Link
              href="/"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-lg shadow-cyan-500/20' : 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-500/20'}`}
            >
              <span>Terug naar de was</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
