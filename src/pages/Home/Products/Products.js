import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://radiant-ocean-23538.herokuapp.com/products')
            .then(rse => rse.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div id="products" className='products-section'>
            <div className=" p-5 d-flex justify-content-between ">
                <div>
                    <h5>Special Online Shop</h5>
                    <h1>Our Popular Products</h1>
                </div>
                <div>
                    <button className="btn btn-danger">See All Products</button>
                </div>
            </div>
            <div className='products'>
                {
                    items.slice(0, 12).map(item => <Product
                        key={item._id}
                        item={item}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;