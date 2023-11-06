import React from "react";

export const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            className="w-80 h-[400px] m-2  rounded-lg justify-center px-2 border shadow-lg bg-gray-200 "
            key={index}
          >
            <div className="rounded-2xl p-1 bg-gray-400 h-[400px] w-76 my-4 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-400 h-[20px] w-76 my-4 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-400 h-[20px] w-76 my-4 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-400 h-[20px] w-76 my-4 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-400 h-[20px] w-76 my-4 flex justify-center"></div>
            <div className="rounded-2xl p-1 bg-gray-400 h-[20px] w-76 my-4 flex justify-center"></div>
          </div>
        ))}
    </div>
  );
};
