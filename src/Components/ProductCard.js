import React from "react";

const ProductCard = ({ info }) => {
    const {image, title, price, rating}=info;
  return (
    <div className="h-[380px]  w-80 rounded-lg m-4 p-6 border-2 border-black hover:shadow-2xl">
      <img className="h-[180px] flex self-center" src={image} alt="" />

      <h1 className="text-[18px] font-bold">{title}</h1>
      <h1>$ {price}</h1>
      <h1>{rating.rate} stars</h1>
    </div>
  );
};

export default ProductCard;
