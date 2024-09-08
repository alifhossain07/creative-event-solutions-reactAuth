import React from 'react';
import { NavLink } from 'react-router-dom';




const Header = () => {
    const navLinks = (
        <>
            <li className=" font-bold mr-3">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className=" font-bold">
                <NavLink to="/about">About</NavLink>
            </li>
            
        </>
    )



    return (
        <div>
            <div className="navbar bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 rounded-3xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
   <div>
    <img className="w-7/12 mt-1" src="https://i.ibb.co.com/T1yqf37/default.png" alt="" />
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>

    {/* Avatar annd Login Button */}

  <div className="navbar-end ">

        <div className="avatar">
        <div className="w-16 mr-4  rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        </div>

            <button className='btn px-10 mr-4 hover:bg-sky-200'>Log In</button>
        </div>

</div>
        </div>
    );
};

export default Header;