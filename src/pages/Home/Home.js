import React from 'react';
import useTitle from '../../Hooks/UseTitle';
import Banner from './Banner/Banner';
import Categories from './category/Categories';
import Steps from './Steps/Steps';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <Steps/>
            <Categories/>
        </div>
    );
};

export default Home;