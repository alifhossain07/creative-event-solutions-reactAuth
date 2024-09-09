import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import {Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { signInWithGoogle } = useContext(AuthContext);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || '/';
    
    
    const handleLogin = e => {

        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            console.log(result.user);
            toast.success(' User Logged In!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });

            e.target.reset();
            navigate(from, { replace: true });

            
        })
        .catch(error=>{
            console.error(error); 
            toast.error('Error While loggin in!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        })
    };

    const handleGoogleLogin = () => {

        signInWithGoogle()
        .then((result) => {
          console.log('User signed in with Google:', result.user);
          toast.success(' Log In Successful!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
          navigate(from, { replace: true });
        })
        .catch((error) => {

            toast.error('Error While loggin in!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            
          console.error('Error signing in with Google:', error);
        });
      


    };

    return (
        <div className=''>
           
            <div className='mt-20'>
                <div className="hero  ">
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center lg:text-left">
                    <h1 className="lg:text-5xl mb-10 text-3xl  font-semibold">Log into Your Account</h1>
                    
                    </div>
                    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="font-bold text-xl label-text">Email Address</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered  h-16" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-xl ">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered h-16" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className=" bg-blue-500 hover:bg-sky-500 text-white text-xl p-4 rounded-xl duration-300">Login</button>
                        </div>
                    </form>
                    
                    </div>

                    <div className=' w-9/12 mt-10'>

                <button onClick={handleGoogleLogin} className='btn bg-gray-300 text-black text-lg hover:bg-gray-400 w-full'><FcGoogle className='text-3xl' />Sign In With Google</button>
            
                    </div>
                    <h1 className='mt-10 text-xl font-semibold'>Dont have an Account? <Link className='text-blue-500' to='/register'>Register</Link>  Here</h1>
                </div>

            </div>

            

            </div>

            <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/>
        </div>
    );
};

export default Login;