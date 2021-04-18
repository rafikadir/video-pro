import React from 'react';
import { Row, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
       <div className="container pt-100 pb-70">
           <div className="form-area">
                <h1 className="contact-heading">Contact Us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Message"  />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled>
                        Submit
                    </Button>
                </Form>
           </div>
       </div>
    );
};

export default Contact;