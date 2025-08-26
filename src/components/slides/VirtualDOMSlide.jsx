import React, { useState } from "react";

const VirtualDOMSlide = () => {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <h1>
        The{" "}
        <strong>
          <u>Secret Sauce</u>
        </strong>
        : The Virtual DOM
      </h1>
      <h4>Fast and Efficient Updates.</h4>
      <div className="container virtual-dom-container">
        <button onClick={handleClick}>
          {visibility ? (
            <img src="/demonstrations/vdom.png" alt="" />
          ) : (
            <img src="/demonstrations/vdom2.png" alt="" />
          )}
        </button>
      </div>
    </>
  );
};

export default VirtualDOMSlide;
