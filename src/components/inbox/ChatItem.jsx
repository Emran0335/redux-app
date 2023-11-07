import React from "react";
import designImg from "../../assets/design.png";

const ChatItem = () => {
  return (
    <div className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
      <img
        src={designImg}
        alt="chat image"
        className="object-cover h-10 w-10 rounded-full"
      />
      <div className="w-full pb-2 hidden md:block">
        <div className="flex justify-between">
          <span className="block ml-2 font-semibold text-gray-600">Name</span>
          <span className="block ml-2 text-sm text-gray-600">LastTime</span>
        </div>
        <span className="block ml-2 text-sm text-gray-600">LastMessage</span>
      </div>
    </div>
  );
};

export default ChatItem;
