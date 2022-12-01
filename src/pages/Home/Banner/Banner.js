import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className='grid md:grid-cols-1 lg:grid-cols-2'>
                <div className='mt-36'>
                <p className='font-bold text-lg'>Find Exclusive</p>
                    <h1 className='text-3xl font-bold mt-3'>PROPER USED <br /> FOR PROPER RESELL</h1>
                    <p className='mt-3'>We have the expertise to checke any phones, including Smart Phone and antique Iphone or any international famous smart Phone brand.</p>
                    <button className='btn mt-3'>Check Now</button>
                </div>
                <div className='mt-10'>
                    
                    <img src={"iphone-banner.jpg"} className="rounded h-4/5 w-full" alt="" />
                </div>
                
            </div>
            
        </section>
    );
};

export default Banner;