import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <textarea
        id="editor"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></textarea>
      <div id="preview">
        <ReactMarkdown source={text} escapeHtml={false} />
      </div>
    </div>
  );
}

export default App;
