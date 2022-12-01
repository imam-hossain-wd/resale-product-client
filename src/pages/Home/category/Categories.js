import React from 'react';
import Category from './Category';


const Categories = () => {
    const categories = [
        {   id:'1',
            img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_lp_us_04202021.jpg.og.jpg?202211022222',
            name : "Iphone"
        },
        {   id:'2',
            img: 'https://www.gizmochina.com/wp-content/uploads/2020/12/mi-11-1.jpg',
            name : "Xiaomi"
        },
        {   id:'3',
            img: 'https://fdn2.mobgsm.com/vv/pics/oneplus/oneplus-nord-1.jpg',
            name : "One Plus"
        },
    ]
    return (
        <section className='m-10'>
            <div className='text-center'>
                <h5 className='text-lg font-bold'>Browse Categoris</h5>
                <h1 className='text-4xl font-bold m-1'>Check Our All Categors Product</h1>
                <p className='font-lg'>We are experts in finding the best watches from world-renowned brands including Rolex, <br /> Breitling, Bell & Ross, and many other brands.</p>
            </div>
        <div className='m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                categories.map(category => <Category
                key={category.id}
                category={category}
                
                ></Category> )
            }
            
        </div>
        </section>
    );
};

export default Categories;