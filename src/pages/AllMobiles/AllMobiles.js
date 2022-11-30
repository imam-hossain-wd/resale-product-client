import React, { useEffect, useState } from 'react';
import Mobile from './Mobile';

const AllMobiles = () => {
const [mobiles, setMobiles]= useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data =>setMobiles(data))
    },[])
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-center m-5'>You have {mobiles.length} unsold {mobiles.length > 1 ? <span>items </span>: <span>item</span> }</h1>
            {
                mobiles.map(mobile=> <Mobile
                
                key={mobile.id}
                mobile={mobile}
                ></Mobile> )

            }
            
        </div>
    );
};

export default AllMobiles;