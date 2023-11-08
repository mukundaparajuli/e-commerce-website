import { PRODUCT_API } from "../../Utils/config";
import NoteContext from "./NoteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const [products, setProducts] = useState([]);
  const getProductApi = async () => {
    const data = await fetch(PRODUCT_API);
    const response = await data.json();
    setProducts(response);
  };
  const updationOnSearch = (searchText) => {
    setProducts(filterData(searchText, products));
  };
  function filterData(searchText, products) {
    const filteredData = products.filter((product) =>
      product?.title?.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredData);
    return filteredData;
  }

  return (
    <NoteContext.Provider value={{ products, getProductApi, updationOnSearch }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;

/**
 * export function filterData(searchText, products) {
  const filteredData = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filteredData);
  return filteredData;
}

 */
