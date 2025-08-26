import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const CoreIdea2 = () => {
  const code1 = `/// Old way - JavaScript
    const element = React.createElement('h1', null, 'Hello, world!')
    `;
  const code2 = `/// New way - JSX
  const element = <h1>Hello, world!</h1>;
  `;
  return (
    <>
      <h1>
        Core Idea #2: <strong>JSX - HTML in JavaScript</strong>
      </h1>
      <h4>JSX lets you write HTML-like code directly in your JavaScript.</h4>
      <div className="container">
        <div className="split-container core-idea-2">
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
      </div>
      <img src="/demonstrations/jsx.png" alt="" style={{ maxWidth: "50vw" }} />
    </>
  );
};

export default CoreIdea2;
