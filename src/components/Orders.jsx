import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    return (
        <Container className="overflow-hidden">
            <Row>
                <Col xs={12}>
                    <h3>My Orders({ordersData.length})</h3>
                </Col>
                {ordersData.map((order) => (
                    <Col xs={12} md={6} key={order.id}>
                        <Card>
                            <Card.Body>
                                <p><b>Order Number:</b> {order.orderNumber}</p>
                                <p><b>Date:</b> {order.date}</p>
                                <p><b>Status:</b> {order.status}</p>
                                <p><b>Total:</b> ${order.total.toFixed(2)}</p>
                                <p><b>Title:</b> {order.title}</p>
                                <Link to="/">Order Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}