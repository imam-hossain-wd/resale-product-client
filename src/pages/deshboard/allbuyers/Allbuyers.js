import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { userContext } from "../../../contexts/authContext/AuthContext";
import ConfirmationModal from "../../Shared/confirmationModel/ConfirmationModal";

const Allbuyers = () => {
  const [deletingBuyer, setDeletingBuyer] = useState(null);
const {user} = useContext(userContext);

  const { data: allbuyers = [], refetch, isLoading } = useQuery({
    queryKey: ["allsellers", user?.email],
    queryFn: async () => {
      if(user?.email){
        const res = await fetch(`http://localhost:5000/allbuyers?email=${user?.email}`,{
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
      }
    },
  });

  const deleteHandlerBuyer = allbuyer => {
    fetch(`http://localhost:5000/allsellers/${allbuyer._id}`, {
        method: 'DELETE', 
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Seller ${allbuyer.name} deleted successfully`)
        }
    })
}

const closeModal = ()=>{
    setDeletingBuyer(null)
}


  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-5">There are {allbuyers.length} buyers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allbuyers &&
              allbuyers.map((allbuyer, i) => (
                <tr key={allbuyer._id}>
                  <th>{i + 1}</th>
                  <th>
                    {" "}
                    <img
                      src={allbuyer.image}
                      className="w-12 h-12 rounded-full"
                      alt=""
                    />
                  </th>
                  <td>{allbuyer.name}</td>

                  <td>
                    <label
                      htmlFor="confirmation-modal"
                      onClick={() => setDeletingBuyer(allbuyer)}
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
      {
                deletingBuyer && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${allbuyers.name}. It cannot be undone.`}
                    successAction = {deleteHandlerBuyer}
                    successButtonName="Delete"
                    modalData = {deletingBuyer}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
    </div>
  );
};

export default Allbuyers;
