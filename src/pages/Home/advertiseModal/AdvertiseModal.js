import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AdvertiseModal = ({selectedAdvertise}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [advertise , setAdvertise] = useState([])

    console.log("selected advertised",selectedAdvertise);

//   const { productPhoto, productName, sellerName, resalePrice, orginalPrice, location, categories, condition, useDuration, sellerEmail, publishDat, description,
//   } = selectedAdvertise;


    const bookingHandler = (data)=>{
        console.log(data);

        // const booking = {
            
        //     mobileName: name,
        //     buyerName: name,
        //     price,
        //     image: img,
        // }
        // console.log(booking);
        // setAdvertise(null)

    }
    return (
        <div>
   
      <input type="checkbox" id="advertise-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="advertise-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(bookingHandler)}>

          
          <input
            {...register("email")}
            type="email"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full mb-4 mt-3"
          />{" "}
          <br />
          <input
            {...register("mobile name")}
            type="text"
            placeholder="Mobile Name"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <input
            {...register("price")}
            type="text"
            placeholder="Price"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <input
            {...register("customer number")}
            type="number"
            placeholder="Customer Number"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <input
            {...register("Meeting Location")}
            type="text"
            placeholder="Meeting Location"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <div className="flex justify-center m-5">     
            <input
              type="submit"
              className="w-3/5 mx-auto bg-yellow-400 text-black font-bold  p-3 rounded"
              value="Book Now"
            />
           
          </div>
          </form>
         
        </div>
      </div>
    </div>
    );
};

export default AdvertiseModal;