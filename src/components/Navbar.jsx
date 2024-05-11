import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-purple-600 text-white py-9">
      <div className="log">
        <span className="font-bold text-xl mx-8"> taskIt </span>
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
