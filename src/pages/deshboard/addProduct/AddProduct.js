import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { userContext } from "../../../contexts/authContext/AuthContext";
import useTitle from "../../../Hooks/UseTitle";

const AddProduct = () => {
  useTitle("Add Product");

  // REACT_APP_imgbb_key=72245c660f34c82cfdeb15da1ec7d7b2
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(userContext);

  const addProductHandler = (data) => {
    // console.log(data);
    // const image = data.image[0];
    const productName = data.productName;
    const sellerName = data.sellerName;
    // const productPhoto = data.productPhoto[0];
    const image = data.image[0];
    const resalePrice = data.resalePrice;
    const orginalPrice = data.orginalPrice;
    const location = data.location;
    const categories = data.categories;
    const condition = data.condition;
    const useDuration = data.useDuration;
    const sellerEmail = data.sellerEmail;
    const publishDat = data.publishDate;
    const description = data.description;

    const formData = new FormData();
    formData.append("image", image);
    console.log(image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const photoUrl = imgData.data.url;

          const product = {
            productPhoto: photoUrl,
            productName,
            sellerName,
            resalePrice,
            orginalPrice,
            location,
            categories,
            condition,
            useDuration,
            sellerEmail,
            publishDat,
            description,
          };

          console.log("products is ", product);

          fetch("http://localhost:5000/addproduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${productName} is added successfully`);
              reset();
            });
        }
      });
  };

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
              {...register("productName", {
                required: true,
              })}
              type="text"
              placeholder="Product Name"
              className="input input-bordered mt-2 w-full"
            />{" "}
            {errors.productName && (
              <span className="text-red-700">Product name is required</span>
            )}
          </label>

          <label htmlFor="">
            Seller Name <br />
            <input
              {...register("sellerName", {
                required: true,
              })}
              type="text"
              placeholder="Seller Name"
              className="input input-bordered  mt-2 w-full"
            />{" "}
            {errors.productName && (
              <span className="text-red-700">Seller name is required</span>
            )}
          </label>

          <label htmlFor="">
            Product Photo <br />
            <input
              {...register("image", {
                required: true,
              })}
              type="file"
              className="file-input file-input-bordered mt-2 w-full"
            />{" "}
            {errors.productName && (
              <span className="text-red-700">Product photo is required</span>
            )}
          </label>

          <label htmlFor="w-full">
            Resale Price <br />
            <input
              {...register("resalePrice", {
                required: true,
              })}
              type="number"
              placeholder="Resale Price"
              className="input input-bordered mt-2 w-full"
            />{" "}
            {errors.productName && (
              <span className="text-red-700">Resale price is required</span>
            )}
          </label>

          <label htmlFor="">
            Orginal Price <br />
            <input
              {...register("orginalPrice", {
                required: true,
              })}
              type="number"
              placeholder="Orginal Price"
              className="input input-bordered mt-2 w-full"
            />{" "}
            {errors.productName && (
              <span className="text-red-700">Original price is required</span>
            )}
          </label>

          <label htmlFor="">
            Location <br />
            <input
              {...register("location", {
                required: true,
              })}
              type="text"
              placeholder="loation"
              className="input input-bordered mt-2 w-full"
            />{" "}
            {errors.productName && (
              <span className="text-red-700">Location is required</span>
            )}
          </label>

          <label htmlFor="">
            Product Category <br />
            <select
              className="select select-bordered mt-2 w-full"
              {...register("categories", {
                required: true,
              })}
            >
              <option value="One plus">One plus</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Iphone">Iphone</option>
              <option value="Huawei">Huawei</option>
            </select>
            {errors.productName && (
              <span className="text-red-700">Product Category is required</span>
            )}
          </label>

          <label htmlFor="">
            Product's Condition <br />
            <select
              className="select select-bordered mt-2 w-full"
              {...register("condition", {
                required: true,
              })}
            >
              <option value="Good">Good</option>
              <option value="Excellent">Excellent</option>
              <option value="Fair">Fair</option>
            </select>
            {errors.productName && (
              <span className="text-red-700">
                Product condition is required
              </span>
            )}
          </label>

          <label htmlFor="">
            Duration of Use
            <br />
            <input
              {...register("useDuration", {
                required: true,
              })}
              type="text"
              placeholder="Use Duration"
              className="input input-bordered mt-2 w-full"
            />{" "}
            {errors.productName && (
              <span className="text-red-700">Duration is required</span>
            )}
          </label>

          <label htmlFor="">
            Seller Email <br />
            <input
              {...register("sellerEmail", {
                required: true,
              })}
              type="email"
              defaultValue={user?.email}
              className="input input-bordered mt-2 w-full"
            />{" "}
            {errors.productName && (
              <span className="text-red-700">Seller email is required</span>
            )}
          </label>

          <label htmlFor="">
            Publish Date <br />
            <input
              {...register("publishDate", {
                required: true,
              })}
              type="date"
              placeholder="Public Date"
              className="input input-bordered mt-2 w-full"
            />{" "}
            {errors.productName && (
              <span className="text-red-700">Publish date is required</span>
            )}
          </label>
        </div>

        <label htmlFor="" className="w-full">
          Description <br />
          <div className="form-control ">
            <textarea
              {...register("description", {
                required: true,
              })}
              className="textarea textarea-bordered h-24 w-4/5 mt-2 "
              placeholder="write something about product"
            ></textarea>
          </div>
          {errors.productName && (
            <span className="text-red-700">
              Product description is required
            </span>
          )}
        </label>

        <div className="w-full">
          <input
            type="submit"
            value="Add Product"
            className="btn btn-error m-2 w-72 mx-auto"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
