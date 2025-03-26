import React from 'react'
import Card from './Card'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='w-full bg-white'>
    <div className='max-w-[1240px] mx-auto px-5 py-20 grid md:grid-cols-3 gap-17 md:gap-5'>
       <Card img={Single} heading={'Single User'} price={'$149'} storage={'500GB storage'} userAllowed={'1 User Allowed'} sendUpTo={'send up to 2GB'}/>
       <Card img={Double} heading={'Partnership'} price={'$199'} storage={'1TB storage'} userAllowed={'3 User Allowed'} sendUpTo={'send up to 10GB'}/>
       <Card img={Triple} heading={'Group Account'} price={'$299'} storage={'5TB storage'} userAllowed  ={'10 User Allowed'} sendUpTo={'send up to 20GB'}/>
       
    </div>
    </div>
  )
}

export default Cards
