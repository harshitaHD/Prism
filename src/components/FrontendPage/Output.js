import React from "react";
import "./Frontend.css";

function Output({ srcDoc }) {
  return (
    <div className="output">
      <div className="output__header">
        <h1>Output</h1>
      </div>
      <iframe title="myFrame" srcDoc={srcDoc} className="output__frame" />
    </div>
  );
}

export default Output;
