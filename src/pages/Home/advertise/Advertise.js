import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { userContext } from "../../../contexts/authContext/AuthContext";
import useReport from "../../../Hooks/useReport";
import BookingModel from "../../Shared/BookingModel/BookingModel";
import Loading from "../../Shared/loading/Loading";

const Advertise = () => {
  const [bookingData, setBookingData] = useState("");
  const [advertises, setAdvertises] = useState([]);
  const [reportId, setReportId] = useState("");
  const { user, isLoading } = useContext(userContext);

  useReport(reportId);

  useEffect(() => {
    fetch(`http://localhost:5000/advertise`)
      .then((res) => res.json())
      .then((data) => setAdvertises(data));
  }, []);

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div>
      {advertises?.length && (
        <div className="mb-10">
          <h1 className="text-center font-bold text-2xl">Featured Mobiles</h1>
          <p className="text-center  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-5">
        {advertises?.map((advertise) => (
          <div className="card w-96 bg-green-100 shadow-xl" key={advertise._id}>
            <figure>
              <img
                src={advertise.productPhoto}
                className="w-72 h-72"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{advertise.productName}</h2>
              <p>Resale Price : {advertise.resalePrice}</p>
              <p>Location : {advertise.location}</p>
              <p>Publish Date : {advertise.publishDat}</p>
              <p>Used : {advertise.useDuration}</p>
              <p
                onClick={() => setReportId(advertise._id)}
                className="btn-outline w-24 btn-error font-bold w-32 btn btn-xs"
              >
                Report
              </p>
              <div className="card-actions justify-center">
                <label
                  htmlFor="booking-model"
                  onClick={() => setBookingData(advertise)}
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

export default Advertise;
