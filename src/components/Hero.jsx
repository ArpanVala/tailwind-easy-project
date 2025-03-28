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
 
    <button class="font-semibold rounded-lg before:ease relative px-5 py-2 overflow-hidden border border-[#00df9a] bg-[#00df9a] text-[#000f00] shadow-xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-900  hover:before:-translate-x-40">
      <span relative="relative z-10">Get Started</span>
    </button>
    </div>
      
    </div>
  )
}

export default Hero
