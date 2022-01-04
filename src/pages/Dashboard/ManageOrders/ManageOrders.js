import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch('https://radiant-ocean-23538.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted])

    const handleDeleteOrder = id => {
        const sure = window.confirm('are you sure you want to delte this order')
        if (sure) {
            fetch(`https://radiant-ocean-23538.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {
                        alert('order deleted')
                        setIsDeleted(true);
                    }
                })
            
        }
    }
    return (
        <div className="m-4">
            <h2 className='fs-1'>All Orders</h2>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td><button onClick={() => handleDeleteOrder(order._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};
export default ManageOrders;