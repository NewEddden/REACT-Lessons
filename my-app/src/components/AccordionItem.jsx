import { useState } from 'react';

function AccordionItem() {
  const [bool, setBool] = useState(false);
  function changeBool() {
    setBool(!bool);
    console.log(!bool);
  }
  let text = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolore
        rerum beatae nulla suscipit blanditiis odit iste nesciunt, corrupti
        tempore amet at, unde dolor. Quos dolorem eum culpa ratione vel!`;
  return (
    <>
      <p>{bool ? text : ' '}</p>

      <button onClick={changeBool}>{bool ? 'Hide' : 'Show'}</button>
    </>
  );
}
export default AccordionItem;
