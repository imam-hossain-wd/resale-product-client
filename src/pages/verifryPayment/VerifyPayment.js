import React from 'react';
import { useForm } from "react-hook-form";

const VerifyPayment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleVerify = (data) =>{
        console.log(data);

    }

    return (
        <form onSubmit={handleSubmit(handleVerify)} className="w-2/5 mx-auto">
            <h2 className='m-2'>Input Payment ID here to verify</h2>
            <input type="text" placeholder="Type here" className="input input-bordered w-72 mb-3" {...register("id")} /> <br />
            <input type="submit" value="Verify" placeholder="Type here" className="input input-bordered w-48 mx-auto" />

        </form>
    );
};

export default VerifyPayment;