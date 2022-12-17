import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./Frontend.css";

function Edit({ language, onChange }) {
  const [code, setCode] = useLocalStorage(language, []);
  const [open, setOpen] = useState(true);
  function handleClick() {
    setOpen((prevOpen) => !prevOpen);
    if (window.screen.width <= 600) {
      let editor = document.getElementById(language);
      if (editor.style.display === "none") {
        editor.style.display = "block";
      } else {
        editor.style.display = "none";
      }
    }
  }

  return (
    <div className={`editor ${open ? "" : "close"}`}>
      <div className="editor__header">
        <h2 className="editor__title">{language}</h2>
        <button className="editor__button" onClick={handleClick}>
          EDIT
        </button>
      </div>
      <textarea
        id={language}
        className="editor__code"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
          onChange(e.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default Edit;
