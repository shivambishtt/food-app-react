import React, { useState } from 'react'
import "./LogInPopup.css"
import { assets } from '../../assets/assets'

function LogInPopup({setShowLogin}) {
    const [currentState, setCurrentState] = useState("SignUp")
    return (
        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
            </form>
        </div>
    )
}

export default LogInPopup
