import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>ABOUT<span className='text-gray-700 font-medium'>US</span></p>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Welcome to Precrispto,your trusted partner in managing your healthcare needs and priorities </p>
        <p>Prescripto is commited to excellance in healthcare technology. We continously strive for excellance and qualities</p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Our vision at Prescripto is to create a seamless healthcare experience for every</p>
      </div>
    </div>
    <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semihold'>CHOOSE US</span></p>
    </div>
    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
         <b>Efficiency:</b>
         <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div>
    </div>
    <div>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
         <b>Convenience:</b>
         <p>Access to a network of trusted healthcare professionals in your area.</p>
      </div>
    </div>
    <div>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
         <b>Personalization:</b>
         <p>Tailored recommendation and reminders to help you stay on top your health.</p>
      </div>
    </div>
    </div>
  )
}

export default About
