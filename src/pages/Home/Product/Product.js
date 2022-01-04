import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({item}) => {
    const { _id, name, price, description, image } = item;
    return (
        <div class='product p-5'>
          <div>
              <div className="product-image">
                <img className='img-fluid' src={image} alt="" />
              </div>
              <div className="product-name text-left">
                <h2>{name}</h2>
                <p>{description.slice(0, 110)}</p>
              </div>
              <div className="product-price d-flex justify-content-between align-items-center">
                <h2>${price}</h2>
                <button className="btn btn-danger"><Link to={`/deliveryinfo/${_id}`}>Order Now</Link></button>
              </div>
          </div>
        </div>
    );
};

export default Product;