import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './DeliveryInfo.css'
const DeliveryInfo = () => {
  const [product, setProduct] = useState([]);
  const {user} = useAuth();
  const {deliveryId} = useParams();
  
    useEffect(() => {
        fetch(`https://radiant-ocean-23538.herokuapp.com/singleproduct/${deliveryId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    console.log(product);
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
      fetch('https://radiant-ocean-23538.herokuapp.com/orders', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            alert('Product Purchased')
        }
    })
    }

    return (
      <div>
          <Header></Header>
            <div className='delivery py-2'>
            <div className=" container mx-auto "> 
            <h2 className="font-bold fs-1 my-5 underline text-light"> <span className='text-decoration-underline'>Delivery Product</span>  Information</h2>
        

            <form className="ps-auto ms-auto fs-3 delivery-info  text-center mb-5" onSubmit={handleSubmit(onSubmit)}>
                
                <input className="w-50 text-center rounded-pill" placeholder="Name" {...register("name")} defaultValue={user?.displayName} required/>
                <br /> <br />
                <input className="w-50 text-center rounded-pill" placeholder="Email" {...register("email")} defaultValue={user?.email} required/>
                <br /> <br />
                <input className="w-50 text-center rounded-pill" placeholder="Product Name" {...register("productName")} defaultValue={product?.name} required/>
                <br /> <br />
                <input className="w-50 text-center rounded-pill" placeholder="Price" {...register("price")} defaultValue={product?.price} required/>
                <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="Address" defaultValue="" {...register("address")} required/> <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="City" defaultValue="" {...register("city")} required /> <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="Mobile" defaultValue="" {...register("mobile")} required /> <br /> <br />
                
                {errors.exampleRequired && <span className="text-danger font-bold text-center rounded-pill">This field is required</span>}
                
                
                <input className="px-4 btn py-1 bg-danger fs-3 rounded-full"  type="submit" />
            </form>
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default DeliveryInfo;