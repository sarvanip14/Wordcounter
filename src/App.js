import React, { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Word Counter</h2>
      <textarea
        rows="4"
        placeholder="Type here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
