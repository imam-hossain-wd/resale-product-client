import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/navbar/Navbar";

const DeshboardLayout = () => {
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
            <li>
              <Link to="/deshboard/addproduct">Add A Product</Link>
            </li>
            <li>
              <Link to="/deshboard/showproduct">Show Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeshboardLayout;
