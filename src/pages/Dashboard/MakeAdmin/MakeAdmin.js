import React from 'react';
import './MakeAdmin.css';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert("Admin added")
            }
        })
    }
    return (
        <div>
          <div className='delivery py-2'>
          <div className=" container mx-auto "> 
          <h2 className="font-bold fs-1 my-5 underline text-light"> <span className='text-decoration-underline'>Make an</span>  Admin</h2>
          <form className="ps-auto ms-auto fs-3 delivery-info  text-center mb-5" onSubmit={handleSubmit(onSubmit)}>
              
              <input className="w-50 text-center rounded-pill" type="email" placeholder="Eamil" {...register("email")} required/>
              <br /> <br />            
              <input className="px-4 btn py-1 bg-danger fs-3 rounded-full"  type="submit" />
          </form>
          </div>
      </div>
    </div>
    );
};

export default MakeAdmin;