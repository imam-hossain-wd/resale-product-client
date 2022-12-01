import React, { useEffect, useState } from 'react';
import Mobile from './Mobile';
import MobileModal from './MobileModal';

const AllMobiles = () => {
const [mobiles, setMobiles]= useState([]);
const [selectedMobile, setSelectedMobile]= useState(null);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data =>setMobiles(data))
    },[])
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-center m-5'>You have {mobiles.length} unsold {mobiles.length > 1 ? <span>items </span>: <span>item</span> }</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                mobiles.map(mobile=> <Mobile
                
                key={mobile.id}
                mobile={mobile}
                setSelectedMobile={setSelectedMobile}
                ></Mobile> )

            }
           { selectedMobile &&
           
           <MobileModal
            selectedMobile={selectedMobile}
            setSelectedMobile={setSelectedMobile}
            ></MobileModal>}

            </div>
            
        </div>
    );
};

export default AllMobiles;