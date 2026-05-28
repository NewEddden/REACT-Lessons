import { useState } from 'react';

function TextInput() {
  const [val, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <h1>Text Input</h1>
      <input type="text" value={val} onChange={handleChange} />
      <h2>{val}</h2>
    </>
  );
}

export default TextInput;
