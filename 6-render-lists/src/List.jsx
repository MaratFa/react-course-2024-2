function List(props) {

  const itemList = 

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;
      <b>{fruit.calories}</b> colories
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
