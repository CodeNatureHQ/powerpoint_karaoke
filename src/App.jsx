import { useState, useCallback, useEffect, useRef } from "react";
import StartScreen from "./components/StartScreen";
import PresentationPicker from "./components/PresentationPicker";
import SlideViewer from "./components/SlideViewer";
import GenerateScreen from "./components/GenerateScreen";
import { supabase } from "./lib/supabase";

function getRandomPresentation(presentations, exclude) {
  const pool = exclude
    ? presentations.filter((p) => p.id !== exclude.id)
    : presentations;
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function App() {
  const [screen, setScreen] = useState("start"); // start | pick | generate | present
  const [presentations, setPresentations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [presentation, setPresentation] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    supabase
      .from("presentations")
      .select("*")
      .order("id")
      .then(({ data }) => {
        const mapped = (data ?? []).map((p) => ({
          ...p,
          coverImage: p.cover_image,
        }));
        setPresentations(mapped);
        setLoading(false);
      });
  }, []);

  const startPresentation = useCallback((pres) => {
    setPresentation(pres);
    setSlideIndex(0);
    setDirection(1);
    setScreen("present");
  }, []);

  const startRandom = useCallback(() => {
    startPresentation(getRandomPresentation(presentations, presentation));
  }, [presentations, presentation, startPresentation]);

  const handleGenerated = useCallback(
    (newPres) => {
      // Add to local list so it appears in the picker
      setPresentations((prev) => [...prev, newPres]);
      // Start immediately
      startPresentation(newPres);
    },
    [startPresentation],
  );

  const goNext = useCallback(() => {
    if (presentation && slideIndex < presentation.slides.length) {
      setDirection(1);
      setSlideIndex((i) => i + 1);
    }
  }, [presentation, slideIndex]);

  const goPrev = useCallback(() => {
    if (slideIndex > 0) {
      setDirection(-1);
      setSlideIndex((i) => i - 1);
    }
  }, [slideIndex]);

  const exitPresentation = useCallback(() => {
    setScreen("start");
    setPresentation(null);
    setSlideIndex(0);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setIsFullscreen(false);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  return (
    <div ref={rootRef}>
      {screen === "start" && (
        <StartScreen
          onStart={() => setScreen("pick")}
          onRandom={startRandom}
          onGenerate={() => setScreen("generate")}
          loading={loading}
        />
      )}

      {screen === "pick" && (
        <PresentationPicker
          presentations={presentations}
          onSelect={startPresentation}
          onBack={() => setScreen("start")}
        />
      )}

      {screen === "generate" && (
        <GenerateScreen
          onGenerated={handleGenerated}
          onBack={() => setScreen("start")}
        />
      )}

      {screen === "present" && presentation && (
        <SlideViewer
          presentation={presentation}
          slideIndex={slideIndex}
          direction={direction}
          onNext={goNext}
          onPrev={goPrev}
          onExit={exitPresentation}
          onRandom={startRandom}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
      )}
    </div>
  );
}
