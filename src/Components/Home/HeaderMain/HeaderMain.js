import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeaderMain.css';
import image from '../../../Images/2.jpg';

const HeaderMain = () => {
    return (
        <div className="banner-area d-flex align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="banner-text">
                            <h6>Video Editing</h6>
                            <h1>Get First Class Video Editing Service</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi placeat perferendis rerum consectetur vitae provident.</p>
                            <a href="#">Get Started</a>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="banner-img">
                            <img src={image} alt="editor"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderMain;