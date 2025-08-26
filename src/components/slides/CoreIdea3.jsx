import React from "react";

const CoreIdea3 = () => {
  return (
    <>
      <h1>
        Core Idea #3: <strong>State and Props</strong>
      </h1>
      <div className="container core-idea-3">
        <div className="component-1">
          <h4>State</h4>
          <h6>"A component's private memory."</h6>
          <h6>Managed inside the component.</h6>
          <h6>
            It can change over time (e.g., what you type into a search bar).
          </h6>
        </div>
        <img
          className="state-props-img"
          src="/demonstrations/state-and-props.png"
          alt=""
        />
        <div className="component-2">
          <h4>Props</h4>
          <h6>"Data passed down to a component."</h6>
          <h6>Managed by a parent component.</h6>
          <h6>
            They are read-only; they don't change. (e.g., the username on a
            profile).
          </h6>
        </div>
      </div>
    </>
  );
};

export default CoreIdea3;
