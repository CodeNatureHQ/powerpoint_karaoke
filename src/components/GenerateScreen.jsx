import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";

const LOADING_MESSAGES = [
  "Analysiere Synergien…",
  "Erfinde Statistiken…",
  "Formuliere Buzzwords…",
  "Erstelle KPI-Dashboard…",
  "Berechne ROI…",
  "Optimiere Folienstruktur…",
  "Validiere Kernaussagen…",
  "Finalisiere Präsentation…",
];

export default function GenerateScreen({ onGenerated, onBack }) {
  const [titleInput, setTitleInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [loading]);

  async function generate(mode, title) {
    setLoading(true);
    setError(null);
    setMsgIndex(0);

    const { data, error: fnError } = await supabase.functions.invoke(
      "generate-presentation",
      { body: { mode, title } },
    );

    if (fnError || data?.error) {
      setError(fnError?.message ?? data?.error ?? "Generierung fehlgeschlagen");
      setLoading(false);
      return;
    }

    onGenerated({ ...data, coverImage: data.cover_image });
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin" />
          <div>
            <p className="text-xl font-bold text-white mb-3">
              KI generiert deine Präsentation
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={msgIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400"
              >
                {LOADING_MESSAGES[msgIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-10"
      >
        <h2 className="text-3xl font-bold text-white">
          KI-Präsentation generieren
        </h2>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors cursor-pointer"
        >
          ← Zurück
        </button>
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-4">
        {/* Thema eingeben */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-white/5 border border-white/10 p-6"
        >
          <h3 className="text-xl font-bold text-white mb-1">Thema vorgeben</h3>
          <p className="text-gray-400 text-sm mb-4">
            Gib ein Thema ein – die KI baut eine Präsentation darüber.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                titleInput.trim() &&
                generate("title", titleInput.trim())
              }
              placeholder="z.B. Synergiepotenziale der Hauskatze…"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors"
            />
            <button
              onClick={() =>
                titleInput.trim() && generate("title", titleInput.trim())
              }
              disabled={!titleInput.trim()}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold transition-all duration-200 hover:scale-105 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
            >
              Generieren
            </button>
          </div>
        </motion.div>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-500 text-sm">oder</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Überraschen lassen */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => generate("random", undefined)}
          whileHover={{ scale: 1.01 }}
          className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/40 hover:bg-white/8 transition-all duration-200 text-left group cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                Überraschen lassen ✨
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Kein Thema, keine Vorgaben. Die KI entscheidet alles.
              </p>
            </div>
            <span className="text-3xl">🎲</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
