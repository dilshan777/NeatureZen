import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <footer className='footer-section'>
                <p>&copy; 2024 NatureZen. All rights reserved.</p>
                <div className='footer-links'>
                    <a href='/terms'>Terms of Services</a>
                    <a href='/privacy'>Privacy Policy</a>
                </div>
            </footer>
    );
};
export default Footer;