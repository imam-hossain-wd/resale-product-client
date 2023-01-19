import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { userContext } from "../../../contexts/authContext/AuthContext";
import useReport from "../../../Hooks/useReport";
import BookingModel from "../../Shared/BookingModel/BookingModel";

const Xiaomi = () => {
  const [bookingData, setBookingData] = useState("");
  const [reportId, setReportId] = useState('')
  useReport(reportId)
  const { user } = useContext(userContext);
  const [xiaomiProducts, setXiaomiProducts] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:5000/categories/xiaomi`)
        .then((res) => res.json())
        .then((data) => setXiaomiProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-5">
        This Category has {xiaomiProducts.length} Product
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {xiaomiProducts?.map((xiaomiProduct) => (
          <div
            className="card w-96 bg-green-100 shadow-xl"
            key={xiaomiProduct._id}
          >
            <figure>
              <img
                src={xiaomiProduct.productPhoto}
                className="w-72 h-72"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{xiaomiProduct.productName}</h2>
              <p>Resale Price : {xiaomiProduct.resalePrice}</p>
              <p>Location : {xiaomiProduct.location}</p>
              <p>Publish Date : {xiaomiProduct.publishDat}</p>
              <p>Used : {xiaomiProduct.useDuration}</p>
              <p onClick={()=>setReportId(xiaomiProduct._id)} className='btn-outline w-24 btn-error font-bold w-32 btn btn-xs'>Report</p>
              <div className="card-actions justify-center">
                <label
                  htmlFor="booking-model"
                  onClick={() => setBookingData(xiaomiProduct)}
                  className="btn btn-primary w-60 mt-3"
                >
                  Check out
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {bookingData && (
        <BookingModel
          bookingData={bookingData}
          setBookingData={setBookingData}
        />
      )}
    </div>
  );
};

export default Xiaomi;
