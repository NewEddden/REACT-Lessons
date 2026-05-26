import { useState } from "react";

export default function Toggle({ label = "Toggle me" }) {
  const [on, setOn] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => setOn(!on)}
        style={{
          width: "48px",
          height: "26px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          background: on ? "#2563eb" : "#d1d5db",
          position: "relative",
          transition: "background 0.2s",
        }}
        aria-pressed={on}
        aria-label={label}
      >
        <span
          style={{
            position: "absolute",
            top: "3px",
            left: on ? "25px" : "3px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#fff",
            transition: "left 0.2s",
          }}
        />
      </button>
      <span style={{ fontSize: "14px" }}>{on ? "On" : "Off"}</span>
      <span style={{ fontSize: "14px", color: "#6b7280" }}>{label}</span>
    </div>
  );
}
