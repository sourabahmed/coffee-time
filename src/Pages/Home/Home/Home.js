import React from 'react';
import AnyQuestion from '../../AnyQuestion /AnyQuestion';
import Products from '../../ProductsSection/Products/Products';
import Testimonial from '../../TestimonialSection/Testimonial';

const Home = () => {
    return (
        <div>
            <h1>hello, Coffee Time</h1>
            <Testimonial></Testimonial>
            <Products></Products>
            <AnyQuestion></AnyQuestion>
        </div>
    );
};

export default Home;