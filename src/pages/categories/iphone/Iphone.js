import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../contexts/authContext/AuthContext';
import useReport from '../../../Hooks/useReport';

import BookingModel from '../../Shared/BookingModel/BookingModel';

const Iphone = () => {
  const [bookingData ,setBookingData] = useState('')
  const [reportId, setReportId] = useState('')
  const [iphoneProducts, setIphoneProducts] = useState([]);
 
useReport(reportId)
  const { user } = useContext(userContext);

  useEffect(() => {
  
      fetch(`http://localhost:5000/categories/iphone`)
        .then((res) => res.json())
        .then((data) => setIphoneProducts(data));
 
  }, []);

    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-5'>This Category has {iphoneProducts.length} Product</h1>
            <div className="grid grid-cols-3 gap-5">
        {iphoneProducts?.map((iphoneProduct) => (
          <div className="card w-96 bg-green-100 shadow-xl" key={iphoneProduct._id}>
            <figure>
              <img
                src={iphoneProduct.productPhoto}
                className="w-72 h-72"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{iphoneProduct.productName}</h2>
              <p>Resale Price : {iphoneProduct.resalePrice}</p>
              <p>Location : {iphoneProduct.location}</p>
              <p>Publish Date : {iphoneProduct.publishDat}</p>
              <p>Used : {iphoneProduct.useDuration}</p>
              <p onClick={()=>setReportId(iphoneProduct._id)} className='btn-outline w-24 btn-error font-bold w-32 btn btn-xs'>Report</p>
              <div className="card-actions justify-center">
                <label
                  htmlFor="booking-model"
                  onClick={()=>setBookingData(iphoneProduct)}
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

export default Iphone;