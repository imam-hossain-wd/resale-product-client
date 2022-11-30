import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/authContext/AuthContext';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../Hooks/UseTitle';


const Singup = () => {
  useTitle('Sing up')
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

    const googleSingInHandler = () =>{
      singUpWithGoogleAuth()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Register Successfully")
      }).catch((error) => {
        const errorMessage = error.message;
        console.log( errorMessage);
        toast.error(errorMessage)
      });
    }
    return (
        <div className="w-2/5 mx-auto border-4 border-yellow-500 p-5 rounded">
        <form onSubmit={handleSubmit(registerHandler)}>
          <h1 className="text-center text-3xl font-bold  m-5">Sing up</h1>
          <br />
       <label htmlFor="Seller"className='mr-3 font-bold text-lg '>
        <input {...register('food', { required: true })}  name="name"  type="radio" value="Seller" /> Seller</label>
        <label htmlFor="" className='font-bold text-lg'><input {...register("Account")} name="name" type="radio" /> Buyer</label>

          <input
            {...register("name")}
            type="text"
            placeholder="name"
            className="input input-bordered w-full mb-4 mt-3"
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
          <input type="file" className="file-input input-bordered w-full " />
          <br />
          <div className="flex justify-center m-5">
            <input
              type="submit"
              className="w-3/5 mx-auto bg-yellow-400 text-black font-bold  p-3 rounded"
              value="Sing in"
            />
          </div>
          </form>
          <div className='w-full flex justify-center'>
          <button onClick={googleSingInHandler} className="btn"> <p className='mr-2'><FaGoogle/></p> Sing up with google</button>
          </div>
           <p className="font-bold mt-3 text-center">Already Have an Account ?<Link to="/singin" className="btn btn-link capitalize -ml-3 font-bold">Sing in</Link> </p>
        
      </div>
    );
};

export default Singup;