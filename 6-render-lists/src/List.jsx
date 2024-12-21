const List = () => {
  const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

  const listItems = fruits.map(fruit => <li>{fruit}</li>)

  return (<>
  {listItems} {console.log(listItems)}
  </>);
};

export default List;
