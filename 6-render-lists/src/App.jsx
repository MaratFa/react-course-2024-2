import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 90 },
    { id: 2, name: "orange", calories: 40 },
    { id: 3, name: "banana", calories: 100 },
    { id: 4, name: "coconut", calories: 120 },
    { id: 5, name: "pineapple", calories: 110 },
  ];

  return <List items={fruits} category='Fruits'/>;
}

export default App;
