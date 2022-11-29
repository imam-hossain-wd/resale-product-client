import React , {useContext} from "react";
import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { userContext } from "../../contexts/authContext/AuthContext";
import toast from 'react-hot-toast';



const Singin = () => {
  const { loginUser}= useContext(userContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  
 const logInHandler = (data) => {
        const email = data.email;
        const password = data.password;
        loginUser(email , password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log("Sing in successfully");
          toast.success("Sing in successfully")
        })
        .catch((error) => {
          const code = error.code;
          const message = error.message;
          console.log(code , message);
          toast.error(code , message)
        });
        
      }

    return (
        <div className="w-2/5 mx-auto">
        <form onSubmit={handleSubmit(logInHandler)}>
          <h1 className="text-center text-2xl font-bold  m-5">Sing in</h1>
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
          <p className="text-sm mb-2"><Link to="/">Forget password ?</Link> </p>
          <div className="w-4/5">
            <input
              type="submit"
              className="w-2/5 mx-auto bg-yellow-400 text-black font-bold  p-3 rounded"
              value="Sing in"
            />
          </div>
           <p className="text-sm mt-3 text-center">Have no Account ?<Link to="/singup" className="btn btn-link capitalize -ml-3">Sing up</Link> </p>
        </form>
      </div>
    );
};

export default Singin;