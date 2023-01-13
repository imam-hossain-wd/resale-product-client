import React from 'react';
import useTitle from '../../Hooks/UseTitle';
import Advertise from './advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './category/Categories';
import Logo from './MobileFeacture/Logo';
import MobileFeacture from './MobileFeacture/MobileFeacture';
import Steps from './Steps/Steps';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <Advertise/>
            <Steps/>
            <Categories/>
            <MobileFeacture/>
            <Logo/>
        </div>
    );
};

export default Home;