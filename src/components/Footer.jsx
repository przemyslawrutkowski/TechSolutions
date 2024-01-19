import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center overflow-hidden">
            <Row className="gx-5">
                <Col xs={12} lg={3}>
                    <div className={`${styles['footer-column']}`}>
                        <h4>TechSolutions</h4>
                        <p>We take pride in delighting our customers with an abundance of options, ensuring satisfaction through choice and flexibility.</p>
                        <div>
                            <Link to="https://www.facebook.com">
                                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#03045E" }} />
                            </Link>
                            <Link to="https://www.twitter.com">
                                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: "#03045E" }} />
                            </Link>
                            <Link to="https://www.instagram.com">
                                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#03045E" }} />
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={3}>
                    <div className={`${styles['footer-column']}`}>
                        <h4>Information</h4>
                        <ul>
                            <li><Link>Career</Link></li>
                            <li><Link>FAQ</Link></li>
                            <li><Link>Blog</Link></li>
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