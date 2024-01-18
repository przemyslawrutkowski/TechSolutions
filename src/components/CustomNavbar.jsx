import React, { useState, useEffect } from 'react';
import { animateScroll, scroller } from 'react-scroll';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styles from './CustomNavbar.module.css';
import { useAuth } from './AuthContext';

const CustomNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const options = {
        duration: 250,
        smooth: true,
    };

    const handleScrollToSection = async (section) => {
        await navigate('/');
        scroller.scrollTo(section, options);
    };

    const handleScrollToTop = () => {
        animateScroll.scrollToTop(options);
    };

    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { isLoggedIn, setIsLoggedIn } = useAuth();

    useEffect(() => {
        const path = location.pathname.split('/')[1];
        setActiveSection(path || 'home');
    }, [location.pathname]);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <label className={styles.logo}>TechSolutions</label>
                <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
                <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ""}`}>
                    <li>
                        <Link to="/" onClick={() => { handleScrollToTop(); handleMenuItemClick() }} className={`${styles.customLink} ${activeSection === "home" ? styles.active : ""}`}>Home</Link>
                    </li>
                    <li>
                        <a onClick={() => { handleScrollToSection("about"); handleMenuItemClick() }} className={`${styles.customLink} ${activeSection === "about" ? styles.active : ""}`}>About</a>
                    </li>
                    <li>
                        <a onClick={() => { handleScrollToSection("services"); handleMenuItemClick() }} className={`${styles.customLink} ${activeSection === "services" ? styles.active : ""}`}>Services</a>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => { handleMenuItemClick() }} className={`${styles.customLink} ${activeSection === "contact" ? styles.active : ""}`}>Contact</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/dashboard" onClick={() => { handleMenuItemClick() }} className={`${styles.customLink} ${activeSection === "dashboard" ? styles.active : ""}`}>Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/login" onClick={() => { handleLogout(); handleMenuItemClick() }} className={`${styles.customLink}`}>Log out</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" onClick={() => { handleMenuItemClick() }} className={`${styles.customLink} ${activeSection === "login" ? styles.active : ""}`}>Sign In</Link>
                            </li>
                            <li>
                                <Link to="/register" onClick={() => { handleMenuItemClick() }} className={`${styles.customLink} ${activeSection === "register" ? styles.active : ""}`}>Sign Up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav >
    );
};

export default CustomNavbar;
