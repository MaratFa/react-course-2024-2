const Button = () => {

  const handleClick = () => console.log('Hello');
  
  const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  return <button onClick={handleClick}>Click me </button>;
};

export default Bаutton;
