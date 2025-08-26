import React from "react";
import { useSlide } from "../../contexts/SlideContext";

const ThankYouSlide = () => {
  const { setCurrentSlide } = useSlide();

  return (
    <>
      <h1>
        <strong>Thank You</strong> & Questions
      </h1>
      <div className="container thank-you-container">
        <h4>
          A quick <strong>recap</strong>
        </h4>
        <button onClick={() => setCurrentSlide(4)}>
          <h5>Components</h5>
        </button>
        <button onClick={() => setCurrentSlide(5)}>
          <h5>JSX</h5>
        </button>
        <button onClick={() => setCurrentSlide(6)}>
          <h5>State & Props</h5>
        </button>
        <button onClick={() => setCurrentSlide(8)}>
          <h5>Virtual DOM</h5>
        </button>
      </div>
    </>
  );
};

export default ThankYouSlide;
