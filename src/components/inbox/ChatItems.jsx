import React from "react";
import { Link } from "react-router-dom";
import ChatItem from "./ChatItem";

const ChatItems = () => {
  return (
    <Link to="/inbox">
      <ChatItem />
    </Link>
  );
};

export default ChatItems;
