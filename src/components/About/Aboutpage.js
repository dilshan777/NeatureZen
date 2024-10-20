import React from "react";
import './Aboutpage.css';

import Header from "./Header";

const Aboutpage = () => {
    return (
        <div className="about1">
            <div className="about2">
                <Header />
                <div className="about">
                    <div className="about_cont">
                        <div className="about_text">
                            <p><h2>About Naturazen</h2>

                                NaturaZen is cutting-edge solution designed to help individuals manage stress and enhance their overall well-being. Our innovative smart relaxation pod combines traditional meditation techniques with advanced technology to create a personalized, adaptive stress relief environment.</p>

                            <p> <h2>Our Mission</h2>

                                At NaturaZen, our mission is to provide accessible, effective stress management solutions. We believe that everyone deserves to live a life free from the adverse effects of stress, and we are committed to helping our users achieve this through our state-of-the-art technology and holistic approach. </p>

                            <p><h2>Contact Us</h2>

                                If you have any questions or would like to learn more about NaturaZen, please feel free to contact us at:

                                Email:support@naturazen.com</p>
                            <p>Phone: +94767111475</p>

                        </div>
                        {/* Picture Section */}
                        <div className='pic-sectiona'>
                            <img src='pic.png' alt='pic' className='pica' />
                        </div>
                    </div>
                </div>
            </div>













            {/* Footer Section */}
            <footer className='footer-section'>
                <p>&copy; 2024 NatureZen. All rights reserved.</p>
                <div className='footer-links'>
                    <a href='/terms'>Terms of Services</a>
                    <a href='/privacy'>Privacy Policy</a>
                </div>
            </footer>
        </div>
    );
};
export default Aboutpage;