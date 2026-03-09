import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "./Timer";
import MusicToggle from "./MusicToggle";
import SlideChart from "./SlideChart";
import slideTemplates from "../data/slideTemplates";

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

// Renders bullet list styled by template
function BulletList({ bullets, accentColor, tpl, delay = 0.15 }) {
  return (
    <ul className="space-y-3 md:space-y-4">
      {bullets.map((bullet, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + i * 0.1 }}
          className={`flex items-start gap-3 text-base md:text-xl ${tpl.textColor}`}
        >
          <BulletMarker style={tpl.bulletStyle} index={i} accentColor={accentColor} />
          <span>{bullet}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function BulletMarker({ style, index, accentColor }) {
  switch (style) {
    case "dash":
      return (
        <span className="mt-0.5 font-bold shrink-0" style={{ color: accentColor }}>
          —
        </span>
      );
    case "square":
      return (
        <span
          className="mt-2 w-2 h-2 shrink-0"
          style={{ backgroundColor: accentColor }}
        />
      );
    case "number":
      return (
        <span
          className="mt-0.5 text-sm font-bold shrink-0 w-6 h-6 flex items-center justify-center rounded-full"
          style={{ backgroundColor: accentColor, color: "#fff" }}
        >
          {index + 1}
        </span>
      );
    case "arrow":
      return (
        <span className="mt-0.5 font-bold shrink-0" style={{ color: accentColor }}>
          ›
        </span>
      );
    default:
      return (
        <span
          className="mt-2 w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: accentColor }}
        />
      );
  }
}

// Visual panel (image or chart)
function VisualPanel({ slide, tpl, accentColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col"
    >
      {slide.image && (
        <div className={`${tpl.imageBorderRadius} overflow-hidden border border-gray-200 shadow-sm`}>
          <img
            src={slide.image.url}
            alt={slide.image.caption}
            className="w-full h-56 md:h-72 object-cover"
            loading="lazy"
          />
          <p className={`text-xs ${tpl.imageCaptionColor} italic text-center py-2 px-3 ${tpl.imageCaptionBg}`}>
            {slide.image.caption}
          </p>
        </div>
      )}
      {slide.chart && <SlideChart chart={slide.chart} tpl={tpl} accentColor={accentColor} />}
    </motion.div>
  );
}

// Layout: Two columns (bullets left, visual right)
function TwoColLayout({ slide, theme, tpl }) {
  const hasVisual = slide.image || slide.chart;
  const showHeader = tpl.accentPosition === "header";

  return (
    <>
      {showHeader ? (
        <div className="rounded-lg px-6 py-4 mb-6 -mx-2" style={{ backgroundColor: theme.accent }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white">{slide.title}</h3>
        </div>
      ) : (
        <h3 className={`text-2xl md:text-4xl font-bold ${tpl.titleColor} mb-6`}>
          {slide.title}
        </h3>
      )}
      <div className={hasVisual ? "flex flex-col md:flex-row gap-6 md:gap-10" : ""}>
        <div className={hasVisual ? "md:flex-1" : ""}>
          <BulletList bullets={slide.bullets} accentColor={theme.accent} tpl={tpl} />
        </div>
        {hasVisual && (
          <div className="md:flex-1">
            <VisualPanel slide={slide} tpl={tpl} accentColor={theme.accent} />
          </div>
        )}
      </div>
    </>
  );
}

// Layout: Full-width image as background with text overlay
function ImageFullLayout({ slide, theme, tpl }) {
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
        </div>
      )}
      <div className="relative flex-1 flex flex-col justify-end p-8 md:p-14">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
        >
          {slide.title}
        </motion.h3>
        {/* Image-full always uses white text bullets regardless of template */}
        <BulletList
          bullets={slide.bullets}
          accentColor="#fff"
          tpl={{ ...tpl, textColor: "text-white/90", bulletStyle: "round" }}
        />
        {slide.image && (
          <p className="text-xs text-gray-300 italic mt-4">
            {slide.image.caption}
          </p>
        )}
      </div>
    </div>
  );
}

// Layout: Big number / statistic highlight
function BigNumberLayout({ slide, theme, tpl }) {
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
        className={`text-lg md:text-2xl ${tpl.bigNumberSubColor} max-w-2xl mx-auto mb-8`}
      >
        {slide.bigNumberSub}
      </motion.p>
      {slide.bullets && slide.bullets.length > 0 && (
        <div className="max-w-xl mx-auto text-left">
          <BulletList
            bullets={slide.bullets}
            accentColor={theme.accent}
            tpl={tpl}
            delay={0.4}
          />
        </div>
      )}
    </div>
  );
}

