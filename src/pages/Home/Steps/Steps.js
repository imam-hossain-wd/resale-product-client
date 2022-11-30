import React from 'react';

const Steps = () => {
    return (
        <section>
            <div className='text-center m-10'>
                <p className='text-xl font-bold mb-2'>Follow This Steps</p>
                <h1 className='text-3xl font-bold mb-2'>Follow Some Steps To Find Best Experince</h1>
                <h4 className='text-lg '>We are experts in finding the best Phones from  world-renowned brands <br/> including Iphone, One Plus, Xiaomi, and many other brands.</h4>
            </div>


            <div className='flex justify-around text-center'>
                <div className='border-4 rounded  w-64 h-72 p-2' style={{borderColor:"#49C1FE"}}>
                   <div className='flex justify-center'>
                   <img src={"icon1.jpg"} className="w-20 h-20 m-2" alt="" /> 
                   </div>
                    <p className=' rounded-lg font-bold text-lg m-3' style={{background:"#49C1FE"}}>Step 1</p>
                    <p className='font-bold text-lg m-3'>Login & Discover</p>
                    <p className='text-lg m-2'>Smart filtering and suggestions <br /> make it easy to find</p>
                </div>
                <div className='border-4 rounded  w-64 h-72 p-2' style={{borderColor:'#49D7F4'}}>
                   <div className='flex justify-center'>
                   <img src={"icon1.jpg"} className="w-20 h-20 m-2" alt="" /> 
                   </div>
                    <p className='rounded-lg font-bold text-lg m-3' style={{background:'#49D7F4'}}>Step 2</p>
                    <p className='font-bold text-lg m-3'>Add to Wishlist</p>
                    <p className='text-lg m-2'>Easily select the correct items and add them to the wishlist</p>
                </div>
                <div className='border-4 rounded   w-64 h-72 p-2' style={{borderColor:"#E56773"}}>
                   <div className='flex justify-center'>
                   <img src={"icon1.jpg"} className="w-20 h-20 m-2" alt="" /> 
                   </div>
                    <p className='rounded-lg font-bold text-lg m-3' style={{background:"#E56773"}}>Step 3</p>
                    <p className='font-bold text-lg m-3'>Fast Meet To Find Fast</p>
                    <p className='text-lg m-2'>Meet as soon as to find the best product for your choice</p>
                </div>
                <div className='border-4 rounded  w-64 h-72 p-2' style={{borderColor:"#52A57F"}}>
                   <div className='flex justify-center'>
                   <img src={"icon1.jpg"} className="w-20 h-20 m-2" alt="" /> 
                   </div>
                    <p className=' rounded-lg font-bold text-lg m-3' style={{background:"#52A57F"}}>Step 4</p>
                    <p className='font-bold text-lg m-3'>Enjoy the product</p>
                    <p className='text-lg m-2'>Have fun and enjoy your Dream Watch</p>
                </div>
             
                
               
            </div>

        
            
        </section>
    );
};

export default Steps;