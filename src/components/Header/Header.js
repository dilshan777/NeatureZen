import React from "react";
import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
    return (

        < header className="header" >
            <div className="logo_section">
                <img src="logo.png" alt="logo" className="logo" />
            </div>
            <nav className="nav_sec">
                <ul className="navlinks">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/myhistory">My History</Link></li>
                    <li><Link to="/startpage">Start Session</Link></li>
                    <li><Link to="/Aboutpage">About</Link></li>
                </ul>
            </nav>
        </header >
    );
};
export default Header;