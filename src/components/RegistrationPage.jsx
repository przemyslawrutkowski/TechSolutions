import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import styles from './RegistrationPage.module.css';

export default function RegistrationPage() {
    return (
        <Container fluid className="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center overflow-hidden">
            <h2 className={`${styles['section-header']}`}>
                Sign Up
            </h2>
            <Form className={styles['registration-form']}>
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <div className="d-flex justify-content-center align-items-center mb-3">
                    <Button variant="primary" className={`${styles['custom-button']}`}>
                        Sign Up
                    </Button>
                </div>

                <p className={styles['login-text']}>
                    Already have an account? <Link to="/login" className={styles['login-link']}>Sign In</Link>
                </p>
            </Form>
        </Container >
    );
}
