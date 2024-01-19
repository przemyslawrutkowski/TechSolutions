import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './OrderDetails.module.css';

export default function OrderDetails() {
    return (
        <Container>
            <h3 className={styles.sectionHeader}>Order Information</h3>
            <Card className={styles.card}>
                <Card.Body>
                    <p><b>Order Number:</b> ORD12345</p>
                    <p><b>Date:</b> 2022-01-25</p>
                    <p>
                        <b>Status:</b>{' '}
                        <span className={`${styles.statusShipped}`}>
                            Shipped
                        </span>
                    </p>
                    <p><b>Total:</b> $150.99</p>
                    <p><b>Title:</b> Laptop Repair Service</p>
                    <p><b>Description:</b><br />Repaired laptop with issues such as malfunctioning hardware components, optimized system performance, and updated software for enhanced functionality.</p>
                    <Link className={styles.link}>Download Invoice</Link>
                </Card.Body>
            </Card>
        </Container>
    );
}
