import React from 'react';
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DashboardNav = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar className="p-5" bg="light"expand={false}>
                <Container fluid>
                    <Navbar.Brand className='fs-1'><Link className='text-dark' to="/home">Coffee Time</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel" className='fs-2'>Coffee Time</Offcanvas.Title>
                            
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <h3>{user.displayName}</h3>
                        <h4>{user.email}</h4>
                        <Button className='fs-4' onClick={logOut} variant="outline-danger">Logout</Button> <br /> <hr />
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link ><Link className='text-dark fs-3' to="payment">Payment</Link></Nav.Link>
                                <Nav.Link ><Link className='text-dark fs-3' to="myorders">My Orders</Link></Nav.Link>
                                
                            </Nav>
                                
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default DashboardNav;