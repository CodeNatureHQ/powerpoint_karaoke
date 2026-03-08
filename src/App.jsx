import { useState, useCallback, useRef } from "react";
import StartScreen from "./components/StartScreen";
import PresentationPicker from "./components/PresentationPicker";
import SlideViewer from "./components/SlideViewer";
import presentations from "./data/presentations";

function getRandomPresentation(exclude) {
  const pool = exclude
    ? presentations.filter((p) => p.id !== exclude.id)
    : presentations;
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function App() {
  const [screen, setScreen] = useState("start"); // start | pick | present
  const [presentation, setPresentation] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const rootRef = useRef(null);

  const startPresentation = useCallback((pres) => {
    setPresentation(pres);
    setSlideIndex(0);
    setDirection(1);
    setScreen("present");
  }, []);

  const startRandom = useCallback(() => {
    startPresentation(getRandomPresentation(presentation));
  }, [presentation, startPresentation]);

  const goNext = useCallback(() => {
    // total = slides.length + 1 (title slide at index 0)
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
        />
      )}

      {screen === "pick" && (
        <PresentationPicker
          onSelect={startPresentation}
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
