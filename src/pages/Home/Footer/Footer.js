import React from "react";
import './Footer.css';
import logo from '../../../images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faAddressBook, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com';
import { Form } from "react-bootstrap";

const Footer = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_re586ir', 'my_template', e.target, 'user_4UooSEKu8rQ9ersXezf6h')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };
    return (
        <div id="contact">
            <div className="footer d-flex flex-column align-items-center pt-5" style={{ backgroundColor: "#eceae3" }}>
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
                            <h1 className="pt-4">Get in Touch</h1>
                            <div className="links d-flex justify-content-start mt-4 ms-5">
                                <div className="link">
                                    <p><FontAwesomeIcon icon={faPhone} size="2x" />&emsp;+8801533333333</p>
                                    <p><FontAwesomeIcon icon={faMailBulk} size="2x" />&emsp;info@coffetime.com</p>
                                    <p><FontAwesomeIcon icon={faAddressBook} size="2x" />&emsp;72, Wall street, King Road, Dhaka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-50 mx-auto mb-5">
                        <h1 className="mt-3 mb-2 text-center" style={{ color: "#331a15", fontWeight: "bold", textShadow: "none" }}>Connect with Us</h1>
                        <Form onSubmit={sendEmail}>
                            <div className="pt-4 mx-auto">
                                <div className="mx-auto form-group">
                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="pt-2 mx-auto form-group">
                                    <input type="email" className="form-control" placeholder="Your email" name="email" />
                                </div>
                                <div className="pt-2 mx-auto form-group">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="pt-2 mx-auto form-group">
                                    <textarea className="form-control" cols="30" rows="5" placeholder="Message" name="message" />
                                </div>
                                <div className="pt-3 mx-auto form-group">
                                    <input type="submit" className="btn2 rounded-pill mb-2" value="Send Message" />
                                </div>

                            </div>
                        </Form>
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