import React from 'react'
import { FaInstagram,FaLinkedin,FaGithub ,FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 pt-8 grid md:grid-cols-3 gap-8 text-gray-400'>
    <div>
          <h1 className='font-extrabold  text-2xl text-[#00df9a] hover:text-white duration-100'>REACT. </h1>
          <p className='text-justify text-sm py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloremque distinctio sint quibusdam eos. Officiis atque ipsa commodi, at iusto impedit placeat a doloribus voluptatem quidem ad pariatur asperiores doloremque.</p>
          <div className='text-white flex justify-between footer-icons'>
            <FaInstagram size={30} className='hover:text-[#00df9a] duration-100' />
            <FaLinkedin size={30} className='hover:text-[#00df9a] duration-100' />
            <FaGithub size={30} className='hover:text-[#00df9a] duration-100' />
            <FaFacebook size={30} className='hover:text-[#00df9a] duration-100' />
          </div>
    </div>

    <div className='md:col-span-2 grid grid-cols-3 sm:grid-cols-4 gap-6 text-center md:mt-8 footer'>
    <div>
        <h6 className='font-medium text-gray-300'>Solutions</h6>
        <ul>
            <li className='py-1 text-sm'>Analytics</li>
            <li className='py-1 text-sm'>Insights</li>
            <li className='py-1 text-sm'>Commerce</li>
            <li className='py-1 text-sm'>Marketing</li>
        </ul>
    </div>

      <div>
        <h6 className='font-medium text-gray-300'>Support</h6>
        <ul>
            <li className='py-1 text-sm'>Pricing</li>
            <li className='py-1 text-sm'>Documentation</li>
            <li className='py-1 text-sm'>Guides</li>
            <li className='py-1 text-sm'>API status</li>
        </ul>
    </div>

      <div>
        <h6 className='font-medium text-gray-300'>Company</h6>
        <ul>
            <li className='py-1 text-sm'>About</li>
            <li className='py-1 text-sm'>Blog</li>
            <li className='py-1 text-sm'>Jobs</li>
            <li className='py-1 text-sm'>Careers</li>
        </ul>
    </div>

      <div className='hidden sm:block'>
        <h6 className='font-medium text-gray-300'>Legal</h6>
        <ul>
            <li className='py-1 text-sm'>Claim</li>
            <li className='py-1 text-sm'>Policy</li>
            <li className='py-1 text-sm'>Terms</li>
        </ul>
    </div>


    </div>

    <div></div>
    
    </div>
  )
}

export default Footer
