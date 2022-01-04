import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import useFirebase from "../../../hooks/useFirebase";
import "./Header.css";


const Header = () => {

    const { user, logOut } = useFirebase();

    return (
        <>
            <Navbar className="p-5 fs-2" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fs-1" href="#home"><Link className="text-light" to="/home">Coffee Time</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"><Link className="text-white" to="/home">Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Dashboard</Nav.Link>
                            <Nav.Link href="#deets">Hello, {user.displayName}</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user.email?<Button className="fs-3" onClick={logOut} variant="outline-danger">LogOut</Button> :<Link to="/login"><Button className="fs-3" variant="outline-danger">Login</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;