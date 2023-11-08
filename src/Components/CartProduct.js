import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../Utils/CartSlice";

const CartProduct = ({ props }) => {
  const { title, image, description, price, rating, id, index } = props;
  const dispatch = useDispatch();
  const removeItems = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="flex justify-center my-9">
      <div className="w-[90%] flex self-center border border-black h-auto rounded-lg justify-evenly">
        <div className="h-[180px]  p-5 w-[20%]">
          <div className="w-78 flex justify-center align-middle ">
            <img className="h-[180px] flex self-center" src={image} alt="" />
          </div>
        </div>
        <div className="p-5 bg-gray-200 w-[60%]">
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-lg font-semibold text-gray-500 text-justify">
            {description}
          </div>
          <div className="text-lg font-bold">Price: $ {price}</div>
          <div className="flex">
            <div className="text-lg font-semibold mr-5">
              Rating: {rating.rate} stars
            </div>
            <div className="text-lg font-semibold">
              Rated by {rating.count} customers
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-1 m-3 w-[20%]">
          <div className="w-[100%]  text-white font-semibold">
            const index={index};
            <button
              className="border border-black px-2 my-1 w-[98%] bg-red-500 rounded-md"
              onClick={() => {
                removeItems();
              }}
            >
              Remove Item
            </button>
            <button className="border border-black px-2 my-1 w-[98%] bg-green-500 rounded-md">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
