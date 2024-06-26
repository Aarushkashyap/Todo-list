import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-blue-600 text-white py-9">
      <div className="log">
        <span className="font-bold text-2xl mx-8"> TaskIt </span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold trainsion-all">
          Your Tasks
        </li>
        <li className="cursor-pointer hover:font-bold trainsion-all">Home</li>
      </ul>
    </nav>
  );
};

export default Navbar;
