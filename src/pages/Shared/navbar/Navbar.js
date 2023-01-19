import React, {useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../../contexts/authContext/AuthContext';
import Loading from '../loading/Loading';
import useSeller from '../../../Hooks/useSeller';


const Navbar = () => {
  const {logOut, user,isLoading} = useContext(userContext);
  const [isSeller] = useSeller(user?.email);
  const navigate = useNavigate();

  const handleLogOut = () =>{
    logOut()
    .then(() => {
     toast.success('Sing out Successfully');
     localStorage.removeItem('accessToken')
     navigate('/')
    }).catch((error) => {
      console.log(error.message);
      toast.error(error.message)
    });
  }

    const navmenu = <React.Fragment>

 <li> <Link to="/home">Home</Link> </li>

<li> <Link to="/blog">Blog
</Link> </li>

{!isSeller && <li tabIndex={0}>
    <Link className="justify-between">
      Categories
      
    </Link>
    <ul className="p-2 ">
      <li><Link to="/categories/oneplus">One plus</Link></li>
      <li><Link to="/categories/iphone">Iphone</Link></li>
      <li><Link to="/categories/xiaomi">Xiaomi</Link></li>
      
    </ul>
  </li>}

{user?.uid ? <><li> <Link to="/deshboard">Deshboard</Link> </li>
<button className='ml-3' onClick={handleLogOut} >Sing out</button></> : 
 <li> <Link to="/singin">Sing in</Link> </li> 

}



  </React.Fragment> 

  if(isLoading){
    <Loading></Loading>
  }
     
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
          <img src={'logo.png'} alt="" className='w-10 h-10 rounded-full' />
          <Link to="/" className="btn btn-ghost normal-case text-xl">Resale Zone</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          
           {navmenu}

          </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
      </div>
    );
};

export default Navbar;