import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logoipsum-298.svg';
import styles from './CustomNavbar.module.css'

export default function CustomNavbar() {
    return (
        <>
            <Navbar expand="md" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        TechSolutions
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Services">Services</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                            <Nav.Link href="#SignIn">Sign In</Nav.Link>
                            <Nav.Link href="#SignUp">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}