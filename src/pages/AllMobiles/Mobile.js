import React from 'react';
import { Link } from 'react-router-dom';


const Mobile = ({mobile, setSelectedMobile}) => {
    console.log(mobile);
    const {name, userName, userPhoto, location, postTime, img, description, price, used, reason, orginalPrice}= mobile;
    return (
        <section>
            <div className="flex flex-col w-96 h-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 border-4 border-black">
	<div className="flex space-x-4">
		<img alt="" src={userPhoto} className="w-10 h-10 rounded-full" />
		<div className="flex flex-col space-y-1">
			<Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</Link>
			<span className="text-xs dark:text-gray-400">{location}</span>
            <p className='text-sm'>Posted On : {postTime}</p>
		</div>
	</div>
	<div>
		<div className='flex justify-center'>
        <img src={img} alt="" className=" h-60 w-96 rounded mb-4 " />
        </div>
		<h2 className="mb-1 text-2xl font-bold">{name}</h2>
		<p className="text-sm dark:text-gray-400 font-bold">{description.length>50?<span>{description.slice(0, 50) +"...Read more" }</span> : <span>{description} </span> }</p>
        <p className='text-xl font-bold'>Selling Price : ${price}</p>
        <p className='text-lg font-bold'>Original Price of Purchase: ${orginalPrice}</p>
        <p className='text-lg font-bold'>Product Description :</p>
        <p className='text-lg font-bold'>Product Used for: <span className='text-sm font-normal'>{used}</span></p>
        <p className='text-lg font-bold'>Reason of Selling:<span className='text-sm font-normal'>{reason}</span></p>
	</div>
    <div>
    
    <label htmlFor="my-modal-3"
    onClick={()=> setSelectedMobile(mobile)}
    className="btn btn-outline btn-error w-full">
        Booking now
      </label>
    </div>
   
</div>
            
        </section>
    );
};

export default Mobile;