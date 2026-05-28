import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  function handleClickPlus() {
    setCount(count + 1);
  }
  function handleClickMinus() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClickPlus}>Increment </button>
      <button onClick={handleClickMinus}>Decrement </button>
    </>
  );
}
export default Counter;
