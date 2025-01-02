import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Guest");
  const [quantaty, setQuantaty] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantatityChange(event) {
    setQuantaty(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantaty} onChange={handleQuantatityChange} type="number" />
      <p>Quantatity: {quantaty}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      ></textarea>
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
    </div>
  );
};

export default MyComponent;
