import React from 'react';

const Logo = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-20 gap-5'>

            <img src={"iphone-logo.png"} alt=""  className='w-48 h-28 rounded'/>
            <img src={"oneplus.jpg"} alt="" className='w-48 h-28 rounded' />
            <img src={"xiaomi.jpg"} alt="" className='w-48 h-28 rounded' />
            <img src={"oppo.jpg"} alt="" className='w-48 h-28 rounded' />
            <img src={"vivo.jpg"} alt="" className='w-48 h-28 rounded' />
            
        </div>
    );
};

export default Logo;