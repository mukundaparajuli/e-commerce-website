import React from "react";
import Logo from "../Utils/Logo.png";
// import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="flex h-[76px] shadow-xl items-center justify-evenly top-0 -z-0  w-[100%] bg-white m-0 fixed">
      <div className="flex justify-between w-[20%]">
        <div>
          <img
            className="h-[32px] m-2"
            src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
            alt="hamburger-menu"
          />
        </div>
        <div>
          <a href="/">
            <img className=" h-[32px] mx-2" src={Logo} alt="logo" />
          </a>
        </div>
      </div>
      <div className="w-2/5 h-[42px] flex  items-center border-2 justify-around rounded-lg">
        <input
          type="text"
          className="w-5/6 h-auto border-2 px-2 border-black cursor-text"
        />
        <button className="border-2 border-black rounded-md ml-[3px] bg-orange-400">
          <img
            className="w-[36px] h-[20px] rounded-md  "
            src="https://static.thenounproject.com/png/4009566-200.png"
            alt="Search"
          />
        </button>
      </div>
      <div className="flex items-center">
        <img
          className="h-[42px]"
          src="https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png"
          alt="login"
        />
        <button className="mx-2">Login</button>
        <button className="mx-2 h-[42px] bg-orange-500 p-2 text-white rounded-xl">
          Sign Up
        </button>
      </div>
      <div className="flex items-center">
        <img
          className="h-[42px]"
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="cart"
        />
        <h1>Cart</h1>
      </div>
    </div>
  );
};
export default Header;
