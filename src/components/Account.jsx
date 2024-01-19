import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Account.module.css';

export default function Account() {
    return (
        <Container className="overflow-hidden">
            <Row>
                <Col xs={12} md={6}>
                    <h3 className={styles.sectionHeader}>Account Details</h3>
                    <Card>
                        <Card.Body>
                            <p><b>Email Adress:</b> test@gmail.com</p>
                            <p><b>Full Name:</b> Janusz Kiep</p>
                            <p><b>Phone Number:</b> 997</p>
                            <Link to="/" className={styles.link}>Edit Details</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <h3 className={styles.sectionHeader}>Change Password</h3>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-2" controlId="currentPassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter current password" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="newPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter new password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Change Password
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={12}>
                    <h3 className={styles.sectionHeader}>Delivery Address</h3>
                    <Card>
                        <Card.Body>
                            <p><b>Full Name:</b> Janusz Kiep</p>
                            <p><b>Full Adress: </b><br />
                                123 Secondary Street<br />
                                Cityville, State 12345
                            </p>
                            <p><b>Phone Number:</b> 997</p>
                            <p><b>Email Adress:</b> test@gmail.com</p>
                            <Link to="/" className={styles.link}>Edit Address Details</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
