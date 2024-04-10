import { MdFlightTakeoff } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {TypeAnimation} from 'react-type-animation';
import { LiaGlobeSolid } from "react-icons/lia";


const Header = ()=>{
     return (
     <div className='h-[27rem] flex justify-center items-center bg-blue-950'>
     <div className='w-[85%] h-[90%]  py-[2rem]'>
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
             <p className='text-4xl text-gray-300'> <TypeAnimation 
                       sequence={[
                         'Millions of cheap flights. One simple Search',
                          1000,
                       ]}
                       speed={50}
                       wrapper='span'
                    ></TypeAnimation></p>
         </div>
         <div className='gap-x-[1rem] flex'>
              <div className='fillsearch rounded-l-lg ' >
                   <span>From</span>
                   <input type='text' placeholder='Airport'  className='searchplace'/>
              </div>
              <div className='fillsearch'>
                   <span>To</span>
                   <input type='text' placeholder='Airport'  className='searchplace'/>
              </div>
              <div className='fillsearch'>
                   <span>Arrival</span>
                   <input type='text' placeholder='Country'  className='searchplace'/>
              </div>
              <div className='fillsearch'>
                   <span>Departure</span>
                   <input type='text' placeholder='Country' className='searchplace'/>
              </div>
              <div className='fillsearch rounded-r-lg'>
                   <span>Return</span>
                   <input type='text' placeholder='Add Date' className='searchplace'/>
              </div>
              <button className='w-[8rem] h-[5rem] rounded-lg flex items-center justify-center bg-green-500'>Submit</button>
         </div>
     </div>
 </div>
     )
}

const Textcard =()=>{
    return (
       <div className="mt-[2rem] flex item-center justify-center">
          <div className="h-[5rem] w-[85%] bg-blue-950 rounded-md flex justify-center items-center">
             <div className="text-gray-300 text-4xl flex gap-x-4">
                    <div>Explore Your Location with Indeed</div>
             </div>
          </div> 
       </div>
    )
}

const DisplayCard = () =>{
    return(
     <div className="flex justify-center items-center py-[3rem]">
      <div className="mx-auto bg-white rounded-xl overflow-hidden shadow-lg w-[85%]">
   <Link to='/'>
  <div className="relative ">
    <img src='https://images.unsplash.com/photo-1543304216-b46be324b571?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="w-full h-[35rem] rounded-t-xl" alt='dubai' />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent shadow-xl">
       <div className="px-[2%] py-[16%] w-[45%]">
       <p className="text-5xl text-gray-200">New Zealand</p>
       <p className="text-2md text-gray-300 pt-[1rem]">Make your way around the country, to see dramatic black-sand beaches, thermal springs, sandy coves, towering mountains and aquamarine lakes</p>
       </div>
    </div>
  </div>
  </Link>    
  </div>
</div>
    )
}

const Frequent=()=>{
     return(
          <>
          </>
     )
}

const Home = () => {
  return (
     <>
      <Header/>
      <Textcard/>
      <DisplayCard/>
     </>
  )
}

export default Home