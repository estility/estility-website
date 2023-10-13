import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from '../../assets/logo.svg'
const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="nav plain-background">
      <Link to='/' className="estility-logo">
        <img src={logo} alt='logo'/>
        <div className="dark-color rosario-font">ESTILITY</div>
      </Link>
      
      <ul className={`menu ${isMenuVisible ? "show" : ""}`}>
        <div className="mobile-toggle">
      <div className="estility-logo small-header">
        <img src={logo} alt='logo'/>
        <div className="dark-color rosario-font">ESTILITY</div>
      </div>
      {isMenuVisible ? <FaTimes className="close-menu" onClick={toggleMenu} /> : null}
      </div>
        <NavLink className='rosario-font' to="/">Home</NavLink>
        <NavLink className='rosario-font' to="/contact">Contact</NavLink>
        <NavLink className='rosario-font' to="/about-us">About Us</NavLink>
        <NavLink className='rosario-font' to="/products">Products</NavLink>
        <NavLink className='rosario-font' to="/vendors">Vendors</NavLink>
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
