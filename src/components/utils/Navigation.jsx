import React from "react";

function Navigation({ onNext, onPrev, currentSlide }) {
  return (
    <div className="navigation">
      <button onClick={onPrev}>&larr;</button>
      <p>{currentSlide}</p>
      <button onClick={onNext}>&rarr;</button>
    </div>
  );
}

export default Navigation;
