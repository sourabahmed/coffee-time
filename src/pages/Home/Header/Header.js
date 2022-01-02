import React, { useState } from "react";
import { a, Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <h2>
                        <span>S</span>ourab
                    </h2>
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="about">about</a>
                        </li>
                        <li>
                            <a href="services">services</a>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a
                                href="/"
                                target="_blank">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                target="_blank">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                        </li>
                       
                        <li>
                            <Link to="/login"><button className="btn btn-danger ms-5">Login</button></Link>
                        </li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <span onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <span><i className="fas fa-bars"></i></span>
                        </span>
                    </div>
                </div>
            </nav>

            {/* hero section  */}
            {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
        </>
    );
};

export default Header;