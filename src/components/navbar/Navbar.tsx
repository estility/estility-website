import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the icon
import "./navbar.css";
import logo from '../../assets/logo.svg'
const Navbar = () => {
  // State to track menu visibility
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="nav plain-background">
      <div className="estility-logo">
        <img src={logo} alt='logo'/>
        <div className="dark-color">ESTILITY</div>
      </div>
      {/* Toggle button for small screens */}
      
      {/* Menu NavLinks */}
      <ul className={`menu ${isMenuVisible ? "show" : ""}`}>
        <div className="mobile-toggle">
      <div className="estility-logo small-header">
        <img src={logo} alt='logo'/>
        <div className="dark-color">ESTILITY</div>
      </div>
      {isMenuVisible ? <FaTimes className="close-menu" onClick={toggleMenu} /> : null}
      </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/vendors">Vendors</NavLink>
        {isMenuVisible ? <button className="small-menu-demo violet-color">Request A Demo</button> : null}
      </ul>
      <button className="show-demo violet-background plain-color">Get a Demo</button>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
