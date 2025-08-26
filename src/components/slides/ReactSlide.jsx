import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";

const ReactSlide = () => {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <h1>What is React?</h1>
      <div className="container react-slide">
        <button type="button" onClick={handleClick}>
          <img src={reactLogo} className="react-logo" alt="React logo" />
        </button>
        <h6>
          A <strong>JavaScript library</strong> for building{" "}
          <strong>user interfaces</strong>.
        </h6>
        {visibility && (
          <img
            className="framework-vs-library"
            src="/demonstrations/framework-vs-library.png"
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default ReactSlide;
