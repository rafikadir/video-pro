import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({service}) => {
 
    const {name,description,image,price,_id} = service;

    return (
        <Col lg={4} key={_id}>
            <div className="service-box">
                <div className="service-image">   
                    <img src={image} alt="service"/>
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="price">Price: ${price}</span><br/>
                <Link to={'/service/'+_id} className="order-btn">Order Now</Link>
            </div>
        </Col>
    );
};

export default SingleService;