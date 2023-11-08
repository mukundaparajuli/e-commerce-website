import React, { useEffect, useContext } from "react";
// import { PRODUCT_API } from "../Utils/config";
import ProductCard from "./ProductCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import NoteContext from "./Contexts/NoteContext";

const ProductCards = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.getProductApi();
  }, []);
  const products = a.products;

  // Sample list of products

  return products === 0 ? (
    <Shimmer />
  ) : (
    <div className="my-20 flex flex-wrap justify-evenly">
      {products.map((product, id) => (
        <Link to={"/" + product.id} key={id}>
          <ProductCard info={product} key={id} />
        </Link>
      ))}
    </div>
  );
};

export default ProductCards;
