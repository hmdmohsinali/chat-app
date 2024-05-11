import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const[userName, setUserName] = useState('');  
  const[password, setPassword] = useState('');

  const {loading, login}= useLogin();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);}

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> InstaChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            href="#"
            className=" text-sm text-gray-700 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2"
            type="submit" 
            disabled={loading}
            >
              {loading? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//starter code for this file

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Login
//           <span className='text-blue-500'> InstaChat</span>
//         </h1>
//         <form >
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-gray-700'>Username</span>
//             </label>
//             <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//           </div>
//           <div>
//           <label className='label p-2'>
//               <span className='text-base label-text text-gray-700'>Password</span>
//             </label>
//             <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>
//           <a href="#" className=' text-sm text-gray-700 hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</a>
//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
