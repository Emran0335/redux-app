import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="relative w-full h-[calc(100vh_-197px)] p-6 overflow-y-auto flex flex-col-reverse">
      <ul className="space-y-2">
        <Message />
      </ul>
    </div>
  );
};

export default Messages;
