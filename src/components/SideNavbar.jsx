import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

import styles from './SideNavbar.module.css';

export default function SideNavbar() {
    const location = useLocation();

    const [activeSection, setActiveSection] = useState("orders");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const path = location.pathname.split('/')[2];
        setActiveSection(path || 'orders');
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.sideNavbar}>
            <div className={styles.sideNavbarContainer}>
                <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
                <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ""}`}>
                    <li>
                        <Link onClick={() => { setIsMenuOpen(false); setActiveSection("details") }} to="/dashboard/details" className={`${styles.customLink} ${activeSection === "details" ? styles.active : ""}`}>
                            <FontAwesomeIcon icon={faUser} size="1x" style={{ color: "#FFFFFF" }} />
                            {" "}
                            Account
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => { setIsMenuOpen(false); setActiveSection("orders") }} to="/dashboard/orders" className={`${styles.customLink} ${activeSection === "orders" ? styles.active : ""}`}>
                            <FontAwesomeIcon icon={faCartShopping} size="1x" style={{ color: "#FFFFFF" }} />
                            {" "}
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => { setIsMenuOpen(false); setActiveSection("opinions") }} to="/dashboard/opinions" className={`${styles.customLink} ${activeSection === "opinions" ? styles.active : ""}`}>
                            <FontAwesomeIcon icon={faComment} size="1x" style={{ color: "#FFFFFF" }} />
                            {" "}
                            Opinions
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => { setIsMenuOpen(false); setActiveSection("support") }} to="/dashboard/support" className={`${styles.customLink} ${activeSection === "support" ? styles.active : ""}`}>
                            <FontAwesomeIcon icon={faHeadset} size="1x" style={{ color: "#FFFFFF" }} />
                            {" "}
                            Support
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
