import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 90 },
    { id: 2, name: "orange", calories: 40 },
    { id: 3, name: "banana", calories: 100 },
    { id: 4, name: "coconut", calories: 120 },
    { id: 5, name: "pineapple", calories: 110 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
  );
}

export default App;