// Layout: Chart as the hero element
function ChartFocusLayout({ slide, theme, tpl }) {
  const showHeader = tpl.accentPosition === "header";

  return (
    <>
      {showHeader ? (
        <div className="rounded-lg px-6 py-4 mb-4 -mx-2" style={{ backgroundColor: theme.accent }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white">{slide.title}</h3>
        </div>
      ) : (
        <h3 className={`text-2xl md:text-4xl font-bold ${tpl.titleColor} mb-4`}>
          {slide.title}
        </h3>
      )}
      {slide.bullets && slide.bullets.length > 0 && (
        <div className="mb-4">
          <BulletList bullets={slide.bullets} accentColor={theme.accent} tpl={tpl} />
        </div>
      )}
      {slide.chart && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <SlideChart chart={slide.chart} large tpl={tpl} accentColor={theme.accent} />
        </motion.div>
      )}
    </>
  );
}

// Layout: Large quote
function QuoteLayout({ slide, theme, tpl }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-6xl md:text-8xl mb-6 font-serif"
        style={{ color: theme.accent }}
      >
        &ldquo;
      </motion.div>
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className={`text-2xl md:text-4xl font-bold ${tpl.quoteTextColor} leading-snug max-w-4xl italic`}
      >
        {slide.title}
      </motion.blockquote>
      {slide.subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`text-lg ${tpl.quoteSubColor} mt-6`}
        >
          {slide.subtitle}
        </motion.p>
      )}
    </div>
  );
}

// Section divider
function SectionLayout({ slide, theme, tpl }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: theme.accent }} />
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-3xl md:text-5xl font-bold ${tpl.titleColor}`}
      >
        {slide.title}
      </motion.h3>
      {slide.subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-xl ${tpl.subtextColor} mt-4`}
        >
          {slide.subtitle}
        </motion.p>
      )}
    </div>
  );
}

function SlideContent({ slide, theme, tpl }) {
  const layout = slide.layout || "two-col";
  switch (layout) {
    case "image-full":
      return <ImageFullLayout slide={slide} theme={theme} tpl={tpl} />;
    case "big-number":
      return <BigNumberLayout slide={slide} theme={theme} tpl={tpl} />;
    case "chart-focus":
      return <ChartFocusLayout slide={slide} theme={theme} tpl={tpl} />;
    case "quote":
      return <QuoteLayout slide={slide} theme={theme} tpl={tpl} />;
    case "section":
      return <SectionLayout slide={slide} theme={theme} tpl={tpl} />;
    default:
      return <TwoColLayout slide={slide} theme={theme} tpl={tpl} />;
  }
}

// Build slide card classes/styles based on template
function getSlideCardProps(tpl, theme, isTitleSlide, isImageFull, gradient) {
  const classes = [
    "w-full max-w-6xl min-h-[70vh] flex flex-col justify-center",
    tpl.slideShadow,
    tpl.slideRounded,
    isImageFull ? "overflow-hidden" : "p-8 md:p-14",
  ];
  const style = {};

  // Background
  if (tpl.titleSlideAccentBg && isTitleSlide) {
    style.backgroundColor = theme.accent;
  } else if (tpl.slideBg === null) {
    // gradient template — use Tailwind gradient classes
    classes.push(`bg-gradient-to-br ${gradient}`);
  } else {
    classes.push(tpl.slideBg);
  }

  if (tpl.slideBorder) classes.push(tpl.slideBorder);

  return { className: classes.filter(Boolean).join(" "), style };
}

