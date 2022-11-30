import React from 'react';
import Banner from './Banner/Banner';
import Categories from './category/Categories';
import Steps from './Steps/Steps';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Steps/>
            <Categories/>
        </div>
    );
};

export default Home;