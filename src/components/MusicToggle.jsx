import { useState, useRef, useCallback, useEffect } from "react";
import MusicEngine from "../audio/MusicEngine";

export default function MusicToggle({ mood = "corporate" }) {
  const [playing, setPlaying] = useState(false);
  const engineRef = useRef(null);
  const currentMoodRef = useRef(mood);

  const toggle = useCallback(() => {
    if (!engineRef.current) {
      engineRef.current = new MusicEngine();
    }
    const isNowPlaying = engineRef.current.toggle(mood);
    currentMoodRef.current = mood;
    setPlaying(isNowPlaying);
  }, [mood]);

  // Switch mood while playing when presentation changes
  useEffect(() => {
    if (playing && engineRef.current && currentMoodRef.current !== mood) {
      engineRef.current.switchMood(mood);
      currentMoodRef.current = mood;
    }
  }, [mood, playing]);

  // Stop music on unmount (when presentation is closed)
  useEffect(() => {
    return () => {
      if (engineRef.current) {
        engineRef.current.stop();
      }
    };
  }, []);

  return (
    <button
      onClick={toggle}
      className={`px-4 py-3 rounded-xl font-medium transition-all cursor-pointer text-sm ${
        playing
          ? "bg-purple-600/40 text-purple-200"
          : "bg-white/10 hover:bg-white/20 text-white"
      }`}
      title={playing ? "Musik aus" : "Musik an"}
    >
      {playing ? "♫ Musik aus" : "♫ Musik"}
    </button>
  );
}
