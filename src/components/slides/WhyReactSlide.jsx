import React from "react";

const WhyReactSlide = () => {
  return (
    <>
      <h1>
        Why Choose <strong>React</strong>?
      </h1>
      <div className="split-container why-react-container">
        <table>
          <tbody>
            <tr>
              <td>
                <h6>
                  <strong>Declarative:</strong>
                </h6>
              </td>
              <td>
                <h6>
                  You "declare" what the UI should look like for a given state,
                  and React handles the rest.
                </h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6>
                  <strong>Component-Based:</strong>
                </h6>
              </td>
              <td>
                <h6>
                  Reusable code makes development faster and more organized.
                </h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6>
                  <strong>Huge Community:</strong>
                </h6>
              </td>
              <td>
                <h6>
                  Massive ecosystem, tons of jobs, and answers to every
                  question.
                </h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6>
                  <strong>React Native:</strong>
                </h6>
              </td>
              <td>
                <h6>
                  Learn once, write anywhere. You can use your React skills to
                  build native mobile apps for iOS and Android.
                </h6>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="container" style={{ flexDirection: "column" }}>
          <img
            src="/demonstrations/survey.png"
            alt=""
            style={{ maxHeight: "50vh" }}
          />
          <h6>
            <strong>Web frameworks and web technologies</strong> survey in{" "}
            <a href="https://survey.stackoverflow.co/2025/technology#1-web-frameworks-and-technologies">
              StackOverFlow 2025 Developer Survey
            </a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default WhyReactSlide;
