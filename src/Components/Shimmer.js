import React from "react";

export const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            className="w-80 h-[400px] m-2  rounded-lg justify-center px-4 border shadow-lg bg-gray-100 "
            key={index}
          >
            <div className="rounded-2xl p-1 bg-gray-300 h-[200px] w-76 my-3 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-300 h-[17px] w-76 my-3 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-300 h-[17px] w-76 my-3 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-300 h-[17px] w-76 my-3 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-300 h-[17px] w-76 my-3 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-300 h-[17px] w-76 my-3 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-300 h-[17px] w-76 my-3 flex justify-center"></div>
          </div>
        ))}
    </div>
  );
};
