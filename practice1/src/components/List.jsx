const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
  { title: "Broccoli", isFruit: false, id: 4 },
];
function List() {
  const listMap = products.map((product) => (
    <li
      key={product.id}
      style={{
        listStyle: "none",
        color: product.isFruit ? "red" : "green",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <>
      <h1>My List</h1>
      <ul>{listMap}</ul>
    </>
  );
}
export default List;
