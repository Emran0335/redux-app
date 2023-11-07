import React, { useState } from "react";
import Model from "./Model";
import ChatItems from "./ChatItems";
import {FaEdit} from 'react-icons/fa'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="w-[100px] border border-t-0 border-gray-300 lg:col-span-1 md:w-full">
      <div className="h-[65px] text-center text-gray-500 p-4 border-b border-gray-300 flex md:justify-end justify-center">
        <FaEdit className="w-5 h-5 text-gray-500 cursor-pointer"/>
      </div>
      <div className="overflow-auto h-[calc(100vh_-_129px)]">
        <ChatItems />
      </div>
      <Model open={open} control={setOpen}/>
    </div>
  );
};

export default Sidebar;
