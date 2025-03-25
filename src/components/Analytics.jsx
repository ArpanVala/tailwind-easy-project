import React from 'react'
import Laptop from '../assets/laptop.jpg'
import Teach from '../assets/teach.png'
const Analytics = () => {
  return (
    <div className='w-full bg-white'>
      <div className='max-w-[1240px] mx-auto px-5 py-5 grid md:grid-cols-2'>

        <img src={Laptop} alt="laptop illustartion" className='w-[400px] mx-auto'/>
        <div className='flex flex-col gap-2 justify-center'>
        <p className='text-[#00df9a] font-extrabold text-md md:text-lg'>DATA ANALYTICS DASHBOARD</p>
        <h1 className='font-extrabold text-xl md:text-2xl'>Manage Data Analytics Centrally</h1>
            <p  className='text-justify text-md md:text-[16px] font-medium opacity-60 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore dolore maxime facilis numquam. Possimus, expedita quas obcaecati placeat exercitationem, tenetur quod perferendis recusandae cupiditate in culpa corporis neque vero.</p>
            <button className='mx-0 w-30 bg-[#000f00] text-white font-semibold py-2 px-3 rounded-lg'>Get Started</button>
        </div>
      </div>

        <div className='bg-gray-900 h-0.5 opacity-5 mx-5 my-3'></div>

       <div className='max-w-[1240px] mx-auto px-5 py-5 grid md:grid-cols-2'>

        <img src={Teach} alt="laptop illustartion" className='w-[400px] mx-auto order-2'/>
        <div className='flex flex-col gap-2 justify-center order-1'>
        <p className='text-[#00df9a] font-extrabold text-md md:text-lg'>ANALYTICS INTERACTION</p>
        <h1 className='font-extrabold text-xl md:text-2xl'>Interactive Analytics</h1>
        <p  className='text-justify text-md md:text-[16px] font-medium opacity-60 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore dolore maxime facilis numquam. Possimus, expedita quas obcaecati placeat exercitationem, tenetur quod perferendis recusandae cupiditate in culpa corporis neque vero.</p>
           
        </div>
      </div>
    </div>
  )
}

export default Analytics
