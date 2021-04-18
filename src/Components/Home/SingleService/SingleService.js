import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './SingleService.css';

const SingleService = ({service}) => {

    const handleSubmit = (e) => {
        console.log("clicked");
    }

    return (
        <Col lg={4}>
            <div className="service-box">
                <div className="service-image">   
                    <img src={service.image} alt="service"/>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="price">Price: ${service.price}</span><br/>
                <Button onClick={handleSubmit} className="order-btn">Order Now</Button>
            </div>
        </Col>
    );
};

export default SingleService;