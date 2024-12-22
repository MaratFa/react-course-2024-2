import PropTypes from "prop-types";

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
  category: PropTypes.string,
};

function List(props) {
  const { category } = props;
  const { items } = props;

  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}:&nbsp;<b>{item.calories}</b> colories
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

export default List;
