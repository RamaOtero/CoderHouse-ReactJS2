import React from 'react';
import "../../App.css";
import Logo from "../../Assets/hoodie.png";
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='navBar__Back'>
        <div className='navBar'>
            <div className='navBar__LogoList'>
                <img src={Logo} />
                <ul className='navBar__list'>
                <Link to="/"> <img className='navBar2__logo' src={Logo} alt="Logo" /> </Link>
                    <Link to="/" className='navBar2__list--link'>Home</Link>
                    <Link to="/news" className='navBar2__list--link' >News</Link>
                    <Link to="/aboutUs" className='navBar2__list--link'>About Us</Link>
                    <Link to="/contact" className='navBar2__list--link'>Contact</Link>
                </ul>
            </div>
            <div className='navBar__Cart'>
                <CartWidget />
            </div>
        </div>
        <div className='navBar__Name'>
            <span>
                PROTOTYPE
            </span>
        </div>
    </div>
  )
}

export default NavBar