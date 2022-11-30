import React from 'react';

const Category = ({category}) => {
    console.log(category);
    const {img , name} = category;
    return (
        <div className='border-4 rounded p-5 border-orange-300'>
                <div>
                    <img src={img} className="w-64 h-72 rounded" alt="" />
                </div>
                <h1 className='text-3xl font-bold text-center mt-3'>{name}</h1>
        </div>
    );
};

export default Category;