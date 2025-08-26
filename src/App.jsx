import React, { useCallback, useEffect } from "react";
import "./styles/_main.scss";
import Navigation from "./components/utils/Navigation";
import { useSlide } from "./contexts/SlideContext";

const App = ({ slides }) => {
  // State to keep track of the current slide index
  const { currentSlide, goToNext, goToPrev, goToFirst, goToLast } = useSlide();

  const handleSlideClick = (event) => {
    const width = event.target.clientWidth;
    if (
      event.target.tagName === "IMG" ||
      event.target.tagName === "BUTTON" ||
      event.target.parentElement.tagName === "BUTTON" ||
      (event.target.tagName === "DIV" &&
        event.target.className === "cm-content")
    )
      return;
    if (event.clientX >= width / 2) goToNext();
    else goToPrev();
  };

  const handleKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          event.preventDefault();
          goToNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          goToPrev();
          break;
        case "Home":
          event.preventDefault();
          goToFirst();
          break;
        case "End":
          event.preventDefault();
          goToLast();
          break;
        default:
          break;
      }
    },
    [goToNext, goToPrev, goToFirst, goToLast]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    const appContainer = document.querySelector(".app-container");
    if (appContainer) {
      appContainer.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="app-container" tabIndex={0}>
      <div className="slide" onClick={handleSlideClick}>
        {slides[currentSlide]}
      </div>
      <Navigation
        onNext={goToNext}
        currentSlide={currentSlide}
        onPrev={goToPrev}
      />
    </div>
  );
};

export default App;
