import React from 'react'

const Newslatter = () => {
  return (
    <div className='w-full text-white py-10'>
      <div className='max-w-[1240px] mx-auto px-5 grid md:grid-cols-3 gap-5 text-justify'>
       <div className='md:col-span-2'>
        <h1 className='font-extrabold text-xl md:text-2xl'>Want tips & tricks to optimize your flow ? </h1>
        <p className='text-md font-medium opacity-60 my-2'>Sign up to our newslatter and stay up to date.</p>
       </div>

        <div>
       <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
        <input type="email" placeholder='Enter your email' className='bg-white text-[#000f00] py-1 px-2 rounded-md text-[16px] md:text-md md:flex-1'/>
        <button  className='bg-[#00df9a] text-[#000f00] font-semibold px-3 py-1 rounded-lg '>Notify me</button>
       </div>
        <p className='text-sm  opacity-60 my-4'>We care about the protection of your data . Read our <span className='text-[#00df9a] font-bold underline'>Privacy Policy.</span></p>
        </div>

      </div>
    </div>
  )
}

export default Newslatter
