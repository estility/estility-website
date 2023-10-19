import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from '../../assets/logo.svg'
import { useDisplayForm } from "../../hooks/hook";
import { useDispatch, useSelector } from "react-redux";
import { showForm } from "../../redux/reducers/display-form-reducer";

interface OpenFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen:boolean) => void;
}
const Navbar = () => {
  const dispatch = useDispatch();
  const display = useSelector((state: any) => state?.displayForm);
 
  const [isMenuVisible, setIsMenuVisible] = useState(false);

const toggle = () => {
  dispatch(showForm())
}

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
        <NavLink className='rosario-font' to="/about-us">About Us</NavLink>
        <NavLink className='rosario-font' to="/products">Products</NavLink>
        <NavLink className='rosario-font' to="/vendors">Vendors</NavLink>
        <NavLink className='rosario-font' to="/contact">Contact</NavLink>
        {/* {isMenuVisible ? <button onClick={() => setIsOpen(true)} className="small-menu-demo violet-color">Request A Demo</button> : null} */}
        {isMenuVisible ? <button onClick={toggle} className="small-menu-demo violet-color">Request A Demo</button> : null}
      </ul>
      <button onClick={toggle} className="show-demo violet-background plain-color">Get a Demo</button>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
