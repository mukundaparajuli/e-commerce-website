import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NoteState from "./Contexts/NoteState";

const Body = () => {
  return (
    <div className="mt-24">
      <NoteState>
        <Header />
        <Outlet />
      </NoteState>
    </div>
  );
};

export default Body;
