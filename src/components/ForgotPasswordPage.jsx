import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import styles from './ForgotPasswordPage.module.css';
import ForgotPass from '../assets/forgot-password.png';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <Container fluid className="mt-5 mb-5 overflow-hidden">
            <Row>
                <Col xs={{ span: 12, order: 0 }} xl={{ span: 6, order: 0 }} className="d-flex justify-content-center align-items-center">
                    <Image src={ForgotPass} alt="forgot password related image" className={`${styles['main-img']}`} roundedCircle />
                </Col>
                <Col xs={{ span: 12, order: 1 }} xl={{ span: 6, order: 1 }} className="d-flex flex-column justify-content-center align-items-center">
                    <h2 className={`${styles['section-header']} text-center`}>
                        Forgot Password?
                    </h2>
                    <Form className={styles['forgot-password-form']}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll send instructions to this email if it is associated with an account.
                            </Form.Text>
                        </Form.Group>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <Button variant="primary" className={`${styles['custom-button']}`}>
                                Submit
                            </Button>
                        </div>
                        <p className={styles['login-text']}>
                            Don't want to recover your password? <Link to="/login" className={styles['login-link']}>Sign In</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;