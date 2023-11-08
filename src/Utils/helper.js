export function filterData(searchText, products) {
  const filteredData = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filteredData);
  return filteredData;
}
