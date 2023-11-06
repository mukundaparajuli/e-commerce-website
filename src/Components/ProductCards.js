import React, { useEffect, useState } from "react";
import { PRODUCT_API } from "../Utils/config";
import ProductCard from "./ProductCard";
import { Shimmer } from "./Shimmer";

const ProductCards = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getProductApi();
  }, []);
  async function getProductApi() {
    const data = await fetch(PRODUCT_API);
    const json = await data.json();
    // console.log(json);
    setProducts(json);
  }
  return products === null ? (
    <Shimmer />
  ) : (
    <div className="my-20 flex flex-wrap justify-evenly">
      {products.map((product, id) => (
        <ProductCard info={product} key={id} />
      ))}
    </div>
  );
};

export default ProductCards;
