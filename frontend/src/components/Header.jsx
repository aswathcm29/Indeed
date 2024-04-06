import React from 'react'
import { MdFlightTakeoff } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='h-[27rem] ring-2 flex justify-center items-center bg-blue-950'>
        <div className='w-[85%] h-[90%]  ring-red-100 py-[2rem]'>
            <div className='flex justify-between items-center mb-[2rem]'>
              <div className='flex text-green-500 text-3xl space-x-1'>
                <span>Indeed</span>
                <span className='text-4xl'><MdFlightTakeoff/></span>
              </div>
              <div>
                 <ul className='flex gap-x-[2rem] icon-a'>
                   <li className='text-green-500 text-xl nav-full'>aswathcm29</li>
                   <Link to='/profile'><li className='text-green-500 text-3xl nav-full'><FaUserCircle/></li></Link>
                   <li className='text-green-500 text-3xl nav-full'><RiMenu5Line/></li>
                 </ul>
              </div>
            </div>
            <div className='mb-[3rem]'>
                <p className='text-4xl text-gray-300'>Millions of cheap flights. One simple Search</p>
            </div>
            <div className='gap-x-[1rem] flex'>
                 <div className='fillsearch rounded-l-lg'>
                      <span>From</span>
                      <input type='text' placeholder='Airport' className='searchplace'/>
                 </div>
                 <div className='fillsearch'>
                      <span>To</span>
                      <input type='text' placeholder='Airport' className='searchplace'/>
                 </div>
                 <div className='fillsearch'>
                      <span>Arrival</span>
                      <input type='text' placeholder='Country' className='searchplace'/>
                 </div>
                 <div className='fillsearch'>
                      <span>Departure</span>
                      <input type='text' placeholder='Country' className='searchplace'/>
                 </div>
                 <div className='fillsearch rounded-r-lg'>
                      <span>Return</span>
                      <input type='text' placeholder='Add Date' className='searchplace'/>
                 </div>
                 <div className='w-[8rem] h-[5rem] rounded-lg flex items-center justify-center bg-green-500'>Submit</div>
            </div>
        </div>
    </div>
  )
}

export default Header