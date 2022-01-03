import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AdProductItems.css'


const ProductAdd = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Successfully Food Items Ad')
                reset();
            }
        })
    };
    return (
        <div className='add-product bg-warning '> 
        <img className='w-50 rounded-full mx-auto' src="" alt="" />
            <div className='pb-16 text-danger '>
            <h2 className='font-bold fs-3 my-5 underline'>Please Add Product Items</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='fs-6  text-center mb-6'>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name'  className='text-left '/>
                <input {...register("description")} placeholder='Description' className='text-left '/>
                <input type="number" {...register("price")} placeholder='Price' className='text-left '/>
                <input {...register("img")} placeholder='Img Url'className='text-left '/>
                <input type="submit" className='bg-green-400 rounded-xl hover:bg-green-600 text-white '/>
            </form>
            </div>
        </div>
    );
};

export default ProductAdd;