import { useState } from "react";

const MyComponent = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    console.log(newFood);
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2 style={{ color: "green" }}>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} style={{ margin: "0.3em", color: "blue" }}>
            {food}{" "}
            <button onClick={() => handleRemoveFood(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name"></input>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default MyComponent;
