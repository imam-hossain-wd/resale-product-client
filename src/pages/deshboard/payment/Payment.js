import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/loading/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);


const Payment = () => {
    const booking = useLoaderData()
    const navigation = useNavigation();
    
    console.log('booking-----',booking);
    
    const { productName, price, email, name } = booking;

    if(navigation.state === "loading"){
        return <Loading/>
    }
   
    return (
        <div className='w-96'>

            
            <div className=''>
            <input type="text" defaultValue={name} disabled className="input input-bordered w-full mb-2 " />
            <input type="text" defaultValue={email}disabled className="input input-bordered w-full mb-2 " />
            <input type="text" defaultValue={productName}disabled className="input input-bordered w-full mb-2 " />
            </div>
            
            <div>
            <p className="text-2xl font-bold mt-2"> Please Pay<span className='text-red-600'>  ${price}</span> for {productName} </p>

                <div className='w-96 my-12 bg-green-200 p-10'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;