import React from "react";
import { Link } from "react-router-dom";
import emranImage from "../../assets/emran1.jpg";
const Navigation = () => {
  return (
    <nav className="sticky top-0 z-40 border-b bg-violet-700 transition-colors px-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center">
          <Link to="/">
            <img
              src={emranImage}
              alt="emran's image"
              className="h-10 rounded-full object-cover"
            />
          </Link>
          <ul>
            <li className="text-white">
              <span className="cursor-pointer">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
