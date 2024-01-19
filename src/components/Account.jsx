import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Account.module.css';

export default function Account() {
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const handleShowAddressModal = () => setShowAddressModal(true);
    const handleCloseAddressModal = () => setShowAddressModal(false);

    const handleShowDetailsModal = () => setShowDetailsModal(true);
    const handleCloseDetailsModal = () => setShowDetailsModal(false);

    return (
        <Container className="overflow-hidden">
            <Row className="g-3">
                <Col xs={12} md={6}>
                    <h3 className={styles.sectionHeader}>Account Details</h3>
                    <Card>
                        <Card.Body>
                            <p><b>Email Adress:</b> test@gmail.com</p>
                            <p><b>Full Name:</b> Janusz Kiep</p>
                            <p><b>Phone Number:</b> 997</p>
                            <Link className={styles.link} onClick={handleShowDetailsModal}>Edit Details</Link>
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
                                <Button variant="primary">
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
                            <p><b>Adress: </b><br />
                                123 Secondary Street<br />
                                Cityville, State 12345
                            </p>
                            <p><b>Phone Number:</b> 997</p>
                            <p><b>Email Adress:</b> test@gmail.com</p>
                            <Link className={styles.link} onClick={handleShowAddressModal}>Edit Address Details</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showDetailsModal} onHide={handleCloseDetailsModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value="test@gmail.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTextFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" value="Janusz Kiep" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTextPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" value="997" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetailsModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseDetailsModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showAddressModal} onHide={handleCloseAddressModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Address Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTextFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" value="Janusz Kiep" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTextAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" value="123 Secondary Street, Cityville, State 12345" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTextPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" value="997" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value="test@gmail.com" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddressModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseAddressModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
