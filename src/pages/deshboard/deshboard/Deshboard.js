import React from 'react';
import { Link } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div className='flex'>
           <div className='w-72 rounded bg-red-400 text-lg font-bold mr-5'>

            <Link to="/add-an-item"><p>Add An Item</p></Link>
            <Link to="/add-an-item"><p>All buyers</p></Link>
            <Link to="/add-an-item"><p>All Sellers</p></Link>
            <Link to="/add-an-item"><p>All Admin</p></Link>
            <Link to="/add-an-item"><p>All Block Users</p></Link>
            <Link to="/add-an-item"><p>All Users</p></Link>
            <Link to="/add-an-item"><p>All Booked Items</p></Link>
            <Link to="/add-an-item"> <p>My Shopping</p></Link>
            <Link to="/add-an-item"> <p>All Added Items</p></Link>
            <Link to="/add-an-item"> <p>All Reported Items</p></Link>
            
           </div>
           <div className='bg-red-700 rounded'>contend Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis architecto maxime vero distinctio repudiandae quaerat aliquid id officiis fugiat atque.</div>
        </div>
    );
};

export default Deshboard;