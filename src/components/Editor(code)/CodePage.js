import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import EditorNav from "./EditorNav";
import Axios from "axios";
import Editor from "@monaco-editor/react";
import "./Editor.css";

const CodePage = () => {
  const [userCode, setUserCode] = useState(` `);
  const [userLang, setUserLang] = useState("python");
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState(" ");
  const [userOutput, setUserOutput] = useState("");
  // const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };
  function compile() {
    // setLoading(true);
    if (userCode === ``) {
      return;
    }
    Axios.post(`http://localhost:8000/compile`, {
      code: userCode,
      language: userLang,
      input: userInput,
    }).then((res) => {
      setUserOutput(res.data.output);
    });
    // .then(() => {
    //   setLoading(false);
    // });
  }
  function clearOutput() {
    setUserOutput("");
  }
  return (
    <>
      <Navbar />
      <div className="main-div">
        <EditorNav
          userLang={userLang}
          setUserLang={setUserLang}
          userTheme={userTheme}
          setUserTheme={setUserTheme}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
        <div className="main">
          <div className="left-container">
            <Editor
              options={options}
              height="calc(87vh - 50px)"
              width="100%"
              theme={userTheme}
              language={userLang}
              defaultLanguage="python"
              defaultValue="# Code Here ..."
              onChange={(value) => {
                setUserCode(value);
              }}
            />
          </div>

          <div className="right-container">
            <div className="inp-div">
              <div>
                <h3>Input</h3>
              </div>
              <div className="run-button">
                <button className="run-btn" onClick={() => compile()}>
                  Run
                </button>
              </div>
            </div>
            <div className="input-box">
              <textarea
                id="code-inp"
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
            </div>
            <div className="inp-div">
              <div>
                <h3 className="out">Output</h3>
              </div>
              <div className="run-button">
                <button
                  onClick={() => {
                    clearOutput();
                  }}
                  className="clear-btn"
                >
                  Clear
                </button>
              </div>
            </div>
            <div className="output-box">
              <pre>{userOutput}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodePage;
