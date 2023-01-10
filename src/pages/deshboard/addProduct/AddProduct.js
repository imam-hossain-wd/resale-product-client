import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { userContext } from "../../../contexts/authContext/AuthContext";
import useTitle from "../../../Hooks/UseTitle";

const AddProduct = () => {
  useTitle("Add Product");
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(userContext);

  const addProductHandler = (data) => {

    console.log(data);
  
   

    // const formData = new FormData();
    // formData.append("image", image);

    // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imgData) => {
    //     if (imgData.success) {
    //       console.log(imgData.data.url);
    //       const user = {
    //         name,
    //         email,
    //         accountType,
    //         image: imgData.data.url,
    //       };

    //       fetch("http://localhost:5000/user", {
    //         method: "POST",
    //         headers: {
    //           "content-type": "application/json",
    //         },
    //         body: JSON.stringify(user),
    //       })
    //         .then((res) => res.json())
    //         .then((result) => {
    //           console.log(result);
    //           toast.success(`${data.name} is added successfully`);
    //         });
    //     }
    //   });


    }
 

  return (
    <div className="rounded">
      <div>
        <h1 className="text-center text-3xl font-bold ">Add Product</h1>
      </div>
      <br />

      <form className="" onSubmit={handleSubmit(addProductHandler)}>

       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
       <label htmlFor="">
          product Name <br />
          <input
            {...register("productName")}
            type="text"
            placeholder="Product Name"
            className="input input-bordered mt-2 w-full"
          />{" "}
        </label>
        

        <label htmlFor="">
          Seller Name <br />
          <input
            {...register("sellerName")}
            type="text"
            placeholder="Seller Name"
            className="input input-bordered  mt-2 w-full"
          />{" "}
        </label>
       

        <label htmlFor="">
          Product Photo <br />
          <input
            {...register("productPhoto")}
            type="file"
            className="file-input file-input-bordered mt-2 w-full"
          />{" "}
        </label>
        

        <label htmlFor="w-full">
          Resale Price <br />
          <input
            {...register("resalePrice")}
            type="number"
            placeholder="Resale Price"
            className="input input-bordered mt-2 w-full"
          />{" "}
        </label>
        

        <label htmlFor="">
          Orginal Price <br />
          <input
            {...register("orginalPrice")}
            type="number"
            placeholder="Orginal Price"
            className="input input-bordered mt-2 w-full"
          />{" "}
        </label>
       

        <label htmlFor="">
          Location <br />
          <input
            {...register("location")}
            type="text"
            placeholder="loation"
            className="input input-bordered mt-2 w-full"
          />{" "}
        </label>
        

        <label htmlFor="">
          Product Categories <br />
          <select
            className="select select-bordered mt-2 w-full"
            {...register("Categories")}
          >
            <option value="One plus">One plus</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Iphone">Iphone</option>
            <option value="Huawei">Huawei</option>
          </select>
        </label>
        

        <label htmlFor="">
          Product's Condition <br />
          <select
            className="select select-bordered mt-2 w-full"
            {...register("Condition")}
          >
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
            <option value="Fair">Fair</option>
          </select>
        </label>

        

        <label htmlFor="">
          Duration of Use
          <br />
          <input
            {...register("useDuration")}
            type="text"
            placeholder="Use Duration"
            className="input input-bordered mt-2 w-full"
          />{" "}
        </label>
        

        <label htmlFor="">
          Seller Email <br />
          <input
            {...register("sellerEmail")}
            type="email"
            placeholder="Seller Email"
            className="input input-bordered mt-2 w-full"
          />{" "}
        </label>
        

        <label htmlFor="">
          Publish Date <br />
          <input
            {...register("publishDate")}
            type="date"
            placeholder="Public Date"
            className="input input-bordered mt-2 w-full"
          />{" "}
        </label>
       </div>
        

        <label htmlFor="" className="w-full">
          Description <br />
          <div className="form-control ">
            <textarea
            {...register("description")}
              className="textarea textarea-bordered h-24 w-4/5 mt-2 "
              placeholder="write something about product"
            ></textarea>
          </div>
        </label>

        <div className="w-full">
        <input type="submit" value="Add Product" className="btn btn-error m-2 w-72 mx-auto" />
        </div>
       
      </form>
    </div>
  );
};

export default AddProduct;
