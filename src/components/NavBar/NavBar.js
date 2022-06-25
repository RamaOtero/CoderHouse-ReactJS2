import React from 'react';
import "../../App.css";
import Logo from "../../Assets/hoodie.png";
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className='navBar__Back'>
        <div className='navBar'>
            <div className='navBar__LogoList'>
                <img src={Logo} />
                <ul className='navBar__list'>
                    <li>Home</li>
                    <li>New Arrive</li>
                    <li>About Us</li>
                    <li>Contact</li>
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