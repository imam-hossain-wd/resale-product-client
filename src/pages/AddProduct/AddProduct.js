import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const addProductHandler = (data) =>{
        console.log(data);
    }
    return (
        <div className="w-2/5 mx-auto">
        <form onSubmit={handleSubmit(addProductHandler)}>
          <h1 className="text-center text-2xl font-bold  m-5">Add A Product</h1>
          <br />
          <input
            {...register("name")}
            type="text"
            placeholder="name"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <input
            {...register("price")}
            type="number"
            placeholder="Price"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <input
            {...register("Number")}
            type="number"
            placeholder="Number"
            className="input input-bordered w-full mb-4"
          />{" "}
          <select {...register("type")} className="select w-full input-bordered mb-4">
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
         </select>
         <br />
         <input
            {...register("Location")}
            type="text"
            placeholder="Location"
            className="input input-bordered w-full mb-4"
          />{" "} <br />
         <input
            {...register("Description")}
            type="text"
            placeholder="Description"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
         <input
            {...register("Year")}
            type="number"
            placeholder="Year"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
         <input
            {...register("location")}
            type="text"
            placeholder="location"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <div className="flex justify-center m-5">
            <input
              type="submit"
              className="w-2/5 mx-auto bg-yellow-400 text-black font-bold  p-3 rounded"
              value="Add A Product"
            />
          </div>
         
        </form>
      </div>
    );
};

export default AddProduct;