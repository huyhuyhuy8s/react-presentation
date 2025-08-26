import React, { createContext, useCallback, useContext, useState } from "react";

const SlideContext = createContext();

export const useSlide = () => {
  const context = useContext(SlideContext);
  if (!context) throw new Error("useSlide must be used within a SlideProvider");
  return context;
};

export const SlideProvider = ({ children, totalSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToFirst = useCallback(() => {
    setCurrentSlide(0);
  }, []);

  const goToLast = useCallback(() => {
    setCurrentSlide(totalSlides - 1);
  }, [totalSlides]);

  const value = {
    currentSlide,
    totalSlides,
    setCurrentSlide,
    goToNext,
    goToPrev,
    goToFirst,
    goToLast,
    isFirst: currentSlide === 0,
    isLast: currentSlide === totalSlides - 1,
  };

  return (
    <SlideContext.Provider value={value}>{children}</SlideContext.Provider>
  );
};
