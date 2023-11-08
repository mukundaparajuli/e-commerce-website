import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return <div>Cart:{cartItems}</div>;
};

export default Cart;
