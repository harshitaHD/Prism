import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import "./Frontend.css";
import Edit from "./Edit";
import Output from "./Output";

function Frontend() {
  const [html, setHtml] = useState(localStorage.getItem("codepen-clone-HTML"));
  const [css, setCss] = useState(localStorage.getItem("codepen-clone-CSS"));
  const [js, setJs] = useState(localStorage.getItem("codepen-clone-JS"));
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html><body>${html}</body></html><style>${css}</style><script>${js}</script>`
      );
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <>
      <Navbar />
      <div>
        <div className="app">
          <div className="app__editors">
            <Edit language="HTML" value={html} onChange={setHtml} />
            <Edit language="CSS" value={css} onChange={setCss} />
            <Edit language="JS" value={js} onChange={setJs} />
          </div>
          <Output srcDoc={srcDoc} />
        </div>
      </div>
    </>
  );
}

export default Frontend;
