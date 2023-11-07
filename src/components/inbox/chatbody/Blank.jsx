import React from "react";
import blankImg from "../../../assets/dev-ed-wave.png";

const Blank = () => {
  return (
    <div className="h-[calc(100vh_-_129px)] flex md:flex-col md:space-y-4 items-center justify-center text-gray-700">
      <img
        src={blankImg}
        alt="blank image"
        className="h-10 w-10 hidden md:block object-cover rounded-full"
      />
      <div>No messages found yet!</div>
    </div>
  );
};

export default Blank;
