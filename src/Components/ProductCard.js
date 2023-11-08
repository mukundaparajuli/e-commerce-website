import React from "react";

const ProductCard = ({ info }) => {
  const { image, title, price, rating } = info;
  return (
    <div className="h-[380px]  w-80 rounded-lg m-4 p-6 border-2 hover:shadow-2xl">
      <div className="w-78 flex justify-center">
        <img className="h-[180px] flex self-center" src={image} alt="" />
      </div>
      <h1 className="text-[18px] font-bold">{title}</h1>
      <h1 className="text-[16px] font-semibold">$ {price}</h1>
      <div className="flex items-center">
        <h1 className="text-[16px] mr-2  font-semibold">Rating: {rating.rate}</h1>
        <img
          className="h-[22px]"
          src="https://cdn.iconscout.com/icon/free/png-256/free-star-bookmark-favorite-shape-rank-like-32386.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductCard;
