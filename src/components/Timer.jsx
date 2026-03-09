import { useState, useEffect, useRef, useCallback } from "react";

const DEFAULT_PRESETS = [
  { label: "5 Min", seconds: 300 },
  { label: "10 Min", seconds: 600 },
  { label: "15 Min", seconds: 900 },
];

export default function Timer() {
  const [isOpen, setIsOpen] = useState(false);
  const [remaining, setRemaining] = useState(null);
  const [running, setRunning] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(7);
  const intervalRef = useRef(null);

  const stop = useCallback(() => {
    setRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    stop();
    setRemaining(null);
  }, [stop]);

  const start = useCallback(
    (seconds) => {
      stop();
      setRemaining(seconds);
      setRunning(true);
    },
    [stop]
  );

  useEffect(() => {
    if (!running || remaining === null) return;

    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          stop();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [running, remaining === null, stop]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const isWarning = remaining !== null && remaining <= 30 && remaining > 0;
  const isExpired = remaining === 0;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-3 rounded-xl font-medium transition-all cursor-pointer text-sm ${
          isExpired
            ? "bg-red-600/50 text-red-200 animate-pulse"
            : isWarning
              ? "bg-yellow-600/50 text-yellow-200"
              : remaining !== null
                ? "bg-green-600/30 text-green-300"
                : "bg-white/10 hover:bg-white/20 text-white"
        }`}
      >
        ⏱️ {remaining !== null ? formatTime(remaining) : "Timer"}
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/20 rounded-2xl p-4 shadow-2xl min-w-56 z-50">
          <p className="text-xs text-gray-400 mb-3 font-medium">
            Timer starten
          </p>

          {/* Preset buttons */}
          <div className="flex gap-2 mb-3">
            {DEFAULT_PRESETS.map((p) => (
              <button
                key={p.seconds}
                onClick={() => {
                  start(p.seconds);
                  setIsOpen(false);
                }}
                className="px-3 py-2 text-sm rounded-lg bg-purple-600/40 hover:bg-purple-600/70 text-white font-medium transition-colors cursor-pointer"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Custom time with +/- */}
          <div className="flex items-center gap-2 mb-3">
            <button
              onClick={() => setCustomMinutes((m) => Math.max(1, m - 1))}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-lg flex items-center justify-center cursor-pointer transition-colors"
            >
              −
            </button>
            <div className="flex-1 text-center text-white font-medium text-sm">
              {customMinutes} Min
            </div>
            <button
              onClick={() => setCustomMinutes((m) => Math.min(60, m + 1))}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-lg flex items-center justify-center cursor-pointer transition-colors"
            >
              +
            </button>
            <button
              onClick={() => {
                start(customMinutes * 60);
                setIsOpen(false);
              }}
              className="px-3 py-2 text-sm rounded-lg bg-green-600/40 hover:bg-green-600/70 text-green-200 font-medium cursor-pointer transition-colors"
            >
              Start
            </button>
          </div>

          {/* Pause/Reset controls when timer is active */}
          {remaining !== null && (
            <div className="flex gap-2 border-t border-white/10 pt-3">
              <button
                onClick={() => {
                  running ? stop() : setRunning(true);
                }}
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
              >
                {running ? "Pause" : "Weiter"}
              </button>
              <button
                onClick={() => {
                  reset();
                  setIsOpen(false);
                }}
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-red-600/30 hover:bg-red-600/50 text-red-300 cursor-pointer transition-colors"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
