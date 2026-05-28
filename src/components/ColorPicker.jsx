import { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('black');
  function HandleColor(newColor) {
    setColor(newColor);
  }

  return (
    <>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          border: '1px solid black',
          marginBottom: '10px',
        }}
      ></div>
      <button style={{ color: 'red' }} onClick={() => HandleColor('red')}>
        Red
      </button>
      <button style={{ color: 'blue' }} onClick={() => HandleColor('blue')}>
        Blue
      </button>
      <button style={{ color: 'green' }} onClick={() => HandleColor('green')}>
        Green
      </button>
    </>
  );
}
export default ColorPicker;
