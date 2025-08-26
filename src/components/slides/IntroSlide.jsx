import React from "react";
import reactLogo from "../../assets/react.svg";

function IntroSlide() {
  return (
    <>
      <h1>Understanding React in an easy way</h1>
      <img
        src={reactLogo}
        style={{ height: "15vh" }}
        className="react-logo"
        alt="React logo"
      />
      <h4>
        Bring to you by <strong>Group 15</strong>
      </h4>
      <table style={{ textAlign: "left" }}>
        <tbody>
          <tr key="chi">
            <td key="name">
              <h6>Nguyen Le Tung Chi</h6>
            </td>
            <td key="id">
              <h6>22110013</h6>
            </td>
          </tr>
          <tr key="huy">
            <td key="name">
              <h6>Le Minh Huy</h6>
            </td>
            <td key="id">
              <h6>22110033</h6>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default IntroSlide;
