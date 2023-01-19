import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { userContext } from "../../contexts/authContext/AuthContext";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";
import Navbar from "../../pages/Shared/navbar/Navbar";

const DeshboardLayout = () => {
  const { user } = useContext(userContext);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email)
  

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
            {isSeller ? 
              <>
                <li>
                  <Link to="/deshboard/addproduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/deshboard/showproduct">Show Product</Link>
                </li>
                <li>
                  <Link to="/deshboard/order">My Order</Link>
                </li>
              </> :
              <>
              {
              isAdmin ? <> <li>
              <Link to="/deshboard/allsellers">All Sellers</Link>
            </li>
            <li>
              <Link to="/deshboard/allbuyers">All Buyers</Link>
            </li>
            <li>
              <Link to="/deshboard/reported-products">Reported Products</Link>
            </li>
            </> :
              <li>
              <Link to="/deshboard/booking">Booking</Link>
            </li>
            }
              
              </>
             
            }
            

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeshboardLayout;
