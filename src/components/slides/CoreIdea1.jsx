import React, { useState } from "react";

const CoreIdea1 = () => {
  const [visibility, setVisibility] = useState(true);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <h1>
        Core Idea #1: <strong>Components</strong>
      </h1>
      <h4>
        Everything is a <strong>Component</strong>.
      </h4>
      <div className="container core-idea-1">
        <button onClick={handleClick}>
          {visibility ? (
            <img src="/demonstrations/youtube-homepage.jpg" alt="" />
          ) : (
            <img src="/demonstrations/youtube-component.jpg" alt="" />
          )}
        </button>
      </div>
    </>
  );
};

export default CoreIdea1;
