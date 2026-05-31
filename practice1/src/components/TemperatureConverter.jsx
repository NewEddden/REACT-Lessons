import { useState } from "react";

function TemperatureConverter() {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("C");

  function getResult() {
    if (temp === "" || isNaN(temp)) return null;
    if (unit === "C") {
      return `${temp}°C = ${((temp * 9) / 5 + 32).toFixed(1)}°F`;
    } else {
      return `${temp}°F = ${(((temp - 32) * 5) / 9).toFixed(1)}°C`;
    }
  }
  return (
    <>
      <h1>My Temperature Convesrter</h1>
      <input
        type="Number"
        placeholder="Enter  A Temperature"
        style={{ textAlign: "center" }}
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <button onClick={() => setUnit("C")}>Input is °C</button>
      <button onClick={() => setUnit("F")}>Input is °F</button>
      <p>{getResult()}</p>
    </>
  );
}
export default TemperatureConverter;
