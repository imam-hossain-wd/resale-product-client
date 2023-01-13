import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/loading/Loading";
import AdvertiseModal from "../advertiseModal/AdvertiseModal";

const Advertise = () => {
  const [selectedAdvertise, setSelectedAdvertise] = useState(null);

  const { isLoading, data: advertises = [] } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/advertise").then((res) => res.json()),
  });

  if (isLoading) {
    <Loading></Loading>;
  }

//   const {
//     productPhoto,
//     productName,
//     sellerName,
//     resalePrice,
//     orginalPrice,
//     location,
//     categories,
//     condition,
//     useDuration,
//     sellerEmail,
//     publishDat,
//     description,
//   } = advertises;

  return (
    <div>
      {advertises.length && (
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
              <div className="card-actions justify-center">
                <label
                  htmlFor="advertise-modal"
                  onClick={() => setSelectedAdvertise(advertise)}
                  className="btn btn-primary w-60 mt-3"
                >
                  Check out
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AdvertiseModal 
      selectedAdvertise={selectedAdvertise}
      />
    </div>
  );
};

export default Advertise;
