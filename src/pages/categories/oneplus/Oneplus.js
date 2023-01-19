import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../contexts/authContext/AuthContext';
import useReport from '../../../Hooks/useReport';
import BookingModel from '../../Shared/BookingModel/BookingModel';

const Oneplus = () => {
  const [bookingData ,setBookingData] = useState('')
  const [oneplusProducts ,setOneplusProducts] = useState([]);
  const [reportId, setReportId] = useState('')
  const {user} = useContext(userContext);
  useReport(reportId)

    useEffect(()=>{
  fetch(`http://localhost:5000/categories/oneplus`) 
  .then(res => res.json())
  .then(data => setOneplusProducts(data))
},[])


    return (
        <div>
           <h1 className='text-center font-bold text-3xl my-5'>This Category has {oneplusProducts.length} Product</h1>

            <div className="grid grid-cols-3 gap-5">
        {oneplusProducts?.map((oneplusProduct) => (
          <div className="card w-96 bg-green-100 shadow-xl" key={oneplusProduct._id}>
            <figure>
              <img
                src={oneplusProduct.productPhoto}
                className="w-72 h-72"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{oneplusProduct.productName}</h2>
              <p>Resale Price : {oneplusProduct.resalePrice}</p>
              <p>Location : {oneplusProduct.location}</p>
              <p>Publish Date : {oneplusProduct.publishDat}</p>
              <p>Used : {oneplusProduct.useDuration}</p>
              <p onClick={()=>setReportId(oneplusProduct._id)} className='btn-outline w-24 btn-error font-bold w-32 btn btn-xs'>Report</p>
              <div className="card-actions justify-center">

                <label
                  htmlFor="booking-model"
                  onClick={()=>setBookingData(oneplusProduct)}
                  
                  className="btn btn-primary w-60 mt-3"
                >
                  Check out
                </label>

              </div>
            </div>
          </div>
        ))}
      </div>
     {bookingData && <BookingModel
     bookingData={bookingData}
     setBookingData={setBookingData}
      
      
      />}
        </div>
    );
};

export default Oneplus;