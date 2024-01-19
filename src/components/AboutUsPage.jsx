import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AboutUsPage.module.css';
import Squad from '../assets/squad.webp';

export default function AboutUsPage() {
    return (
        <>
            <Container fluid className="mt-5 mb-5 overflow-hidden">
                <Row>
                    <Col xs={{ span: 12, order: 0 }} xl={{ span: 6, order: 0 }} className="d-flex justify-content-center align-items-center">
                        <Image src={Squad} alt="squad image" className={`${styles['main-img']}`} roundedCircle />
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} xl={{ span: 6, order: 1 }} className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <h2 className={`${styles['section-header']} text-start`}>
                                About Us
                            </h2>
                            <p className={`${styles['section-desc']} text-start`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid repellendus esse accusantium et explicabo assumenda est inventore quis quod! Earum asperiores perspiciatis vero sit architecto eius autem quas fuga.
                            </p>
                            <p className={`${styles['section-desc']} text-start`}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo consequatur culpa perferendis ad fuga animi, totam qui similique? Inventore molestias labore quasi tenetur saepe qui officia? Error, iure quae!
                            </p>
                            <p className={`${styles['section-desc']} text-start`}>
                                <FontAwesomeIcon icon={faCheck} size="1x" style={{ color: "#03045E" }} /> test
                            </p>
                            <p className={`${styles['section-desc']} text-start`}>
                                <FontAwesomeIcon icon={faCheck} size="1x" style={{ color: "#03045E" }} /> test
                            </p>
                            <p className={`${styles['section-desc']} text-start`}>
                                <FontAwesomeIcon icon={faCheck} size="1x" style={{ color: "#03045E" }} /> test
                            </p>
                            <Button variant="primary" className={`${styles['custom-button']}`}>Explore More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}