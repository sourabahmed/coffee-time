import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Rating from 'react-rating';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews])

    return (
        <div className="text-center my-5 reviews">
            <Carousel fade>
                {
                    reviews.map(review =>
                        <Carousel.Item className="d-flex justify-content-center banner" key={review._id}>
                            <div className="review py-4 carousel-width front-bg">
                                <img className="my-2 rounded-circle" src={review.image} alt="" />
                                <h3 className="pt-3 pb-0 mb-0 fw-bold">{review.name}</h3>
                                <h5 className="pt-0 pb-3">{review.title}</h5>
                                <div className="mt-1 mb-3">
                                    <Rating
                                        readonly
                                        initialRating={review.rating}
                                        emptySymbol="far fa-star text-warning"
                                        fullSymbol="fas fa-star text-warning"
                                    />
                                </div>
                                <p className="fst-italic px-3 fw-bold"> {review.description}</p>
                            </div>
                        </Carousel.Item>
                    )
                }

            </Carousel>
        </div>
    );
}

export default Reviews;