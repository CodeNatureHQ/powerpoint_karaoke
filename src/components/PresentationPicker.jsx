import { motion } from "framer-motion";
import presentations from "../data/presentations";

export default function PresentationPicker({ onSelect, onBack }) {
  return (
    <div className="min-h-screen px-4 py-12 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">
          Präsentation wählen
        </h2>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors cursor-pointer"
        >
          ← Zurück
        </button>
      </div>

      <div className="grid gap-4">
        {presentations.map((pres, i) => (
          <motion.button
            key={pres.id}
            onClick={() => onSelect(pres)}
            className="w-full text-left p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {pres.title}
            </h3>
            <p className="text-gray-400 mt-1">{pres.subtitle}</p>
            <p className="text-gray-500 text-sm mt-2">
              {pres.slides.length} Folien
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
