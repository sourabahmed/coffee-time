import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({item}) => {
    const { _id, name, price, description, img } = item;
    return (
        <div class='container-fluid'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img width={100} src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <p class='fw-bold text-danger'>${price}</p>
                        <Link to='{`/deliveryinfo/${_id}`}'><Button class="text-success">Place Order 
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg></Button></Link>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Product;