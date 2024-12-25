const Button = () => {
  return (
    <button onDoubleClick={(e) => (e.target.textContent = "Ouch!")}>
      Click me{" "}
    </button>
  );
};

export default Button;
