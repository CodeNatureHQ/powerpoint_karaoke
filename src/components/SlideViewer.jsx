import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "./Timer";
import SlideChart from "./SlideChart";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

const typeColors = {
  agenda: "from-indigo-600/30 to-purple-600/30",
  content: "from-purple-600/20 to-pink-600/20",
  conclusion: "from-pink-600/30 to-yellow-600/30",
};

export default function SlideViewer({
  presentation,
  slideIndex,
  direction,
  onPrev,
  onNext,
  onExit,
  onRandom,
  isFullscreen,
  onToggleFullscreen,
}) {
  const isTitleSlide = slideIndex === 0;
  const contentIndex = slideIndex - 1;
  const slide = isTitleSlide ? null : presentation.slides[contentIndex];
  const total = presentation.slides.length + 1; // +1 for title slide
  const hasVisual = slide && (slide.image || slide.chart);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight" || e.key === " ") onNext();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "Escape") onExit();
      else if (e.key === "f" || e.key === "F") onToggleFullscreen();
    },
    [onNext, onPrev, onExit, onToggleFullscreen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className={`min-h-screen flex flex-col ${isFullscreen ? "fixed inset-0 z-50 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" : ""}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4 shrink-0">
        <button
          onClick={onExit}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors cursor-pointer"
        >
          ← Beenden
        </button>

        <div className="text-gray-400 text-sm font-medium">
          Folie {slideIndex + 1} von {total}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleFullscreen}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors cursor-pointer"
            title={isFullscreen ? "Vollbild beenden (F)" : "Vollbild (F)"}
          >
            {isFullscreen ? "⊗" : "⊕"} Vollbild
          </button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-4 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slideIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`w-full max-w-6xl min-h-[70vh] bg-gradient-to-br ${isTitleSlide ? "from-indigo-600/30 to-purple-600/30" : typeColors[slide.type] || typeColors.content} backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col justify-center`}
          >
            {/* Title Slide */}
            {isTitleSlide && (
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
                >
                  {presentation.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-300 italic"
                >
                  {presentation.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-500 mt-8 text-sm"
                >
                  Weiter →  um zu starten
                </motion.p>
              </div>
            )}

            {/* Content Slide */}
            {!isTitleSlide && slide && (
              <>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                  {slide.title}
                </h3>

                <div
                  className={`${hasVisual ? "flex flex-col md:flex-row gap-6 md:gap-10" : ""}`}
                >
                  {/* Bullets */}
                  <div className={hasVisual ? "md:flex-1" : ""}>
                    <ul className="space-y-3 md:space-y-4">
                      {slide.bullets.map((bullet, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.1 }}
                          className="flex items-start gap-3 text-base md:text-xl text-gray-100"
                        >
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual: Image or Chart */}
                  {hasVisual && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="md:flex-1 flex flex-col"
                    >
                      {slide.image && (
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                          <img
                            src={slide.image.url}
                            alt={slide.image.caption}
                            className="w-full h-56 md:h-72 object-cover"
                            loading="lazy"
                          />
                          <p className="text-xs text-gray-400 italic text-center py-2 px-3 bg-black/30">
                            {slide.image.caption}
                          </p>
                        </div>
                      )}

                      {slide.chart && <SlideChart chart={slide.chart} />}
                    </motion.div>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls */}
      <div className="px-4 md:px-8 py-4 shrink-0">
        {/* Progress Bar */}
        <div className="w-full max-w-6xl mx-auto mb-4 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            animate={{ width: `${((slideIndex + 1) / total) * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
        </div>

        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <button
            onClick={onPrev}
            disabled={slideIndex === 0}
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white font-medium transition-all cursor-pointer"
          >
            ← Zurück
          </button>

          <div className="flex items-center gap-3">
            <Timer />

            <button
              onClick={onRandom}
              className="px-5 py-3 rounded-xl bg-purple-600/50 hover:bg-purple-600/70 text-white font-medium transition-all cursor-pointer"
            >
              🎲 Zufällig
            </button>
          </div>

          <button
            onClick={onNext}
            disabled={slideIndex === total - 1}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-30 disabled:cursor-not-allowed text-white font-medium transition-all cursor-pointer"
          >
            Weiter →
          </button>
        </div>
      </div>
    </div>
  );
}