// Accent bar decoration
function AccentBar({ tpl, theme }) {
  if (tpl.accentPosition === "top") {
    return (
      <div
        className={`absolute top-0 left-0 right-0 ${tpl.accentHeight}`}
        style={{ backgroundColor: theme.accent }}
      />
    );
  }
  if (tpl.accentPosition === "bottom" || tpl.accentPosition === "bottom-thin") {
    return (
      <div
        className={`absolute bottom-0 left-0 right-0 ${tpl.accentHeight}`}
        style={{ backgroundColor: theme.accent }}
      />
    );
  }
  if (tpl.accentPosition === "left") {
    return (
      <div
        className={`absolute top-0 bottom-0 left-0 ${tpl.accentHeight}`}
        style={{ backgroundColor: theme.accent }}
      />
    );
  }
  return null;
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
  const tpl = slideTemplates[presentation.template] || slideTemplates["corporate"];
  const gradient = theme.gradient || "from-gray-800 to-gray-900";

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

  const isImageFull = !isTitleSlide && slide?.layout === "image-full";
  const cardProps = getSlideCardProps(tpl, theme, isTitleSlide, isImageFull, gradient);

  // Title slide text colors depend on whether accent bg is used
  const titleTextWhite = tpl.titleSlideAccentBg;

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#1e1e2e] ${isFullscreen ? "fixed inset-0 z-50" : ""}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 shrink-0">
        <button
          onClick={onExit}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors cursor-pointer"
        >
          ← Beenden
        </button>

        <div className="text-gray-400 text-sm font-medium">
          Folie {slideIndex + 1} von {total}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleFullscreen}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors cursor-pointer"
            title={isFullscreen ? "Vollbild beenden (F)" : "Vollbild (F)"}
          >
            {isFullscreen ? "Minimieren" : "Vollbild"}
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
            className={cardProps.className + " relative"}
            style={cardProps.style}
          >
            {/* Accent bar decoration */}
            {!isTitleSlide && <AccentBar tpl={tpl} theme={theme} />}

            {/* Title Slide */}
            {isTitleSlide && (
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.05 }}
                  className="w-24 h-1 mx-auto mb-8"
                  style={{ backgroundColor: titleTextWhite ? "rgba(255,255,255,0.5)" : theme.accent }}
                />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`text-4xl md:text-6xl font-bold mb-4 leading-tight ${
                    titleTextWhite ? "text-white" : tpl.titleColor
                  }`}
                >
                  {presentation.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`text-xl md:text-2xl ${
                    titleTextWhite ? "text-white/70" : tpl.subtextColor
                  }`}
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
                    className={`inline-block px-6 py-2 rounded text-sm font-medium ${
                      titleTextWhite
                        ? "text-white/60 border border-white/30"
                        : "text-gray-500 border border-gray-300"
                    }`}
                  >
                    Weiter → um zu starten
                  </span>
                </motion.div>
              </div>
            )}

            {/* Content Slide */}
            {!isTitleSlide && slide && (
              <SlideContent slide={slide} theme={theme} tpl={tpl} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls */}
      <div className="px-4 md:px-8 py-3 shrink-0">
        {/* Progress Bar */}
        <div className="w-full max-w-6xl mx-auto mb-3 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: theme.accent }}
            animate={{ width: `${((slideIndex + 1) / total) * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
        </div>

        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <button
            onClick={onPrev}
            disabled={slideIndex === 0}
            className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white font-medium transition-all cursor-pointer"
          >
            ← Zurück
          </button>

          <div className="flex items-center gap-3">
            <MusicToggle mood={presentation.mood} />
            <Timer />
            <button
              onClick={onRandom}
              className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all cursor-pointer"
            >
              Zufällig
            </button>
          </div>

          <button
            onClick={onNext}
            disabled={slideIndex === total - 1}
            className="px-5 py-3 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed text-white font-medium transition-all cursor-pointer"
            style={{ backgroundColor: theme.accent }}
          >
            Weiter →
          </button>
        </div>
      </div>
    </div>
  );
}
