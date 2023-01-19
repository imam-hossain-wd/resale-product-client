import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { userContext } from "../../../contexts/authContext/AuthContext";
import ConfirmationModal from "../../Shared/confirmationModel/ConfirmationModal";
import Loading from "../../Shared/loading/Loading";

const Bookings = () => {
  const { user, isLoading } = useContext(userContext);
  const [deletingBooking, setDeletingBooking] = useState(null);
  // const email = user?.email
  const [bookings, setBookings] = useState([]);

  const getAllUsers = () => {
    if (user?.email) {
      const url = `http://localhost:5000/bookings?email=${user?.email}`;

      fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch");
          }
          return res.json();
        })
        .then((data) => {
          setBookings(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [user?.email]);

  const deleteHandlerBooking = (booking) => {
    fetch(`http://localhost:5000/booking/${booking._id}`, {
      method: "DELETE",
      // headers: {
      //     authorization: `bearer ${localStorage.getItem('accessToken')}`
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          getAllUsers();
          toast.success(`Doctor ${booking.productName} deleted successfully`);
        }
      });
  };



  if (isLoading) {
    <Loading />;
  }

  const closeModal = () => {
    setDeletingBooking(null);
  };

  return (
    <div>
      <h1 className="text-center text-3xl m-5 font-bold ">
        I have Booked {bookings.length} products
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <th>
                    {" "}
                    <img
                      src={booking.photo}
                      className="w-12 h-12 rounded-full"
                      alt=""
                    />
                  </th>
                  <td>{booking.productName}</td>

                  <td>
                    {/* {booking.price && !booking.paid && <button  className='btn btn-xs h-9 w-20 border-0 normal-case bg-green-600'><Link to={`/deshboard/payment/${booking._id}`}>PAY</Link></button>} */}

                    {booking.price && !booking.paid && (
                      <Link to={`/deshboard/payment/${booking._id}`}>
                        <button className="btn btn-xs h-9 w-20 border-0 normal-case bg-green-600">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-red-500 font-bold">Paid</span>
                    )}
                  </td>

                  <td>
                    <label
                      htmlFor="confirmation-modal"
                      onClick={() => setDeletingBooking(booking)}
                      className="btn btn-xs h-9 w-16 border-0 font-bold normal-case bg-red-600"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingBooking && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingBooking.productName}. It cannot be undone.`}
          successAction={deleteHandlerBooking}
          successButtonName="Delete"
          modalData={deletingBooking}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Bookings;
