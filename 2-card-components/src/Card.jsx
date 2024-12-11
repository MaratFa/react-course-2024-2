import cat from "../src/assets/cat.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={cat} alt="cat picture"></img>
      <h2>Cat</h2>
      <p>Nice cat</p>
    </div>
  );
};

export default Card;
