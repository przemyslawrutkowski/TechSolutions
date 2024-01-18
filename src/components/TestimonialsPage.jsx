import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './TestimonialsPage.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Client1 from '../assets/client1.webp';
import Client2 from '../assets/client2.webp';
import Client3 from '../assets/client3.webp';

const testimonialsData = [
    {
        text: '“I had a great experience with their IT support. The team is knowledgeable, friendly, and resolved my software issues promptly. Thank you for the excellent service!”',
        author: 'Jane Smith',
        image: Client2,
    },
    {
        text: '“The computer repair service provided by this company is outstanding. They were able to fix my laptop\'s hardware issue quickly and efficiently. I highly recommend them!”',
        author: 'John Doe',
        image: Client1,
    },
    {
        text: '“As a business owner, I rely heavily on my computer systems. This company has been my go-to for computer maintenance and repairs. Their expertise and professionalism are unmatched.”',
        author: 'David Johnson',
        image: Client3,
    },
];

export default function TestimonialsPage() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handlePrevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : testimonialsData.length - 1
        );
    };

    const handleNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            prevIndex < testimonialsData.length - 1 ? prevIndex + 1 : 0
        );
    };

    return (
        <Container fluid className="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center overflow-hidden">
            <Row>
                <Col className="text-center">
                    <h2 className={`${styles['section-header']}`}>Testimonials</h2>
                    <p className={`${styles['section-desc']}`}>Read what our satisfied customers have to say about their experiences with our services. We take pride in delivering top-notch solutions and ensuring customer satisfaction.</p>
                </Col>
            </Row>
            <Row>
                <Col className={`${styles['testimonial']}`}>
                    <div className={`${styles['image-container']}`}>
                        <Image src={testimonialsData[currentTestimonialIndex].image} className={`${styles['custom-image']}`} alt="Client Photo" />
                    </div>
                    <blockquote className={`${styles['custom-blockquote']}`}>
                        <p className={`${styles['opinion']}`}>{testimonialsData[currentTestimonialIndex].text}</p>
                        <footer className={`${styles['author']}`}>-{testimonialsData[currentTestimonialIndex].author}</footer>
                    </blockquote>
                    <div className={`${styles['navigation-buttons']}`}>
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            size="2x"
                            onClick={handlePrevTestimonial}
                            className={`${styles['nav-button']}`}
                            style={{ color: "#03045E" }}
                        />
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            size="2x"
                            onClick={handleNextTestimonial}
                            className={`${styles['nav-button']}`}
                            style={{ color: "#03045E" }}
                        />
                    </div>
                </Col >
            </Row >
        </Container >
    );
};
