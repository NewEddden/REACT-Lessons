import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        padding: "3rem 0",
      }}
    >
      <span style={{ fontSize: 72, fontWeight: 500, lineHeight: 1 }}>
        {count}
      </span>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </div>
  );
}
