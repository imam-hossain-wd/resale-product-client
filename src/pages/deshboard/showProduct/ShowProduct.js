import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { userContext } from "../../../contexts/authContext/AuthContext";
import ConfirmationModal from "../../Shared/confirmationModel/ConfirmationModal";
import Loading from "../../Shared/loading/Loading";

const ShowProduct = () => {
  const {user}= useContext(userContext)
    const [deletingProduct, setDeletingProduct] = useState(null);

    console.log('user ', user?.email);

  const { data: addProducts = [], refetch, isLoading } = useQuery({
    queryKey: ["addProducts"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/addproduct?email=${user?.email}`);

      // const res = await fetch("http://localhost:5000/addproduct");
      const data = await res.json();
      return data;
    },
  });


  const deleteHandlerProduct = product => {
    fetch(`http://localhost:5000/products/${product._id}`, {
        method: 'DELETE', 
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Doctor ${product.productName} deleted successfully`)
        }
    })
}
const closeModal = () => {
    setDeletingProduct(null);
}

if (isLoading) {
    return <Loading></Loading>
}

  return (
    <div>
      <h3 className="text-3xl mb-5">My Products</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Available</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {addProducts &&
              addProducts.map((addProduct, i) => (
                <tr key={addProduct._id}>
                  <th>{i + 1}</th>
                  <th>
                    {" "}
                    <img
                      src={addProduct.productPhoto}
                      className="w-12 h-12 rounded-full"
                      alt=""
                    />
                  </th>
                  <td>{addProduct.productName}</td>
                  <td className="text-red-500">Sales</td>
                  <td><button className="btn btn-xs h-9 w-20 border-0 normal-case bg-green-600">Advertise</button></td>

                  <td>
                  
                  <label onClick={() => setDeletingProduct(addProduct)}htmlFor="confirmation-modal"  className="btn btn-xs h-9 w-16 border-0 font-bold normal-case bg-red-600">Delete</label>
                  </td>
                  
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.productName}. It cannot be undone.`}
                    successAction = {deleteHandlerProduct}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
    </div>
  );
};

export default ShowProduct;
