import { useState } from 'react';

function FavoriteColor() {
  /*{1. FavoriteColor (useState basics) A text input and a paragraph below it. 
     As the user types a color name, the paragraph reads: 
     "My favorite color is blue." Starts empty.}*/

  const [val, setColorText] = useState('');
  function ColorMe(e) {
    setColorText(e.target.value);
  }
  return (
    <>
      <input type="text" value={val} onChange={ColorMe} />
      {val && <p>{`My favorite color is ${val}`}</p>}{' '}
    </>
  );
}

export default FavoriteColor;
