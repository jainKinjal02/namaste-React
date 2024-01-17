import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [buttonText , setButton] = useState('Login')
    console.log("header rendered");
    return (
        <div className='header'>
            <div className='logo-conatiner'>
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=> {
                    const btnText = buttonText === 'Login' ? 'Logout' : 'Login';
                        setButton(btnText);
                    }}>{buttonText}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;