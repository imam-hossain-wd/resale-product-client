import React from 'react';
import { useForm } from "react-hook-form";
import useTitle from '../../Hooks/UseTitle';

const VerifyPayment = () => {
    useTitle('Verify Payment')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleVerify = (data) =>{
        console.log(data);

    }

    return (
        <form onSubmit={handleSubmit(handleVerify)} className="w-2/6 mx-auto border-4 border-amber-600 p-5 rounded">
            <h2 className='m-4 text-lg font-bold text-center '>Input Payment ID here to verify</h2>
            <input type="text" placeholder="Type here" className="input input-bordered w-full mb-3" {...register("id")} /> <br />
            <input type="submit" value="Verify" placeholder="Type here" className="input input-bordered w-full mx-auto btn" />

        </form>
    );
};

export default VerifyPayment;