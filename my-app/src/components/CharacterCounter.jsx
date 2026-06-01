import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  if (text.length > 150) {
    setText("Limit reached");
  }
  function charCount(text) {
    return text.length;
  }

  function Clear() {
    setText("");
  }
  return (
    <>
      <h1>Character Counter</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          if (e.target.value.length <= 150) {
            setText(e.target.value);
          }
        }}
      />
      <p>{text}</p>
      <p
        style={{
          color:
            text.length === 150
              ? "red"
              : text.length >= 120
                ? "orange"
                : "white",
        }}
      >
        {charCount(text)}
      </p>
      <button onClick={Clear}>Clear</button>
    </>
  );
}
export default CharacterCounter;
