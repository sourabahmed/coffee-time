import React from "react";
import './Footer.css';
import logo from '../../images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faAddressBook, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="footer d-flex flex-column align-items-center py-5" style={{ backgroundColor: "#eceae3" }}>
                <div className="container">
                    <div className="row py-5">

                        <div className="col-12 col-md-6">
                            <div className="d-flex justify-content-start"><img src={logo} style={{ height: "80px" }} alt="" /></div>
                            <h1>Coffee Time</h1>
                            <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <div className="links d-flex justify-content-start">
                                <div className="link">
                                    <a href="https://web.facebook.com/" className="me-4" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                    <a href="https://twitter.com/" className="me-4" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                                    <a href="https://www.instagram.com/" className="me-4" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                                    <a href="https://www.linkedin.com/" className="me-4" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <h1>Get in Touch</h1>
                            <div className="links d-flex justify-content-start mt-4 ms-5">
                                <div className="link">
                                    <p><FontAwesomeIcon icon={faPhone} size="2x" />&emsp;+8801533333333</p>
                                    <p><FontAwesomeIcon icon={faMailBulk} size="2x" />&emsp;info@coffetime.com</p>
                                    <p><FontAwesomeIcon icon={faAddressBook} size="2x" />&emsp;72, Wall street, King Road, Dhaka</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-2" style={{ color: "#eceae3", backgroundColor: "#331a15" }}>
                <small className="copyright">© Copyright Coffee Time | All Rights Reserved.</small>
            </div>

        </div>
    );
}

export default Footer;