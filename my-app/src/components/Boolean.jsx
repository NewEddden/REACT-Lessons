import { useState } from "react";

function Boolean() {
  const [isbool, setBool] = useState(false);

  function changeBool() {
    setBool(!isbool);
  }

  return (
    <>
      <h1 style={{ color: isbool ? "green" : "red" }}>
        {isbool ? "On" : "Off"}
      </h1>
      <button onClick={changeBool}>Click Me!</button>
    </>
  );
}
export default Boolean;
