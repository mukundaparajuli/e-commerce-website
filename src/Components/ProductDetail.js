import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_API } from "../Utils/config";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    getProductDetail(productId);
  }, []);
  const getProductDetail = async (productId) => {
    const data = await fetch(PRODUCT_API + productId);
    const json = await data.json();
    setProduct(json);
    console.log(json);
  };
  const addItems = () => {
    dispatch(addItem());
  };

  console.log(productId);
  return (
    <div>
      {product ? (
        <div className="flex justify-around items-center">
          <div className="w-[40%] my-4 mx-4">
            <img className="h-[500px] my-3" src={product.image} alt="" />
            <h1 className="text-[24px] font-bold my-3">{product.title}</h1>
          </div>
          <div className="w-[45%] mx-4">
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
              <div>
                <h1 className="text-[18px] italic font-semibold">
                  Category: {product.category}
                </h1>
                <h1 className="text-[18px] my-3 font-semibold">
                  Price: ${product.price}
                </h1>
                <h1 className="text-[18px] my-3 flex font-semibold">
                  <img
                    className="h-[22px]"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-like-32386.png"
                    alt=""
                  />
                  <div> : {product.rating.rate}</div>
                </h1>
                <h1 className="text-[18px] my-3 font-semibold">
                  Rated By {product.rating.count} people
                </h1>
              </div>
              <div className="my-12 flex">
                <button className="text-[22px] font-bold mx-2 rounded-md border-black border-2  p-2 hover:shadow-xl">
                  Buy Now
                </button>
                <button
                  className="text-[22px] font-bold mx-2 rounded-md  bg-orange-400 p-2 text-white hover:shadow-orange-200 shadow-xl"
                  onClick={() => addItems()}
                >
                  Add to Cart
                </button>
              </div>
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
