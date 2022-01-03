import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [items, setItems]= useState([])
    useEffect(()=>{
        fetch('')
        .then(rse => rse.json())
        .then(data => setItems(data));
    },[])
    return (
        <div class='container-fluid'>
            <div class=" text-center mb-5">
                    <h1 class="lg:fs-4 sm:fs-4 fs-6 fw-bold mb-4 text-warning">Popular items</h1>
                    
                    <div class="flex mt-4 justify-center">
                        <div class="w-100 h-1 rounded-full bg-warning inline-flex"></div>
                    </div>
                    </div>

            <div className='item-container'>
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