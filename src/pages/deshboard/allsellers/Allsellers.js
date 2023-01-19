import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { userContext } from '../../../contexts/authContext/AuthContext';
import ConfirmationModal from '../../Shared/confirmationModel/ConfirmationModal';
import Loading from '../../Shared/loading/Loading';

const Allsellers = () => {
    const [deletingSeller, setDeletingseller] = useState(null);
const {user} = useContext(userContext);
    

    const { data: allsellers = [], refetch, isLoading } = useQuery({
        queryKey: ["allsellers", user?.email],
        queryFn: async () => {
          if(user?.email){
            const res = await fetch(`http://localhost:5000/allsellers?email=${user?.email}`,{
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          const data = await res.json();
          return data;
          }
        },
      });

      const deleteHandlerSeller = allseller => {
        fetch(`http://localhost:5000/allsellers/${allseller._id}`, {
            method: 'DELETE', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Seller ${allseller.name} deleted successfully`)
            }
        })
    }

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/allseller/admin/${id}`, {
            method: 'PUT', 
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }


    const closeModal = ()=>{
        setDeletingseller(null)
    }
    if(isLoading){
        <Loading/>
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center m-5">There are {allsellers.length} sellers</h1>

            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allsellers &&
              allsellers.map((allseller, i) => (
                <tr key={allseller._id}>
                  <th>{i + 1}</th>
                  <th>
                    {" "}
                    <img
                      src={allseller.image}
                      className="w-12 h-12 rounded-full"
                      alt=""
                    />
                  </th>
                  <td>{allseller.name}</td>
                  {/* onClick={() =>  makeAdvertiserHandler(allseller._id)} */}
                 <td>{allseller?.publish !== "advertise" && <button  
                 onClick={()=> handleMakeAdmin(allseller._id)}
                 className='btn btn-xs h-9 w-20 border-0 normal-case bg-green-600'>Make Admin</button>}</td>

                  <td>
                  
                  <label htmlFor="confirmation-modal"
                  onClick={() => setDeletingseller(allseller)}
                  className="btn btn-xs h-9 w-16 border-0 font-bold normal-case bg-red-600">Delete</label>
                  </td>
                  
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${allsellers.name}. It cannot be undone.`}
                    successAction = {deleteHandlerSeller}
                    successButtonName="Delete"
                    modalData = {deletingSeller}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default Allsellers;