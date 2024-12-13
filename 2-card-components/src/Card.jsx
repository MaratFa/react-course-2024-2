import cat from "../src/assets/cat.jpg";

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={cat} alt="cat picture"></img>
      <h2 className="card-title">Cat</h2>
      <p className="card-text">Nice cat</p>
    </div>
  );
};

export default Card;
