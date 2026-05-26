import { useState } from "react";
import Toggle from "./Toggle.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello Reacts</h1>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <input type="checkbox" /> <Toggle label="Dark mode" />
    </div>
  );
}

export default App;
