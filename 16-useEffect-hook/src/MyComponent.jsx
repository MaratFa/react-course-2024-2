import { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  useEffect(
    function () {
      document.title = `Count: ${count} ${color}`;
    }, []
  );

  function addCount() {
    setCount((c) => c + 1);
  }
  
  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor(c => c === 'red' ? 'green' : 'red')
  }

  return (
    <>
      <p style={{color: color}}>Count: {count} <br/> Color: {color}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button><br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default MyComponent;
