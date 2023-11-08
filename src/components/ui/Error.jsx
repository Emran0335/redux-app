import React from "react";

const Error = ({ message }) => {
  return (
    <div className="w-full py-3 px-2 bg-red-300 rounded-md">
      <p>{message}</p>
    </div>
  );
};

export default Error;
