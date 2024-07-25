import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-300 ">
    
      <Link to="/">
        Book
      </Link>
      <Link to="/character">
        Character
      </Link>

      <Link to="/spell">
    Spell</Link>

      <Link to="/houses">
      Houses
      </Link>
    </div>
  );
}

export default Navbar;
