import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
const Options = () => {
  return (
    <div className="flex items-center justify-between w-full p-3 border-gray-300">
      <input
        type="text"
        placeholder="Message"
        required
        name="message"
        className="block w-full py-2 pl-4 mx-3 bg-gray-100 focus:ring focus:ring-violet-500 rounded-full outline-none focus:text-gray-700"
      />
      <button type="submit">
        <AiOutlineDoubleRight className="w-8 h-8 text-gray-500" />
      </button>
    </div>
  );
};

export default Options;
