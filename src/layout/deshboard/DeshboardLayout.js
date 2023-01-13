import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/navbar/Navbar";

const DeshboardLayout = () => {
  const [userData, setUserData] = useState([])

  // const { isLoading, data:useData =[] } = useQuery({
  //   queryKey: ['userData'],
  //   queryFn: () =>
  //     fetch('http://localhost:5000/users').then(
  //       (res) => res.json(),
  //     ),
  // })
  // console.log('deshboard');


//  const accountData = useData?.map((accountData )=> accountData.accountType==="seller")

//  console.log('...............', accountData);
// console.log(useData);


  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">

           {  <>
           
           <li>
              <Link to="/deshboard/addproduct">Add A Product</Link>
            </li>
            <li>
              <Link to="/deshboard/showproduct">Show Product</Link>
            </li>
            <li>
              <Link to="/deshboard/order">My Order</Link>
            </li>
           </> }

             <li>
              <Link to="/deshboard/order">Booking</Link>
            </li> 

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeshboardLayout;
