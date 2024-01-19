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
            <Container fluid className="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center overflow-hidden">
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
                                <h5 className={`${styles['custom-card-title']}`}>Hardware Repair and Maintenance</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    Diagnosing and repairing hardware issues.
                                </p>
                            </div>
                        </div>
                        <div className={`${styles['custom-card']}`}>
                            <div className={`${styles['custom-card-header']}`}>
                                <Image src={Recovery} className={`${styles['custom-image']}`} rounded />
                            </div>
                            <div className={`${styles['custom-card-body']}`}>
                                <h5 className={`${styles['custom-card-title']}`}>Operating System Optimization</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    Optimizing operating system settings for better performance.
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
                                <h5 className={`${styles['custom-card-title']}`}>Malware and Virus Removal</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    Scanning and removing malicious software.
                                </p>
                            </div>
                        </div>
                        <div className={`${styles['custom-card']}`}>
                            <div className={`${styles['custom-card-header']}`}>
                                <Image src={Updates} className={`${styles['custom-image']}`} rounded />
                            </div>
                            <div className={`${styles['custom-card-body']}`}>
                                <h5 className={`${styles['custom-card-title']}`}>Data Recovery</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    Retrieving lost data after hardware failure or accidental deletion.
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
                                <h5 className={`${styles['custom-card-title']}`}>Hardware and Software Updates</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    Installing the latest updates for the operating system.
                                </p>
                            </div>
                        </div>
                        <div className={`${styles['custom-card']}`}>
                            <div className={`${styles['custom-card-header']}`}>
                                <Image src={Consultation} className={`${styles['custom-image']}`} rounded />
                            </div>
                            <div className={`${styles['custom-card-body']}`}>
                                <h5 className={`${styles['custom-card-title']}`}>Technical Support and Consultation</h5>
                                <p className={`${styles['custom-card-text']}`}>
                                    Telephone and remote technical support for clients.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}