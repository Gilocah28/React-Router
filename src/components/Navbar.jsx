import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>LOGO</h1>
      </div>

      <div className="navbar__links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="contact" className="link">
          Contact
        </Link>
        <Link to="about" className="link">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
