import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Login = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    
    const handleLogin = e => {

        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success("Signed In Successfully");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage);
            });
    };

    const handleGoogleLogin = () => {

        signInWithPopup(auth, googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          toast.success("Signed In Successfully");
         
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      


    };

    return (
        <div>
           
            <div className='mt-20'>
                <div className="hero bg-base-200 ">
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
                        <button className=" bg-black text-white text-xl p-4 rounded-xl hover:bg-gray-700 duration-300">Login</button>
                        </div>
                    </form>
                    
                    </div>

                    <div className=' w-9/12'>

                <button onClick={handleGoogleLogin} className='btn bg-gray-300 text-black text-lg hover:bg-gray-400 w-full'><FcGoogle className='text-3xl' />Sign In With Google</button>
            
                    </div>
                    <h1 className='mt-10 text-xl font-semibold'>Dont have an Account? <Link className='text-blue-500' to='/register'>Register</Link>  Here</h1>
                </div>

            </div>

            

            </div>

            <ToastContainer />
        </div>
    );
};

export default Login;