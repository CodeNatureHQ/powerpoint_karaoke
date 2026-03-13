import { motion } from "framer-motion";

function PresCard({ pres, index, onSelect }) {
  const coverImage = pres.coverImage;
  return (
    <motion.button
      onClick={() => onSelect(pres)}
      className="w-full text-left rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer group overflow-hidden flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.01 }}
    >
      {coverImage && (
        <div className="w-36 md:w-48 shrink-0">
          <img
            src={coverImage}
            alt={pres.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
          {pres.title}
        </h3>
        <p className="text-gray-400 mt-1">{pres.subtitle}</p>
        <p className="text-gray-500 text-sm mt-2">
          {pres.slides.length} Folien
        </p>
      </div>
    </motion.button>
  );
}

export default function PresentationPicker({
  presentations,
  onSelect,
  onBack,
}) {
  const curated = presentations.filter((p) => !p.is_user_generated);
  const generated = presentations.filter((p) => p.is_user_generated);

  return (
    <div className="min-h-screen px-4 py-12 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Präsentation wählen</h2>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors cursor-pointer"
        >
          ← Zurück
        </button>
      </div>

      <div className="grid gap-4">
        {curated.map((pres, i) => (
          <PresCard key={pres.id} pres={pres} index={i} onSelect={onSelect} />
        ))}
      </div>

      {generated.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-400 mb-4">
            ✨ Von den Nutzern generierte Präsentationen{" "}
          </h3>
          <div className="grid gap-4">
            {generated.map((pres, i) => (
              <PresCard
                key={pres.id}
                pres={pres}
                index={i}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
