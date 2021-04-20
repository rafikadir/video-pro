import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';
import client from '../../../Images/client.jpg';
import './Review.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('https://desolate-crag-48774.herokuapp.com/reviews/')
        .then(res=>res.json())
        .then(data =>{
            setReviews(data);
        })
    },[])

    return (
        <section className="review-section pt-100 pb-70">
            <Container>
                <div className="reviews-heading text-center">
                    <h6>Reviews</h6>
                    <h1>What Our Client Says</h1>
                </div>
                <Row>
                    {
                        reviews.map(review => <SingleReview review={review}></SingleReview>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Reviews;