import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import about from '../../../Images/1.jpg';

const About = () => {
    return (
        <section className="pt-100 pb-70">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="about-image">
                            <img src={about} alt="about"/>
                        </div>
                    </Col>
                    <Col lg={6} className="offset-lg-1">
                        <div className="about-text">
                            <h6>About Us</h6>
                            <h1>Professional Video Editing Service</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur natus tempora reiciendis neque id adipisci. Non vero cumque in explicabo commodi quidem ullam, sunt nihil ut enim soluta unde cum maxime facere omnis quam quas! Illo, natus. Natus, at laborum.</p>
                            <a href="">Learn More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;