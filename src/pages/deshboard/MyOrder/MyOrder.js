import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { userContext } from '../../../contexts/authContext/AuthContext';

const MyOrder = () => {
const [orders , setOrders] = useState([]);
const {user} = useContext(userContext)

    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user?.email])
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>I have {orders.length} orders</h1>

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
            {orders &&
              orders.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <th>
                    {" "}
                    <img
                      src={order.photo}
                      className="w-12 h-12 rounded-full"
                      alt=""
                    />
                  </th>
                  <td>{order.productName}</td>
                  
                 
                  <td>
                  
                  <label htmlFor="confirmation-modal"  className="btn btn-xs h-9 w-16 border-0 font-bold normal-case bg-red-600">Delete</label>
                  </td> 
                  
                </tr>
              ))}
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default MyOrder;