import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/manga-card">Manga Card</Link>
      <Link to="/reading-list">Reading List</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};

export default NavBar;
