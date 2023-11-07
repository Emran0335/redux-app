import React from "react";
import partnerImg from "../../../assets/consulting.png";

const ChatHead = () => {
  return (
    <div className="relatve flex items-center p-3 border-b border-gray-300">
      <img
        src={partnerImg}
        alt="partner image"
        className="object-cover w-12 h-12 rounded-full"
      />
      <span className="block ml-2 font-bold text-gray-600">partnerName</span>
    </div>
  );
};

export default ChatHead;
