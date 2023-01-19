import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { userContext } from "../../../contexts/authContext/AuthContext";

const BookingModel = ({
  title,
  message,
  successButtonName,
  closeModal,
  modalData,
  successAction,
  closeModa,
  bookingData,
  setBookingData,
  selectedAdvertise,
  setSelectedAdvertise

}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(userContext);
  

  const bookingHandler = (data) => {
    const place = data.MeetingPlace;
    const number = data.number

    const booking = {

        name : user?.displayName,
        productName:bookingData?.productName,
        email:user?.email,
        price: bookingData?.resalePrice,
        number,
        place,
        photo: bookingData?.productPhoto,
        product_id: bookingData._id
    }
    console.log("booking is-----------------", booking);

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    toast.success(`${booking.productName} Booking is successfully`)
      
  })
    setBookingData(null)
  };

  

  

  return (
    <div>
      <input type="checkbox" id="booking-model" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
        <label
            htmlFor="booking-model"
            onClick={closeModa}
            className="btn btn-sm btn-circle mb-2 absolute right-2 top-2"
            
          >
            ✕
          </label>
          <h3 className="text-xl font-bold m-3">{bookingData?.productName}</h3>
          <form onSubmit={handleSubmit(bookingHandler)}>
            
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full mb-4 mt-3"
            />{" "}
            <br />
            <input
              type="email"
              disabled
              defaultValue={user?.email}
              className="input input-bordered w-full mb-4"
            />{" "}
            <br />
            
            <input
              type="text"
              defaultValue={bookingData?.resalePrice}
              disabled
              className="input input-bordered w-full mb-4"
            />{" "}
            <br />
            <input
              {...register("number")}
              type="number"
              placeholder="Customer Number"
              className="input input-bordered w-full mb-4"
            />{" "}
            <br />
            <input
              {...register("MeetingPlace")}
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
                htmlFor="booking-model"
                
              />
            </div>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
