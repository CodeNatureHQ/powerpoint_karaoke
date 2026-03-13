import { motion } from "framer-motion";

export default function StartScreen({ onStart, onRandom, onGenerate, loading }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            PowerPoint
          </span>
          <br />
          <span className="text-white">Karaoke</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed">
          Du bekommst eine zufällige Präsentation &ndash; und musst spontan
          vortragen. Kein Vorbereiten. Kein Entkommen. Nur Ruhm oder Blamage.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button
          onClick={onRandom}
          disabled={loading}
          className="px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/30 transition-all duration-200 hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? "Laden…" : "Zufällige Präsentation starten"}
        </button>

        <button
          onClick={onStart}
          disabled={loading}
          className="px-8 py-4 text-lg font-bold rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? "Laden…" : "Präsentation wählen"}
        </button>

        <button
          onClick={onGenerate}
          disabled={loading}
          className="px-8 py-4 text-lg font-bold rounded-2xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? "Laden…" : "✨ KI-Präsentation generieren"}
        </button>
      </motion.div>

      <motion.div
        className="mt-16 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Pfeiltasten ← → zum Navigieren &bull; ESC zum Beenden
      </motion.div>
    </div>
  );
}
