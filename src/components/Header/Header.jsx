import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';




const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const handleLogOut =()=>{

    logOut()
    .then(()=>console.log("User Log Out"))
    .catch(error => console.log(error))
  };


    const navLinks = (
        <>
            <li className=" font-bold mr-3">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className=" font-bold mr-3">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className=" font-bold mr-3">
                <NavLink to="/contactus">Contact Us</NavLink>
            </li>
            {

              user && <><li className=" font-bold mr-4">
                <NavLink to="/bookedevents">Booked Events</NavLink>
                      </li>
                      <li className=" font-bold">
                <NavLink to="/user-dashboard">User Dashboard</NavLink>
                      </li>
                      
                      
                      
                      </> 
                      


            }
            
        </>
        
    )



    return (
        <div>
            <div className="navbar bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600  p-4 shadow-lg">
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
        className="menu menu-sm dropdown-content bg-sky-200 rounded-box z-[1] mt-6 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
   <div>
    <h1 className='font-bold lg:hidden text-gray-200'>CreativeEvent Solutions</h1>
    <img className="w-7/12 mt-1 hidden lg:block " src="https://i.ibb.co.com/T1yqf37/default.png" alt="" />
   </div>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-gray-200 uppercase px-1">
     {navLinks}
    </ul>
  </div>

    {/* Avatar annd Login Button */}

  <div className="navbar-end flex ">

          {
            user ? <>

            <span></span>
            <button onClick={handleLogOut} className='text-sm font-semibold bg-white px-2 py-1 lg:py-2 rounded-xl lg:px-10 hover:bg-sky-500 hover:text-gray-200 hover:border hover:border-white duration-200 mr-4'>Sign Out</button>
            </>
            : <Link to='/login'>
              <button className='text-sm font-semibold bg-white px-2 py-1 lg:py-2 rounded-xl lg:px-10 hover:bg-blue-500 mr-4'>Login</button>
              </Link>
            
            
            
          }
          

        <div className="avatar">
        <div className="w-10   rounded-full">
        {

          user ? <img src={user.photoURL}/>
          :
          <img src="https://i.ibb.co.com/KyWtrr4/avatar.jpg" alt="" />

        }
            
        </div>
        </div>

        
           
    </div>

</div>
        </div>
    );
};

export default Header;