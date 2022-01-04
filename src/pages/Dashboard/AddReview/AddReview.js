
import { useForm } from "react-hook-form";

import './AddReview.css'
const AddReview = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
    fetch('https://radiant-ocean-23538.herokuapp.com/reviews', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            alert('Review added')
        }
    })
    }

    return (
      <div>
            <div className='delivery py-2'>
            <div className=" container mx-auto "> 
            <h2 className="font-bold fs-1 my-5 underline text-light"> <span className='text-decoration-underline'>Please add a</span>  Review</h2>
        

            <form className="ps-auto ms-auto fs-3 delivery-info  text-center mb-5" onSubmit={handleSubmit(onSubmit)}>
                
                <input className="w-50 text-center rounded-pill" placeholder="Image URL" {...register("image")} required/>
                <br /> <br />
                <input className="w-50 text-center rounded-pill" placeholder="Your Name" {...register("name")} required/>
                <br /> <br />
                <input className="w-50 text-center rounded-pill" placeholder="Your designation" {...register("title")} required/>
                <br /> <br />
                <input className="w-50 text-center rounded-pill" placeholder="Write Description" {...register("description")} required/>
                <br /> <br />
                
                <input className="w-50 text-center rounded-pill" placeholder="Rating between 1 to 5" {...register("rating")} required/> <br /> <br />
                
                {errors.exampleRequired && <span className="text-danger font-bold text-center rounded-pill">This field is required</span>}
                
                
                <input className="px-4 btn py-1 bg-danger fs-3 rounded-full"  type="submit" />
            </form>
            </div>
        </div>
      </div>
    );
};

export default AddReview;