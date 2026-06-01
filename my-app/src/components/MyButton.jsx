import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("You clicked Me!");
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
      <h1>{count}</h1>
    </>
  );
}

export default MyButton;
