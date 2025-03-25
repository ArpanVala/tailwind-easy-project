import React from 'react'
import {FaBars,FaWindowClose} from 'react-icons/fa'
import { useState } from 'react'
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = ()=>{
        setNav(!nav)
    }
  return (
    <div className=' h-18 max-w-[1024px] mx-auto text-white flex justify-between items-center p-4 z-50'>
    <h1 className='font-extrabold  text-2xl text-[#00df9a] w-100'>REACT.</h1>
    <ul className='hidden md:flex cursor-pointer'>
        <li className='p-2 m-1'>Home</li>
        <li className='p-2 m-1'>About</li>
        <li className='p-2 m-1'>Contact</li>
        <li className='p-2 m-1'>Services</li>
    </ul>
    <div onClick={handleClick} className='cursor-pointer block md:hidden'> 
    { !nav? <FaBars className='text-2xl text-white' />: <FaWindowClose className='text-2xl text-white' />}
    </div>

   

    <div className={nav ? ' z-50 fixed top-0 left-0 h-full w-80 bg-gray-700 p-4 duration-500 ease-in-out':'fixed left-[-200%]'}>
     <h1 className='font-extrabold  text-2xl text-[#00df9a] w-100 mb-6'>REACT. </h1>
        <ul >
        <li className='my-2 p-2 border-gray-500 border-b-2'>Home</li>
        <li className='my-2 p-2 border-gray-500 border-b-2'>About</li>
        <li className='my-2 p-2 border-gray-500 border-b-2'>Contact</li>
        <li className='my-2 p-2 border-gray-500 border-b-2'>Services</li>
        </ul>
     <FaWindowClose className='text-3xl text-white text-end float-right' onClick={handleClick}/>
    </div>
      
    </div>
  )
}

export default Navbar
