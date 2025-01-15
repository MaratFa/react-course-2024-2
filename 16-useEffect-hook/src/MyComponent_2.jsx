import { useState, useEffect } from "react";

const MyComponent_2 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  window.addEventListener(event, handleResize)

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Widht: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
};

export default MyComponent_2;
