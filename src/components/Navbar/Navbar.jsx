import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom'

function Navbar({ setShowLogin }) {
    // So we have to write the logic for the state that when we will click on the next li so the value of set items should upate and the active class should be applied to it 
    //So what we can do to achieve this is we will simply create onClick method on li elements then we will update the state
    const [items, setItems] = useState("Home")

    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo} alt="" srcSet="" />
            <ul className="navbar-items">
                <Link to='/' onClick={() => setItems("Home")} className={items === "Home" ? "active" : ""}>Home</Link>
                <a href='#menu' onClick={() => setItems("Menu")} className={items === "Menu" ? "active" : ""}>Menu</a>
                <a href='#' onClick={() => setItems("Mobile App")} className={items === "Mobile App" ? "active" : ""}>Mobile App</a>
                <a href='#footer' onClick={() => setItems("Contact Us")} className={items === "Contact Us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" srcSet="" />
                <div className="navbar-search">
                    <img src={assets.basket_icon} alt="" srcSet="" />
                    <div className="dot"></div>
                </div>
                <button onClick={() => setShowLogin((prev) => {
                    return !prev
                })} >Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
