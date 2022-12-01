import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const MobileFeacture = () => {
    return (
        <section>
            <h1 className='text-3xl font-bold text-center m-5'>Mobile's Photo Gellery</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                <div className="">
                     <PhotoProvider>
                    <PhotoView src="11.jpg">
                    <img src="11.jpg" alt="" className='w-60 h-80 rounded'/>
                    </PhotoView>
                </PhotoProvider>
                </div>
                <div className="">
                     <PhotoProvider>
                     <div className="">
                        <PhotoView src="12.jpg">
                    <img src="12.jpg" alt="" className='w-60 h-80 rounded'/>
                    </PhotoView>
                    </div>
                </PhotoProvider>
                </div>
                <div className="">
                     <PhotoProvider>
                     <div className="">
                        <PhotoView src="13.jpg">
                    <img src="13.jpg" alt="" className='w-60 h-80 rounded'/>
                    </PhotoView>
                    </div>
                </PhotoProvider>
                </div>
                <div className="">
                     <PhotoProvider>
                     <div className="">
                        <PhotoView src="14.jpg">
                    <img src="14.jpg" alt="" className="w-60 h-80 rounded"/>
                    </PhotoView>
                    </div>
                </PhotoProvider>
                </div>
                <div className="">
                     <PhotoProvider>
                     <div>
                        <PhotoView src="15.jpg">
                    <img src="15.jpg" alt="" className='w-60 h-80 rounded'/>
                    </PhotoView>
                    </div>
                </PhotoProvider>
                </div>
            </div>
       </section>
    );
};

export default MobileFeacture;