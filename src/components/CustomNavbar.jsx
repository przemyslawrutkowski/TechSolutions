import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { animateScroll, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoipsum-298.svg';

import styles from './CustomNavbar.module.css';

const CustomNavbar = () => {
    const options = {
        duration: 250,
        smooth: true,
    };

    const navigate = useNavigate();

    const handleScrollToSection = async (section) => {
        await navigate('/');
        scroller.scrollTo(section, options);
    };

    const handleScrollToTop = () => {
        animateScroll.scrollToTop(options);
    };

    return (
        <Navbar expand="md" className="bg-body-tertiary" sticky="top">
            <Navbar.Brand onClick={() => handleScrollToSection("home")}>
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
                    <LinkContainer to="/">
                        <Nav.Link onClick={() => handleScrollToTop()}>Home</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={async () => await handleScrollToSection("about")}>About</Nav.Link>
                    <Nav.Link onClick={async () => await handleScrollToSection("services")}>Service</Nav.Link>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Sign In</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                        <Nav.Link>Sign Up</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
