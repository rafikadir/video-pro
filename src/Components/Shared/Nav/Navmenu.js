import React from 'react';
import logo from '../../../Images/logo.png';
import './Navmenu.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Navmenu = () => {
    return (
        <div className="main-navbar">
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">
                        <img className="logo" src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="nav-link" href="#">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="#">About</Nav.Link>
                            <Nav.Link className="nav-link" href="#">Services</Nav.Link>
                            <Nav.Link className="nav-link" href="#">Reviews</Nav.Link>
                            <Nav.Link className="nav-link" href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>    
            </Container>
        </div>
    );
};

export default Navmenu;