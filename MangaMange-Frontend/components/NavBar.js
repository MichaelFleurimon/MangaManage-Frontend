import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/reading-list">Reading List</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};

export default Navbar;