import React from "react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/primary">
        <li>ECD & School</li>
      </Link>

      <Link to="/slc">
        <li>+2 (NEB)</li>
      </Link>
      <Link to={"/diploma"}>
        <li>Diploma</li>
      </Link>
      <Link to={"/faculty"}>
        <li>Faculty</li>
      </Link>
    </>
  );
  return (
    <>
      <div className="max-w-screen-2xl fixed top-0 left-0 right-0 z-50 container mx-auto md:px-20px navbar bg-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">GSS Sec. School</a>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
            <Link to={"/apply"}>
              <li>Apply</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-center hidden mr-5 lg:flex">
          <ul className="menu space-x-8 menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="flex-none space-x-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <IoNotificationsCircleSharp className=" text-yellow-300  h-9 w-9" />
                <span className="badge badge-sm indicator-item">2+</span>
              </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body rounded-md  bg-gray-50">
                <span className="text-lg font-bold">Notification</span>
                <div>
                  <div className=" p-2 rounded-md bg-gray-100 hover:bg-gray-200">Website will be lunched soon</div>
                </div>
                <div>
                  <div className=" p-2 rounded-md bg-gray-100 hover:bg-gray-200">Result page coming soon</div>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/contact"}>
            <button className="btn  hidden md:block bg-emerald-600 hover:bg-emerald-700 transition-all border-none text-white ">Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
