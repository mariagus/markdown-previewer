import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [text, setText] = useState(example);

  return (
    <div className="App">
      <header>Markdown Previewer</header>
      <textarea
        id="editor"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></textarea>
      <div id="preview" className="font">
        <ReactMarkdown source={text} escapeHtml={false} />
      </div>
    </div>
  );
}
const example =
  "# Header 1 \n## Header 2 \n### Header 3 \n---\nHere is some *italic* and some __bold__ text!\n<li>list item 1</li><li>list item 2</li>";
export default App;
