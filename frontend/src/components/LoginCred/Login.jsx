import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const toSignup =()=>{
     navigate('/signup');
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}users/login`,{
      username,
      password
    },
  {
    headers:{
      contentType : 'application/json'
    }
  })
  console.log(res)
  if(res.status===200){
    document.cookie = `token=${res.data.message.token}`;
    console.log(document.cookie)
    navigate('/')
  }
  }catch(err){
    console.log(err.message)
  }
}
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div
                  style={{'animation': 'slideInFromLeft 1s ease-out'}}
                  className="w-[100%] flex flex-col justify-center md:w-[30%] bg-gradient-to-r rounded-lb-xl shadow-2xl overflow-hidden p-10 space-y-8 rounded-xl bg-blue-950">
                <h2
                    style={{'animation': 'appear 2s ease-out'}}
                    className="text-center text-4xl font-extrabold text-green-500"
                >
                    Login
                </h2>
                <p style={{'animation': 'appear 3s ease-out'}} className="text-center text-gray-300">
                    Sign in to your account
                </p>
                    <form method="POST" action="#" className="space-y-6">
                        <div className="relative">
                        <input
                            placeholder="john"
                            className="peer h-10 border-solid w-full border-b-2 border-gray-300 text-gray-300 bg-transparent placeholder-transparent focus:outline-none focus:border-green-400"
                            required=""
                            id="username"
                            name="username"
                            values={username}
                            type="text"
                            onChange = {(e)=>setUsername(e.target.value)}
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-400 peer-focus:text-sm"
                            htmlFor="email"
                            >User Name</label
                        >
                        </div>
                        <div className="relative">
                        <input
                            placeholder="password"
                            className="peer h-10 border-solid w-full border-b-2 border-gray-300 text-gray-300 bg-transparent placeholder-transparent focus:outline-none focus:border-green-400"
                            required=""
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-green-400 peer-focus:text-sm"
                            htmlFor="password"
                            >Password</label
                        >
                        </div>
                        <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-200">
                       
                        </label>
                        <a className="text-sm text-green-500 hover:underline" href="/"
                            >Forgot your password?</a
                        >
                        </div>
                        <button
                        className="w-full py-2 px-4 bg-green-400 hover:bg-green-500 rounded-md shadow-lg text-white font-semibold transition duration-200"
                        type="submit" onClick={(e)=>handleSubmit(e)}
                        >
                        Sign In
                        </button>
                    </form>
                        <div className="text-center text-gray-300"> Don't have an account?
                        <button className="text-green-500 px-2 hover:underline" onClick={()=>toSignup()}>Sign up</button>
                     </div>
                </div>
    </div>
  );
};

export default Login;
