import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/authContext/AuthContext';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';


const Singup = () => {
 const { register, handleSubmit, formState: { errors } } = useForm();
const {createUser, singUpWithGoogleAuth} = useContext(userContext);
    const registerHandler = (data) => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          toast.success('Sing up Successfully')

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          toast.error(errorCode, errorMessage)
        });
        
    }
    return (
        <div className="w-2/5 mx-auto">
        <form onSubmit={handleSubmit(registerHandler)}>
          <h1 className="text-center text-2xl font-bold  m-5">Sing up</h1>
          <br />
          <input
            {...register("name")}
            type="text"
            placeholder="name"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <input
            {...register("password")}
            type="password"
            placeholder="password"
            className="input input-bordered w-full mb-4"
          />{" "}
          <br />
          <div className="flex justify-center m-5">
            <input
              type="submit"
              className="w-2/5 mx-auto bg-yellow-400 text-black font-bold  p-3 rounded"
              value="Sing in"
            />
          </div>
          <div className='w-full'>
          <button className="btn"> <p className='mr-2'><FaGoogle/></p> Sing up with google</button>
          </div>
           <p className="text-sm mt-3 text-center">Already Have an Account ?<Link to="/singup" className="btn btn-link capitalize -ml-3">Sing in</Link> </p>
        </form>
      </div>
    );
};

export default Singup;