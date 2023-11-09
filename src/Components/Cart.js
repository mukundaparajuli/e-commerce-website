import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import NoItemsAdded from "./NoItemsAdded";
import { clearCart } from "../Utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearTheCart = () => {
    dispatch(clearCart());
  };
  return cartItems.length === 0 ? (
    <NoItemsAdded />
  ) : (
    <div>
      <button
        className="bg-blue-400 h-16 p-3 rounded-lg  text-white font-bold text-2xl flex end"
        onClick={clearTheCart}
      >
        Clear Cart
      </button>
      {cartItems.map((item, index) => (
        <CartProduct props={item} key={index} />
      ))}
    </div>
  );
};

export default Cart;
