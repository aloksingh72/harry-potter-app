import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white  top-0 w-full shadow-lg z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="flex space-x-4">
        <Link to="/" className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out">
          Book
        </Link>
        <Link to="/character" className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out">
          Character
        </Link>
        <Link to="/spell" className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out">
          Spell
        </Link>
        <Link to="/houses" className="text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out">
          Houses
        </Link>
      </div>
     
    </div>
  </div>
  );
}

export default Navbar;
