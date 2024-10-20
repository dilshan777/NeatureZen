import React from "react";
import { useNavigate } from "react-router-dom";
import './Homepage.css';
import Header from "./Header";


const Homepage = () => {

    const navigate = useNavigate();

    const handleStatSesion = () => {
        navigate('/startpage');
    };
    return (

        <div className="home_div">
           <Header />
            <div className="midbody">
                <p>
                    <h1 className="h1">Welcome to NaturaZen</h1>
                    Experience the ultimate in relaxation and streass relies with our smart relaxation pod.
                    {/*start button */}
                    <div className="startbtn">
                        {/*<link to="#">*/}
                        <button className="stbtn"  onClick={handleStatSesion}><span>Start session</span></button>
                        {/*</link>*/}
                        <p>Begin your personalized relaxation session.</p>
                    </div>
                    {/*customize environment */}
                    <div className="cusebtn">
                        {/*<link to="#">*/}
                        <button className="cetbtn"><span>Customize environment</span></button>
                        {/*</link>*/}
                        <p>Adjust lighting, audio and aroma settings.</p>
                    </div>
                    {/* Picture Section */}
                    <div className='pic-sectionh'>
                        <img src='pic.png' alt='pic' className='pich' />
                    </div>
                </p>

            </div>
           
        </div>


    );
};
export default Homepage;