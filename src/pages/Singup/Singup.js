import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userContext } from "../../contexts/authContext/AuthContext";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../Hooks/UseTitle";

const Singup = () => {
  useTitle("Sing up");
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, singUpWithGoogleAuth } = useContext(userContext);
  const registerHandler = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = data.image[0];
    const accountType = data.account;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const user = {
            name,
            email,
            accountType,
            image: imgData.data.url,
          };

          fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
            });
        }
      });

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Sing up Successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorCode, errorMessage);
      });
  };

  const googleSingInHandler = () => {
    singUpWithGoogleAuth()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Register Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };
  return (
    <div className="w-2/5 mx-auto border-4 border-yellow-500 p-5 rounded">
      <form onSubmit={handleSubmit(registerHandler)}>
        <div>
        <h1 className="text-center text-3xl font-bold ">WELCOME TO</h1>
        <h3 className="text-center text-xl mt-2" >Sing up into your account</h3>
        </div>
        <br />
        <input
          {...register("name")}
          type="text"
          placeholder="name"
          className="input input-bordered w-full mb-4 mt-3 "
        />{" "}
        <br />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4 "
        />{" "}
        <br />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          className="input input-bordered w-full mb-4 "
        />{" "}
        <select
          className="select select-bordered w-full  mb-4 "
          {...register("account")}
        >
          <option value="buyer">buyer</option>
          <option value="seller">seller</option>
        </select>
        <input
          type="file"
          className="file-input input-bordered w-full mb-4 "
          {...register("image")}
        />
        <br />
       
          <input
            type="submit"
            className="w-full mx-auto btn btn-outline btn-primary text-black mb-4 rounded-full font-bold  p-3 rounded-lg"
            value="Sing up"
          />
        
      </form>

      <div className="flex  items-center m-4">

      <hr className="w-28 m-2 text-black"/> 
      <p className="ml-3 mr-3">or Sing up with</p> 
      <hr className="w-28 m-2"/>

      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={googleSingInHandler}
          className="btn btn-outline btn-secondary w-full rounded-full"
        >
          {" "}
          <p className="mr-2">
            <FaGoogle />
          </p>{" "}
          Continue with google
        </button>
      </div>
      <p className="font-bold mt-3 text-center">
        Already Have an Account ?
        <Link to="/singin" className="btn btn-link capitalize -ml-3 font-bold">
          Sing in
        </Link>{" "}
      </p>
    </div>
  );
};

export default Singup;
