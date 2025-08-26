import React, { useState } from "react";

const ProblemSlide = () => {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <h1>The Problem Before React</h1>
      <h4>Keeping the UI in sync with data is complicated!</h4>
      <div className="problem-container container">
        <button onClick={handleClick}>
          <img src="/demonstrations/problem-state.png" alt="" />
        </button>
        {visibility && (
          <h6>
            In the old days, developers had to write code to find each specific
            element on the page and update them one by one. This was slow,
            messy, and became a nightmare to manage on large applications. They
            needed a better way.
          </h6>
        )}
      </div>
    </>
  );
};

export default ProblemSlide;
