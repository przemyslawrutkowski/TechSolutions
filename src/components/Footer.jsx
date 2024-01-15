import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center overflow-hidden">
            <Row className="gx-5">
                <Col xs={12} lg={3}>
                    <div className={`${styles['footer-column']}`}>
                        <h4>TechSolutions</h4>
                        <p>We take pride in delighting our customers with an abundance of options, ensuring satisfaction through choice and flexibility.</p>
                        <div className={`${styles['social-icons']}`}>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#03045E" }} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: "#03045E" }} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#03045E" }} />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                    <div className={`${styles['footer-column']}`}>
                        <h4>Information</h4>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/career">Career</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact-form">Contact Form</a></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                    <div className={`${styles['footer-column']}`}>
                        <h4>Contact Us</h4>
                        <p><FontAwesomeIcon icon={faPhone} size="1x" style={{ color: "#03045E" }} /> Phone: (555) 123-4567</p>
                        <p><FontAwesomeIcon icon={faEnvelope} size="1x" style={{ color: "#03045E" }} /> Email: info@yourcomputerservice.com</p>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                    <div className={`${styles['footer-column']}`}>
                        <h4>Meet Us</h4>
                        <p><FontAwesomeIcon icon={faLocationDot} size="1x" style={{ color: "#03045E" }} /> 123 Main Street<br />Cityville, State 12345</p>
                        <p><FontAwesomeIcon icon={faCalendar} size="1x" style={{ color: "#03045E" }} /> <b>Monday to Friday:</b><br />
                            9:00 AM - 5:00 PM<br />
                            <b>Saturday:</b><br />
                            10:00 AM - 2:00 PM<br />
                            <b>Sunday:</b><br />
                            Closed</p>
                    </div>
                </Col>
            </Row>
        </Container>);
}