import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const CounterSlide = () => {
  const Display = ({ count }) => <h4>You clicked {count} times</h4>;

  const [count, setCount] = useState(0);

  const code = `import React, { useState } from 'react';

const Display = ({count}) => (
  <h4>You clicked {count} times</h4>
)

const Counter = () => {
  // 1. Declare a state variable called "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 2. Display the current count */}
      <Display count={count} />

      {/* 3. On click, update the state */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`;

  return (
    <>
      <h1>
        Let's See It in Action! <strong>A Simple Counter</strong>
      </h1>
      <div className="split-container counter-container">
        <div className="component-1">
          <h6>A simple code block for a counter component.</h6>
          <CodeMirror
            value={code}
            extensions={[javascript({ jsx: true })]}
            theme={vscodeDark}
          />
        </div>
        <div className="component-2">
          <div>
            {/* 2. Display the current count */}
            <Display count={count} />

            {/* 3. On click, update the state */}
            <button onClick={() => setCount(count + 1)}>
              <h5>Click me</h5>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSlide;
