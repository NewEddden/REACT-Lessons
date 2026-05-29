function List() {
  const cars = ['Honda', 'Toyota', 'Nissan'];
  return (
    <>
      <h1>My Cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={car}>
            Car {index + 1}: {car}
          </li>
        ))}
      </ul>
    </>
  );
}
export default List;
