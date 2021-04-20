import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="footer-info">
                                <img src={logo} alt="logo"/>
                                <ul>
                                    <li>Email: address@gmail.com</li>
                                    <li>Phone: +01 25844 111</li>
                                    <li>Address: 4/B, New York, USA</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footer-link">
                                <h3>Our Link</h3>
                                <ul>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Service</a></li>
                                    <li><a href="/">Pricing</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                        <div className="footer-link">
                            <h3>Others links</h3>
                                <ul>
                                    <li><a href="/">T&C</a></li>
                                    <li><a href="/">Pricing</a></li>
                                    <li><a href="/">Services</a></li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="copyright text-center">
                <p>Copyright &copy;2020 by <a href="#">Rafi kadir</a></p>
            </div>
        </div>
    );
};

export default Footer;