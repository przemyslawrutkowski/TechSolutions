import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Repairing from '../assets/repairing.webp'
import Optimalization from '../assets/optimalization.webp'
import Malwares from '../assets/malwares.webp'
import Updates from '../assets/updates.webp'
import Recovery from '../assets/recovery.webp'
import Consultation from '../assets/consultation.webp'

import styles from './ServicesPage.module.css'

export default function ServicesPage() {
    return (
        <>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
                <Row>
                    <Col className="text-center">
                        <h2 className={`${styles['section-header']}`}>Most Popular Services</h2>
                    </Col>
                </Row>
                <Row className="gx-5">
                    <Col xl={{ span: 4, order: 0 }} xs={{ span: 12, order: 0 }} className="d-flex flex-column justify-content-center align-items-center">
                        <div className={`${styles['custom-card']}`}>
                            <div className={`${styles['custom-card-header']}`}>
                                <Image src={Repairing} className={`${styles['custom-image']}`} rounded />
                            </div>
                            <div className={`${styles['custom-card-body']}`}>
                                <h5 className={`${styles['custom-card-title']}`}>Fast Service</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    We guarantee swift solutions, ensuring you can get back to using your technology asap.
                                </p>
                            </div>
                        </div>
                        <div className={`${styles['custom-card']}`}>
                            <div className={`${styles['custom-card-header']}`}>
                                <Image src={Recovery} className={`${styles['custom-image']}`} rounded />
                            </div>
                            <div className={`${styles['custom-card-body']}`}>
                                <h5 className={`${styles['custom-card-title']}`}>Warranty</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    Your confidence in our services is crucial. That's why each repair comes with our 1 year warranty.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={{ span: 4, order: 1 }} xs={{ span: 12, order: 1 }} className="d-flex flex-column justify-content-center align-items-center">
                        <div className={`${styles['custom-card']}`}>
                            <div className={`${styles['custom-card-header']}`}>
                                <Image src={Optimalization} className={`${styles['custom-image']}`} rounded />
                            </div>
                            <div className={`${styles['custom-card-body']}`}>
                                <h5 className={`${styles['custom-card-title']}`}>Warranty</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    Your confidence in our services is crucial. That's why each repair comes with our 1 year warranty.
                                </p>
                            </div>
                        </div>
                        <div className={`${styles['custom-card']}`}>
                            <div className={`${styles['custom-card-header']}`}>
                                <Image src={Updates} className={`${styles['custom-image']}`} rounded />
                            </div>
                            <div className={`${styles['custom-card-body']}`}>
                                <h5 className={`${styles['custom-card-title']}`}>Fast Service</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    We guarantee swift solutions, ensuring you can get back to using your technology asap.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={{ span: 4, order: 2 }} xs={{ span: 12, order: 2 }} className="d-flex flex-column justify-content-center align-items-center">
                        <div className={`${styles['custom-card']}`}>
                            <div className={`${styles['custom-card-header']}`}>
                                <Image src={Malwares} className={`${styles['custom-image']}`} rounded />
                            </div>
                            <div className={`${styles['custom-card-body']}`}>
                                <h5 className={`${styles['custom-card-title']}`}>Fast Service</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    We guarantee swift solutions, ensuring you can get back to using your technology asap.
                                </p>
                            </div>
                        </div>
                        <div className={`${styles['custom-card']}`}>
                            <div className={`${styles['custom-card-header']}`}>
                                <Image src={Consultation} className={`${styles['custom-image']}`} rounded />
                            </div>
                            <div className={`${styles['custom-card-body']}`}>
                                <h5 className={`${styles['custom-card-title']}`}>Fast Service</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    We guarantee swift solutions, ensuring you can get back to using your technology asap.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}