import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import styles from './HomePage.module.css'
import MainImage from '../assets/main-image.webp'

export default function HomePage() {
    return (
        <>
            <Container fluid className="d-flex justify-content-center align-items-center overflow-hidden">
                <Row className="gx-5">
                    <Col xs={{ span: 12, order: 1 }} xl={{ span: 6, order: 0 }} className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <h1 className={`${styles['introduction-text']} ${styles['text-start']}`}>
                                Seamless solutions, <br />Superior Service
                            </h1>
                            <p className={`${styles['sub-text']} ${styles['text-start']}`}>We take pride in delighting our customers with an abundance of options, <br />ensuring satisfaction through choice and flexibility</p>
                            <Button variant="primary" className={`${styles['custom-button']}`}>Get Started</Button>
                        </div>
                    </Col>
                    <Col xs={{ span: 12, order: 0 }} xl={{ span: 6, order: 1 }} className="d-flex justify-content-center align-items-center">
                        <Image src={MainImage} alt="Main service image" className={`${styles['main-img']}`} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
