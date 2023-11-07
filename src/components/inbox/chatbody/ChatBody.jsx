import React from "react";
import ChatHead from './ChatHead'
import Messages from './Messages'
import Options from './Options'

const ChatBody = () => {
  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">
        <ChatHead />
        <Messages />
        <Options />
      </div>
    </div>
  );
};

export default ChatBody;
