import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { scroller } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AboutUsPage.module.css';
import Squad from '../assets/squad.webp';

export default function AboutUsPage() {
    const options = {
        duration: 250,
        smooth: true,
    };

    const handleScrollToSection = async (section) => {
        scroller.scrollTo(section, options);
    };

    return (
        <>
            <Container fluid className="mt-5 mb-5 overflow-hidden">
                <Row>
                    <Col xs={{ span: 12, order: 0 }} xl={{ span: 6, order: 0 }} className="d-flex justify-content-center align-items-center">
                        <Image src={Squad} alt="squad image" className={`${styles['main-img']}`} roundedCircle />
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} xl={{ span: 6, order: 1 }} className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <h2 className={`${styles['section-header']}`}>
                                About Us
                            </h2>
                            <p className={`${styles['section-desc']} text-start`}>
                                Welcome to our cutting-edge computer services! At TechSolutions, we take pride in providing top-notch solutions to meet all your IT needs.
                            </p>
                            <p className={`${styles['section-desc']} text-start`}>
                                With a team of highly skilled professionals, we offer a wide range of services including computer repairs, software installations, network setups, and much more. Our mission is to ensure your technology runs seamlessly, allowing you to focus on what matters most to you.
                            </p>
                            <p className={`${styles['section-desc']} text-start`}>
                                <FontAwesomeIcon icon={faCheck} size="1x" style={{ color: "#03045E" }} /> Certified technicians with years of experience.
                            </p>
                            <p className={`${styles['section-desc']} text-start`}>
                                <FontAwesomeIcon icon={faCheck} size="1x" style={{ color: "#03045E" }} /> Quick and reliable computer repair services.
                            </p>
                            <p className={`${styles['section-desc']} text-start`}>
                                <FontAwesomeIcon icon={faCheck} size="1x" style={{ color: "#03045E" }} /> Affordable and transparent pricing.
                            </p>
                            <Button onClick={() => { handleScrollToSection("services") }} variant="primary" className={`${styles['custom-button']}`}>Explore More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}