import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import "./Header.css";


const Header = () => {

    const { user, logOut } = useFirebase();

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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <a href="services">services</a>
                        </li>
                        <li>
                            <a href="services">Contacts</a>
                        </li>
                        <li>
                            <a href="dashboard">Dashboard</a>
                        </li>
                        {
                            user.email ? <button onClick={logOut} className="btn btn-danger">Logout</button>:
                                        <li>
                                            <Link to="/login">Login</Link>
                                        </li>
                                         
                        }
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="/">{user.displayName}</a>
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