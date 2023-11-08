import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import NoItemsAdded from "./NoItemsAdded";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems.length === 0 ? (
    <NoItemsAdded />
  ) : (
    <div>
      {cartItems.map((item, index) => (
        <CartProduct props={item} key={index} />
      ))}
    </div>
  );
};

export default Cart;
