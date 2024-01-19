import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

import styles from './Orders.module.css'

const ordersData = [
    {
        id: 1,
        orderNumber: 'ORD12345',
        date: '2022-01-25',
        status: 'Shipped',
        total: 150.99,
        title: 'Laptop Repair Service',
    },
    {
        id: 2,
        orderNumber: 'ORD12346',
        date: '2022-01-26',
        status: 'In Realization',
        total: 49.99,
        title: 'Software Installation',
    },
    {
        id: 3,
        orderNumber: 'ORD12347',
        date: '2022-01-27',
        status: 'Sent',
        total: 30.00,
        title: 'Virus Removal Service',
    },
    {
        id: 4,
        orderNumber: 'ORD12348',
        date: '2022-01-28',
        status: 'Shipped',
        total: 99.99,
        title: 'Hardware Upgrade',
    }
];

export default function Orders() {
    const [showReviewModal, setShowReviewModal] = useState(false);

    const handleShowReviewModal = () => setShowReviewModal(true);
    const handleCloseReviewModal = () => setShowReviewModal(false);

    return (
        <Container className="overflow-hidden">
            <Row className="g-3">
                <Col xs={12}>
                    <h3 className={styles.sectionHeader}>My Orders({ordersData.length})</h3>
                </Col>
                {ordersData.map((order) => (
                    <Col xs={12} md={6} key={order.id}>
                        <Card>
                            <Card.Body>
                                <p><b>Order Number:</b> {order.orderNumber}</p>
                                <p><b>Date:</b> {order.date}</p>
                                <p>
                                    <b>Status:</b>{' '}
                                    <span className={getStatusLabelStyle(order.status)}>
                                        {order.status}
                                    </span>
                                </p>
                                <p><b>Title:</b> {order.title}</p>
                                <div className={styles.linksContainer}>
                                    <Link to={`order-details/${order.orderNumber}`} className={styles.link}>Order Details</Link>
                                    <Link className={styles.link} onClick={handleShowReviewModal}>Add a Review</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Modal show={showReviewModal} onHide={handleCloseReviewModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {<Rating initialRating={5} />}
                    <Form>
                        <Form.Group controlId="reviewTextArea">
                            <Form.Label>Write your review:</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your review here..." />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseReviewModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseReviewModal}>
                        Submit Review
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

function getStatusLabelStyle(status) {
    switch (status) {
        case 'Shipped':
            return styles.statusShipped;
        case 'In Realization':
            return styles.statusInRealization;
        case 'Sent':
            return styles.statusSent;
        default:
            return '';
    }
}