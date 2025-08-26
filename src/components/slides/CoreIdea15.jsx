import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const CoreIdea15 = () => {
  const [visibility, setVisibility] = useState(true);

  const code1 = `import React from 'react';

// A simple function that returns JSX
function Subscribers({subscribers}) {

  return (
    <div className="container">
      <img src="/avatar/user1" alt="user1-avatar" />
      <div className="flex-container">
        <h1>Music</h1>
        <h2>{subscribers} subscribers</h2>
      </div>
    </div>
  );
}





`;
  const code2 = `import React from 'react';

// A class that extends React.Component
class Subscriber extends React.Component {
  constructor({subscribers}) {
    super({subscribers})
  }

  // The render method returns the JSX
  render() {
    return (
      <div className="container">
        <img src="/avatar/user1" alt="user1-avatar" />
        <div className="flex-container">
          <h1>Music</h1>
          <h2>{subscribers} subscribers</h2>
        </div>
      </div>
    );
  }
}`;

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
            <img src="/demonstrations/youtube-zoom.jpg" alt="" />
          ) : (
            <div className="split-container" style={{ textAlign: "left" }}>
              <CodeMirror
                value={code1}
                extensions={[javascript({ jsx: true })]}
                theme={vscodeDark}
              />
              <CodeMirror
                value={code2}
                extensions={[javascript({ jsx: true })]}
                theme={vscodeDark}
              />
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default CoreIdea15;
