import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="mt-24">
      <Outlet />
    </div>
  );
};

export default Body;
