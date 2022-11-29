import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { userContext } from '../../../contexts/authContext/AuthContext';
import {FaCaretDown , FaUserAlt} from 'react-icons/fa';

const Navbar = () => {
  const {logOut, user} = useContext(userContext)

  const handleLogOut = () =>{
    logOut()
    .then(() => {
     toast.success('Sing out Successfully') 
    }).catch((error) => {
      console.log(error.message);
      toast.error(error.message)
    });
  }

    const navmenu = <React.Fragment>

 <li> <Link to="/home">Home</Link> </li>
 <li> <Link to="/verification">Verify Your Payment</Link> </li>
 <li> <Link to="/addproduct">All Bikes</Link> </li>
<li> <Link to="/blog">Blog
</Link> </li>
<li> <Link to="/singin">Sing in</Link> </li>  

<div className='flex items-center'>
        <div className="w-10 h-10" >
        <img src={user?.photoURL} className="rounded-full" alt="" />
        </div>
                  <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
              
            <p className='text-xl text-white'> <FaCaretDown/></p>
            </label>
            <div tabIndex={0} className="card compact dropdown-content shadow bg-base-100 rounded-box w-28 mt-5 ml-5">
              <div className="card-body ">
              <button  className="text-black font-bold"><Link to="/profile"> Profile </Link></button>
              <button  className="text-black font-bold"><Link to="/deshboard"> Deshboard </Link></button>
              <button onClick={handleLogOut}  className="text-black font-bold">Sing out</button>
           </div>
         </div>
       </div>
     </div>
  </React.Fragment> 
     
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navmenu}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Resale Zone</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {navmenu}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;