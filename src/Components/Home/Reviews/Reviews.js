import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';
import client from '../../../Images/client.jpg';
import './Review.css';

const reviews = [
    {
        name: "Rafi Kadir",
        image: client,
        reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis debitis ea!"
    },
    {
        name: "Rafi Chy",
        image: client,
        reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis debitis ea!"
    },
    {
        name: "Rafi Jami",
        image: client,
        reviews: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis debitis ea!"
    }
]

const Reviews = () => {
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