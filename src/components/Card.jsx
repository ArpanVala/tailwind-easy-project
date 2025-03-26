import React from 'react'

const Card = ({img,heading, price, storage, userAllowed,sendUpTo}) => {
  return (
    <div className='border-2 border-gray-300 rounded-xl px-5  pt-10 md:pt-18 pb-6 relative text-center flex flex-col gap-2 shadow-lg hover:shadow-xl hover:scale-102 duration-300 cursor-pointer'>
      <img src={img} alt="logo of plans" className='w-20 md:w-26 bg-gray-200 rounded p-3 md:p-5 absolute top-0 left-[50%] translate-[-50%]'/>

      <h1 className='font-extrabold text-2xl md:4xl'>{heading}</h1>
      <p className='font-extrabold text-2xl md:4xl'>{price}</p>

      <div className='text-bold text-sm md:text-md opacity-80 space-y-3 mt-2'>
        <p className='border-b-1 border-gray-300'>{storage}</p>
        <p className='border-b-1 border-gray-300'>{userAllowed}</p>
        <p className='border-b-1 border-gray-300'>{sendUpTo}</p>
      </div>

      <button  className='mt-3 bg-[#00df9a] text-[#000f00] hover:text-[#00df9a] duration-200 hover:bg-[#000f00] font-semibold py-1 px-4 rounded-lg w-full'>Start Trail</button>

    </div>
  )
}

export default Card
