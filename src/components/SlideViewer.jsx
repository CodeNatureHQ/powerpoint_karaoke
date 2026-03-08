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

// Renders bullet list with theme-aware styling
function BulletList({ bullets, bulletColor, delay = 0.15 }) {
  return (
    <ul className="space-y-3 md:space-y-4">
      {bullets.map((bullet, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + i * 0.1 }}
          className="flex items-start gap-3 text-base md:text-xl text-gray-100"
        >
          <span
            className={`mt-1.5 w-2 h-2 rounded-full ${bulletColor} shrink-0`}
          />
          <span>{bullet}</span>
        </motion.li>
      ))}
    </ul>
  );
}

// Visual panel (image or chart)
function VisualPanel({ slide }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col"
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
  );
}

// Layout: Two columns (bullets left, visual right)
function TwoColLayout({ slide, theme }) {
  const hasVisual = slide.image || slide.chart;
  return (
    <>
      <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
        {slide.title}
      </h3>
      <div
        className={
          hasVisual ? "flex flex-col md:flex-row gap-6 md:gap-10" : ""
        }
      >
        <div className={hasVisual ? "md:flex-1" : ""}>
          <BulletList bullets={slide.bullets} bulletColor={theme.bullet} />
        </div>
        {hasVisual && (
          <div className="md:flex-1">
            <VisualPanel slide={slide} />
          </div>
        )}
      </div>
    </>
  );
}

// Layout: Full-width image as background with text overlay
function ImageFullLayout({ slide, theme }) {
  return (
    <div className="relative -m-8 md:-m-14 min-h-[70vh] flex flex-col">
      {slide.image && (
        <div className="absolute inset-0">
          <img
            src={slide.image.url}
            alt={slide.image.caption}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        </div>
      )}
      <div className="relative flex-1 flex flex-col justify-end p-8 md:p-14">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-lg"
        >
          {slide.title}
        </motion.h3>
        <BulletList bullets={slide.bullets} bulletColor={theme.bullet} />
        {slide.image && (
          <p className="text-xs text-gray-400 italic mt-4">
            {slide.image.caption}
          </p>
        )}
      </div>
    </div>
  );
}

// Layout: Big number / statistic highlight
function BigNumberLayout({ slide, theme }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="text-7xl md:text-9xl font-black mb-2"
        style={{ color: theme.accent }}
      >
        {slide.bigNumber}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
      >
        {slide.bigNumberSub}
      </motion.p>
      {slide.bullets && slide.bullets.length > 0 && (
        <div className="max-w-xl mx-auto text-left">
          <BulletList
            bullets={slide.bullets}
            bulletColor={theme.bullet}
            delay={0.4}
          />
        </div>
      )}
    </div>
  );
}

// Layout: Chart as the hero element
function ChartFocusLayout({ slide, theme }) {
  return (
    <>
      <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
        {slide.title}
      </h3>
      {slide.bullets && slide.bullets.length > 0 && (
        <div className="mb-4">
          <BulletList bullets={slide.bullets} bulletColor={theme.bullet} />
        </div>
      )}
      {slide.chart && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <SlideChart chart={slide.chart} large />
        </motion.div>
      )}
    </>
  );
}

// Layout: Large quote
function QuoteLayout({ slide, theme }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-6xl md:text-8xl mb-6"
        style={{ color: theme.accent }}
      >
        &ldquo;
      </motion.div>
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-2xl md:text-4xl font-bold text-white leading-snug max-w-4xl italic"
      >
        {slide.title}
      </motion.blockquote>
      {slide.subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 mt-6"
        >
          {slide.subtitle}
        </motion.p>
      )}
    </div>
  );
}

// Section divider
function SectionLayout({ slide, theme }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: theme.accent }} />
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-black text-white"
      >
        {slide.title}
      </motion.h3>
      {slide.subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mt-4"
        >
          {slide.subtitle}
        </motion.p>
      )}
    </div>
  );
}

function SlideContent({ slide, theme }) {
  const layout = slide.layout || "two-col";
  switch (layout) {
    case "image-full":
      return <ImageFullLayout slide={slide} theme={theme} />;
    case "big-number":
      return <BigNumberLayout slide={slide} theme={theme} />;
    case "chart-focus":
      return <ChartFocusLayout slide={slide} theme={theme} />;
    case "quote":
      return <QuoteLayout slide={slide} theme={theme} />;
    case "section":
      return <SectionLayout slide={slide} theme={theme} />;
    default:
      return <TwoColLayout slide={slide} theme={theme} />;
  }
}

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
  const total = presentation.slides.length + 1;
  const theme = presentation.theme;

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

  // Determine if the slide uses image-full layout (needs no padding on the card)
  const isImageFull = !isTitleSlide && slide?.layout === "image-full";

  return (
    <div
      className={`min-h-screen flex flex-col ${isFullscreen ? "fixed inset-0 z-50 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" : ""}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 shrink-0">
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
      <div className="flex-1 flex items-center justify-center px-4 py-2 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slideIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`w-full max-w-6xl min-h-[70vh] bg-gradient-to-br ${
              isTitleSlide ? theme.titleBg : theme.bg
            } backdrop-blur-sm ${theme.border} border rounded-3xl ${
              isImageFull ? "overflow-hidden" : "p-8 md:p-14"
            } shadow-2xl flex flex-col justify-center`}
          >
            {/* Title Slide */}
            {isTitleSlide && (
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 }}
                  className="w-20 h-1 rounded-full mx-auto mb-8"
                  style={{ backgroundColor: theme.accent }}
                />
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
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-10"
                >
                  <span
                    className="inline-block px-6 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${theme.accent}30`,
                      color: theme.accent,
                    }}
                  >
                    Weiter → um zu starten
                  </span>
                </motion.div>
              </div>
            )}

            {/* Content Slide */}
            {!isTitleSlide && slide && (
              <SlideContent slide={slide} theme={theme} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls */}
      <div className="px-4 md:px-8 py-3 shrink-0">
        {/* Progress Bar */}
        <div className="w-full max-w-6xl mx-auto mb-3 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${theme.progress} rounded-full`}
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
              className="px-5 py-3 rounded-xl text-white font-medium transition-all cursor-pointer"
              style={{ backgroundColor: `${theme.accent}40` }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = `${theme.accent}60`)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = `${theme.accent}40`)
              }
            >
              🎲 Zufällig
            </button>
          </div>

          <button
            onClick={onNext}
            disabled={slideIndex === total - 1}
            className="px-5 py-3 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed text-white font-medium transition-all cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${theme.accent}, ${theme.accentAlt})`,
            }}
          >
            Weiter →
          </button>
        </div>
      </div>
    </div>
  );
}
