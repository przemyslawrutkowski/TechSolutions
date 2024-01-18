import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './Opinions.module.css'

const opinionsData = [
    {
        id: 1,
        date: '2022-02-01',
        rating: 5,
        review: 'Excellent service! Quick and professional repair of my laptop.',
        serviceInfo: 'Replaced faulty RAM and optimized system performance.',
    },
    {
        id: 2,
        date: '2022-01-28',
        rating: 4,
        review: 'Good experience overall. The staff was friendly and helpful.',
        serviceInfo: 'Fixed software issues and provided helpful tips for maintenance.',
    },
    {
        id: 3,
        date: '2022-01-25',
        rating: 5,
        review: 'I highly recommend this service. They fixed my computer issues efficiently.',
        serviceInfo: 'Repaired hardware issues and updated drivers for better performance.',
    },
    {
        id: 4,
        date: '2022-01-20',
        rating: 3,
        review: 'Satisfactory service. It took a bit longer than expected, but the problem was resolved.',
        serviceInfo: 'Resolved complex software conflicts and ensured system stability.',
    },
    {
        id: 5,
        date: '2022-01-15',
        rating: 4,
        review: 'Great customer support. They guided me through the troubleshooting process patiently.',
        serviceInfo: 'Provided remote assistance for resolving connectivity issues.',
    },
    {
        id: 6,
        date: '2022-01-10',
        rating: 5,
        review: 'Fantastic service! They repaired my computer faster than I anticipated.',
        serviceInfo: 'Replaced malfunctioning hardware components and performed system diagnostics.',
    },
    {
        id: 7,
        date: '2022-01-05',
        rating: 3,
        review: 'Decent experience. The repair was successful, but the communication could be improved.',
        serviceInfo: 'Fixed software glitches and recommended additional security measures.',
    }
];

export default function Opinions() {
    return (
        <Container className="overflow-hidden">
            <Row>
                <Col xs={12}>
                    <h3>My Opinions({opinionsData.length})</h3>
                </Col>
            </Row>
            {opinionsData.map(opinion => (
                <Col xs={12} key={opinion.id}>
                    <Card>
                        <Card.Body>
                            <p><b>Service Information:</b><br />{opinion.serviceInfo}</p>
                            <p><b>Date:</b> {opinion.date}</p>
                            <p><b>Rating:</b> {Array.from({ length: opinion.rating }, (_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} style={{ color: '#ffc107' }} />
                            ))}</p>
                            <p><b>Review:</b><br />{opinion.review}</p>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Container>
    );
}
