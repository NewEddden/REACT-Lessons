import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleToggle() {
    setIsOn(!isOn);
  }
  return (
    <>
      <h1>{isOn ? 'ON' : 'OFF'}</h1>
      <button onClick={handleToggle}>Click Me!</button>
    </>
  );
}
export default Toggle;
