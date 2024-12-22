function List() {
  const fruits = [
    { id: 1, name: "apple", colories: 90 },
    { id: 2, name: "orange", colories: 40 },
    { id: 3, name: "banana", colories: 100 },
    { id: 4, name: "coconut", colories: 120 },
    { id: 5, name: "pineapple", colories: 110 },
  ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  // fruits.sort((a, b) => a.colories - b.colories);      // ALPHABETICAL NUMERIC
  // fruits.sort((a, b) => b.colories - a.colories);      // REVERSE NUMERIC

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;
      <b>{fruit.colories}</b> colories
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
