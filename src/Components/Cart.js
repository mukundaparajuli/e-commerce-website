import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import NoItemsAdded from "./NoItemsAdded";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems === 0 ? (
    <NoItemsAdded />
  ) : (
    <div>
      {cartItems.map((item) => (
        <CartProduct props={item} />
      ))}
    </div>
  );
};

export default Cart;
