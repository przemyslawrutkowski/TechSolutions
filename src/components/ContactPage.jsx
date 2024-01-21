import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Envelope from '../assets/envelope.png';
import Form from 'react-bootstrap/Form';

import styles from './ContactPage.module.css';

export default function ContactPage() {
    return (
        <Container fluid className="mt-5 mb-5 overflow-hidden">
            <Row>
                <Col xs={{ span: 12, order: 0 }} xl={{ span: 6, order: 0 }} className="d-flex justify-content-center align-items-center">
                    <Image src={Envelope} alt="envelope image" className={`${styles['main-img']}`} roundedCircle />
                </Col>
                <Col xs={{ span: 12, order: 1 }} xl={{ span: 6, order: 1 }} className="d-flex flex-column justify-content-center align-items-center">
                    <h2 className={`${styles['section-header']}`}>
                        Contact Us
                    </h2>

                    <Form className={styles['contact-form']}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Question</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="What would you like to find out?" />
                        </Form.Group>

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <Button variant="primary" className={`${styles['custom-button']}`}>
                                Send Message
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}