import Editor from "./Editor";
import NavBar from "./NavBar";
import PreviewPane from "./PreviewPane";
import { React, useState, useEffect } from "react";
import "./App.css";

function App(props) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [web, setWeb] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setWeb(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
     `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);


  const [index, setIndex] = useState(0);
  const sendSelectedFile = (index) => {
    setIndex(index);
    console.log(index);
  };

  return (
    <div>
      <div className="top-pane">
        <NavBar onSelect={sendSelectedFile} />
        {(() => {
          if (index == 0) {
            return (
              <Editor
                language="xml"
                title="index.html"
                value={html}
                onChange={setHtml}
              />
            );
          } else if (index == 1) {
            return (
              <Editor
                language="css"
                title="index.css"
                value={css}
                onChange={setCss}
              />
            );
          } else if (index == 2) {
            return (
              <Editor
                language="javascript"
                title="index.js"
                value={js}
                onChange={setJs}
              />
            );
          }
        })()}
      </div>
      <PreviewPane web={web} />
    </div>
  );
}

export default App;
