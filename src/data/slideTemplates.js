// Each template defines a completely different visual style for slides.
// Templates control: backgrounds, text colors, accent placement, decorations, chart styling.

const slideTemplates = {
  // Template 1: Classic corporate — white slides, colored top bar, clean sans-serif
  "corporate": {
    slideBg: "bg-white",
    slideShadow: "shadow-2xl",
    slideBorder: "",
    slideRounded: "rounded-sm",
    accentPosition: "top", // colored bar at top
    accentHeight: "h-2",
    // Text
    titleColor: "text-gray-900",
    textColor: "text-gray-700",
    subtextColor: "text-gray-500",
    bulletStyle: "round", // round dots
    // Title slide
    titleSlideBg: null, // uses accent as full bg
    titleSlideAccentBg: true, // title slide has accent-colored background
    // Chart
    chartBg: "bg-gray-50 border border-gray-200",
    chartGridColor: "#e5e7eb",
    chartTextColor: "#6b7280",
    chartTooltipBg: "#fff",
    chartTooltipBorder: "1px solid #e5e7eb",
    chartTooltipColor: "#1f2937",
    // Image
    imageBorderRadius: "rounded-lg",
    imageCaptionBg: "bg-gray-50",
    imageCaptionColor: "text-gray-500",
    // Quote
    quoteTextColor: "text-gray-800",
    quoteSubColor: "text-gray-500",
    // Big number
    bigNumberSubColor: "text-gray-500",
  },

  // Template 2: Dark premium — dark slides, subtle gradients, light text
  "dark": {
    slideBg: "bg-gradient-to-br from-gray-900 to-gray-800",
    slideShadow: "shadow-2xl",
    slideBorder: "border border-white/10",
    slideRounded: "rounded-3xl",
    accentPosition: "bottom",
    accentHeight: "h-1",
    titleColor: "text-white",
    textColor: "text-gray-100",
    subtextColor: "text-gray-400",
    bulletStyle: "round",
    titleSlideBg: null,
    titleSlideAccentBg: false,
    chartBg: "bg-white/5 border border-white/10",
    chartGridColor: "rgba(255,255,255,0.1)",
    chartTextColor: "#9ca3af",
    chartTooltipBg: "rgba(15, 12, 41, 0.95)",
    chartTooltipBorder: "1px solid rgba(255,255,255,0.15)",
    chartTooltipColor: "#fff",
    imageBorderRadius: "rounded-2xl",
    imageCaptionBg: "bg-black/30",
    imageCaptionColor: "text-gray-400",
    quoteTextColor: "text-white",
    quoteSubColor: "text-gray-400",
    bigNumberSubColor: "text-gray-300",
  },

  // Template 3: Sidebar accent — white slide with colored left sidebar stripe
  "sidebar": {
    slideBg: "bg-white",
    slideShadow: "shadow-xl",
    slideBorder: "",
    slideRounded: "rounded-lg",
    accentPosition: "left", // thick left bar
    accentHeight: "w-3",
    titleColor: "text-gray-900",
    textColor: "text-gray-700",
    subtextColor: "text-gray-500",
    bulletStyle: "dash", // em-dash bullets
    titleSlideBg: null,
    titleSlideAccentBg: false,
    chartBg: "bg-white border border-gray-300",
    chartGridColor: "#d1d5db",
    chartTextColor: "#6b7280",
    chartTooltipBg: "#fff",
    chartTooltipBorder: "1px solid #d1d5db",
    chartTooltipColor: "#1f2937",
    imageBorderRadius: "rounded-md",
    imageCaptionBg: "bg-gray-100",
    imageCaptionColor: "text-gray-600",
    quoteTextColor: "text-gray-800",
    quoteSubColor: "text-gray-500",
    bigNumberSubColor: "text-gray-500",
  },

  // Template 4: Gradient hero — colored gradient background, white text
  "gradient": {
    slideBg: null, // uses dynamic gradient from theme
    slideShadow: "shadow-2xl",
    slideBorder: "",
    slideRounded: "rounded-2xl",
    accentPosition: "none",
    accentHeight: "",
    titleColor: "text-white",
    textColor: "text-white/90",
    subtextColor: "text-white/60",
    bulletStyle: "square",
    titleSlideBg: null,
    titleSlideAccentBg: false,
    chartBg: "bg-white/10 border border-white/20 backdrop-blur-sm",
    chartGridColor: "rgba(255,255,255,0.15)",
    chartTextColor: "rgba(255,255,255,0.7)",
    chartTooltipBg: "rgba(0,0,0,0.8)",
    chartTooltipBorder: "1px solid rgba(255,255,255,0.2)",
    chartTooltipColor: "#fff",
    imageBorderRadius: "rounded-xl",
    imageCaptionBg: "bg-black/20",
    imageCaptionColor: "text-white/70",
    quoteTextColor: "text-white",
    quoteSubColor: "text-white/60",
    bigNumberSubColor: "text-white/70",
  },

  // Template 5: Minimal line — very clean, thin bottom line, lots of whitespace
  "minimal": {
    slideBg: "bg-gray-50",
    slideShadow: "shadow-md",
    slideBorder: "border border-gray-200",
    slideRounded: "rounded-none",
    accentPosition: "bottom-thin",
    accentHeight: "h-0.5",
    titleColor: "text-gray-900",
    textColor: "text-gray-600",
    subtextColor: "text-gray-400",
    bulletStyle: "number", // numbered list
    titleSlideBg: null,
    titleSlideAccentBg: false,
    chartBg: "bg-white border border-gray-100",
    chartGridColor: "#f3f4f6",
    chartTextColor: "#9ca3af",
    chartTooltipBg: "#fff",
    chartTooltipBorder: "1px solid #e5e7eb",
    chartTooltipColor: "#374151",
    imageBorderRadius: "rounded-none",
    imageCaptionBg: "bg-white",
    imageCaptionColor: "text-gray-400",
    quoteTextColor: "text-gray-700",
    quoteSubColor: "text-gray-400",
    bigNumberSubColor: "text-gray-400",
  },

  // Template 6: Bold header — large colored header block, white body
  "bold-header": {
    slideBg: "bg-white",
    slideShadow: "shadow-xl",
    slideBorder: "",
    slideRounded: "rounded-lg",
    accentPosition: "header", // title gets a colored background block
    accentHeight: "",
    titleColor: "text-white", // title is white on colored bg
    textColor: "text-gray-700",
    subtextColor: "text-gray-500",
    bulletStyle: "arrow",
    titleSlideBg: null,
    titleSlideAccentBg: true,
    chartBg: "bg-gray-50 border border-gray-200",
    chartGridColor: "#e5e7eb",
    chartTextColor: "#6b7280",
    chartTooltipBg: "#fff",
    chartTooltipBorder: "1px solid #e5e7eb",
    chartTooltipColor: "#1f2937",
    imageBorderRadius: "rounded-lg",
    imageCaptionBg: "bg-gray-50",
    imageCaptionColor: "text-gray-500",
    quoteTextColor: "text-gray-800",
    quoteSubColor: "text-gray-500",
    bigNumberSubColor: "text-gray-500",
  },
};

export default slideTemplates;
