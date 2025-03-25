import React from 'react'
import {ReactTyped} from  'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
    <div className='flex flex-col items-center justify-center h-screen max-w-[600px]  text-center mx-auto gap-4 -mt-26 md:-mt-18'>
        <p className='text-[#00df9a] font-bold text-sm md:text-lg'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='font-extrabold text-3xl md:text-6xl'>GROW WITH DATA</h1>
        <div className='flex font-bold gap-2'>
            <p>Fast & Flexible financing for</p>
             <ReactTyped strings={["BTB","BTC","SaaS"]} typeSpeed={140} backSpeed={150} className='text-[#00df9a]' loop/>
        </div>
        <p className='text-sm sm:text-md md:text-[16px] max-w-[350px] md:max-w-full font-medium opacity-60'>Monitor your data analytics to increase revenue for BTC, BTB & SaaS platforms</p>

        <button className='bg-[#00df9a] text-[#000f00] font-semibold p-2 rounded-lg'>Get Started</button>
    </div>
      
    </div>
  )
}

export default Hero
