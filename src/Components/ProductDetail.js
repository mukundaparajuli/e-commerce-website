import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_API } from "../Utils/config";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProductDetail(productId);
  }, []);
  const getProductDetail = async (productId) => {
    const data = await fetch(PRODUCT_API + productId);
    const json = await data.json();
    setProduct(json);
    console.log(json);
  };
  console.log(productId);
  return (
    <div>
      {product ? (
        <div className="flex justify-evenly items-center">
          <div className="w-[48%] my-4">
            <img className="h-[500px] my-3" src={product.image} alt="" />
            <h1 className="text-[24px] font-bold my-3">{product.title}</h1>
          </div>
          <div className="w-[48%] m-4">
            <div className="m-3">
              <span className="font-bold text-[18px] border-b-2 border-black">
                Product Details:
              </span>
              <br />
              <span className="font-semibold text-[16px]">
                {product.description}
              </span>
            </div>
            <div className="m-4">
              <h1 className="text-[18px] italic font-semibold">
                Category: {product.category}
              </h1>
              <h1 className="text-[18px] my-3 font-semibold">Price: ${product.price}</h1>
              <h1 className="text-[18px] my-3 font-semibold">Rating: {product.rating.rate} Stars</h1>
              <h1 className="text-[18px] my-3 font-semibold">Rated By:{product.rating.count} people</h1>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
