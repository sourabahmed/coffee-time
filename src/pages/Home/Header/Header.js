
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "./Header.css";
import useAuth from "../../../hooks/useAuth";


const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar className="p-5 fs-2" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fs-1" href="#home"><Link className="text-light" to="/">Coffee Time</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link className="text-white" to="/home">Home</Link></Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#gallery">Gallery</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user.email? <Nav.Link ><Link className="text-light" to="/dashboard">Dashboard</Link></Nav.Link>: " "
                            }
                            <Nav.Link className="text-danger">{user.displayName}</Nav.Link>
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