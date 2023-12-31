import React from "react";
import Navigation from "../components/inbox/Navigation";
import Sidebar from "../components/inbox/Sidebar";
import Blank from "../components/inbox/chatbody/Blank";
const conversation = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto -mt-1">
        <div className="min-w-full border rounded flex">
          <Sidebar />
          <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
              <Blank />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conversation;
