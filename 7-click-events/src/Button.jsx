const Button = () => {
  
  const handleClick = () => console.log("Hello");

  return <button onClick={handleClick}>Click me </button>;
};

export default Button;
