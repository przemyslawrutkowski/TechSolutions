import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './RegistrationPage.module.css';

export default function RegistrationPage() {
    return (
        <Container fluid className="mt-5 mb-5 d-flex justify-content-center align-items-center flex-grow-1 flex-shrink-1 overflow-hidden">
            <Row>
                <Col>
                    <h2 className={`${styles['section-header']} text-center`}>
                        Sign Up
                    </h2>
                    <Form className={styles['registration-form']}>
                        <Form.Group className={`mb-3 ${styles['form-group']}`} controlId="formBasicFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" />
                        </Form.Group>

                        <Form.Group className={`mb-3 ${styles['form-group']}`} controlId="formBasicLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" />
                        </Form.Group>

                        <Form.Group className={`mb-3 ${styles['form-group']}`} controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <Button variant="primary" type="submit" className={`${styles['custom-button']}`}>
                                Sign Up
                            </Button>
                        </div>

                        <p className={styles['login-text']}>
                            Already have an account? <a href="#" className={styles['login-link']}>Sign In</a>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}
