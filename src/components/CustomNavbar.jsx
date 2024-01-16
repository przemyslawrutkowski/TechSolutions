import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { animateScroll, scroller, Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoipsum-298.svg';

import styles from './CustomNavbar.module.css';
import { useAuth } from './AuthContext';

const CustomNavbar = () => {
    const navigate = useNavigate();

    const options = {
        duration: 250,
        smooth: true,
    };

    const handleScrollToSection = async (section) => {
        setActiveSection(section);
        await navigate('/');
        scroller.scrollTo(section, options);
    };

    const handleScrollToTop = () => {
        animateScroll.scrollToTop(options);
        setActiveSection("home");
    };

    const [activeSection, setActiveSection] = useState("home");

    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <Navbar expand="md" className="bg-body-tertiary" sticky="top">
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
                    <LinkContainer to="/">
                        <Nav.Link onClick={handleScrollToTop} active={activeSection === "home"}>Home</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={async () => await handleScrollToSection("about")} active={activeSection === "about"}>About</Nav.Link>
                    <Nav.Link onClick={async () => await handleScrollToSection("services")} active={activeSection === "services"}>Service</Nav.Link>
                    <LinkContainer to="/contact">
                        <Nav.Link onClick={() => setActiveSection("contact")} active={activeSection === "contact"}>Contact</Nav.Link>
                    </LinkContainer>
                    {isLoggedIn ? (
                        <>
                            <LinkContainer to="/dashboard">
                                <Nav.Link>Dashboard</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
                            </LinkContainer>
                        </>
                    ) : (
                        <>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
