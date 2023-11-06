import React from "react";

const Header = () => {
  return (
    <div className="flex h-[76px] shadow-xl items-center justify-evenly  w-[100%] bg-white m-0 fixed top-0">
      <div className="flex justify-between">
        <div>
          <img
            className="h-[32px] mz-2"
            src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
            alt="hamburger-menu"
          />
        </div>
        <div>
          <img
            className=" h-[32px] mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Daraz_Logo.png/1024px-Daraz_Logo.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="w-2/5 h-[42px] flex  items-center border-2 border-black justify-around rounded-lg">
        <input type="text" className="w-5/6 h-auto border" />
        <button>
          <img
            className="w-[36px] h-[20px] bg-orange-400 rounded-md ml-[3px] "
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
