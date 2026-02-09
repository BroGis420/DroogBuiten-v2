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
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/70' : 'text-sky-700'}`}>Over Ons</span>
            </div>
            <h1 className={`text-4xl sm:text-6xl font-black tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-sky-950'}`}>
              De slimste manier om te <span className="animate-text-shimmer">drogen</span>
            </h1>
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>
              DroogWeerVandaag.nl helpt Nederlandse huishoudens de perfecte momenten te vinden om hun was buiten te drogen.
              Gebaseerd op echte weerdata en wetenschappelijke berekeningen.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-3xl p-8 mb-12"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r bg-clip-text text-transparent ${isDark ? 'from-cyan-400 to-emerald-400' : 'from-sky-500 to-amber-500'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-wider mt-2 ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <IconComponent className={`w-10 h-10 mb-4 ${isDark ? 'text-cyan-400' : 'text-sky-600'}`} />
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-sky-900'}`}>{feature.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-white/60' : 'text-sky-800/70'}`}>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* How it Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-3xl p-8 mb-12"
          >
            <h2 className={`text-2xl font-black mb-6 text-center ${isDark ? 'text-white' : 'text-sky-950'}`}>Hoe werkt het?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Kies je locatie", desc: "Selecteer je stad of gemeente uit meer dan 150 opties" },
                { step: "2", title: "Bekijk de voorspelling", desc: "Zie de actuele droogscore en uurlijkse voorspelling" },
                { step: "3", title: "Droog slim", desc: "Hang je was op het beste moment voor snelle droging" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black' : 'bg-gradient-to-r from-amber-400 to-amber-500 text-white'}`}>
                    {item.step}
                  </div>
                  <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-sky-900'}`}>{item.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-white/50' : 'text-sky-700/60'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card rounded-3xl p-8 mb-12"
          >
            <h2 className={`text-2xl font-black mb-6 text-center ${isDark ? 'text-white' : 'text-sky-950'}`}>Technologie</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Next.js 15", "React", "Tailwind CSS", "Framer Motion", "Open-Meteo API", "TypeScript", "Netlify"].map((tech) => (
                <span key={tech} className={`px-4 py-2 rounded-full text-sm font-bold ${isDark ? 'bg-white/5 border border-white/10 text-white/70' : 'bg-white/70 border border-sky-200 text-sky-800'}`}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <Link
              href="/"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform ${isDark ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black' : 'bg-gradient-to-r from-amber-400 to-amber-500 text-white'}`}
            >
              <span>Bekijk de droogvoorspelling</span>
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
