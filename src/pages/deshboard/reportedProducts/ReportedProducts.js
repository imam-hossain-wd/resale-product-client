import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/loading/Loading';

const ReportedProducts = () => {    
  const { data: reportedProducts = [], refetch, isLoading } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/reported/product`,{
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
      
    },
  });


    const setDeletingReportedProduct = reportedProduct => {
        fetch(`http://localhost:5000/reportedproduct/${reportedProduct._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${reportedProduct.name} deleted successfully`)
            }
        })
    }
    if(isLoading){
        <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mb-5'>There are {reportedProducts.length} reported products</h1>
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
            {reportedProducts &&
              reportedProducts.map((reportedProduct, i) => (
                <tr key={reportedProduct._id}>
                  <th>{i + 1}</th>
                  <th>
                    {" "}
                    <img
                      src={reportedProduct.productPhoto}
                      className="w-12 h-12 rounded-full"
                      alt=""
                    />
                  </th>
                  <td>{reportedProduct.productName}</td>

                  <td>
                    <label
                      htmlFor="confirmation-modal"
                      onClick={() => setDeletingReportedProduct(reportedProduct)}
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
        </div>
    );
};

export default ReportedProducts;