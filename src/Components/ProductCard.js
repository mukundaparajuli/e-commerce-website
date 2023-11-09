import React from "react";

const ProductCard = ({ info }) => {
  const { image, title, price, rating } = info;
  return (
    <div className="h-[350px]  w-72 rounded-lg m-4 p-6 border-2 shadow-xl hover:shadow-2xl bg-white">
      <div className="w-68 flex justify-center">
        <img className="h-[160px] flex self-center" src={image} alt="" />
      </div>
      <h1 className="text-[16px] font-bold">{title}</h1>
      <h1 className="text-[16px] font-semibold">$ {price}</h1>
      {rating.rate > 3 ? (
        <div className="flex items-center text-white bg-green-500 w-[74px] rounded-md justify-center">
          <img
            className="h-[22px]"
            src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-like-32386.png"
            alt=""
          />
          <h1 className="text-[16px] mr-2  font-semibold"> {rating.rate}</h1>
        </div>
      ) : (
        <div className="flex items-center text-white bg-red-500 w-[74px] rounded-md justify-center">
          <img
            className="h-[22px]"
            src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-like-32386.png"
            alt=""
          />
          <span> </span>
          <h1 className="text-[16px] mr-2  font-semibold">{rating.rate}</h1>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
