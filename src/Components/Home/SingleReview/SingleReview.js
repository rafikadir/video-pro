import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleReview.css'

const SingleReview = ({review}) => {
    console.log(review);
    return (
        <Col lg={4}>
           <div className="reviews-box">
               <img src={review.image} alt="review"/>
               <h3>{review.name}</h3>
               <p>{review.reviews}</p>
           </div>
        </Col>
    );
};

export default SingleReview;