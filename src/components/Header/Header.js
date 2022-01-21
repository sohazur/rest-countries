import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="menu">
        <a href="/home">Home</a>
        <a href="/countries">Counries</a>
        <a href="/about-us">About Us</a>
      </nav>
      <p className="subtitle">Visit Us</p>
    </div>
  );
};

export default Header;
