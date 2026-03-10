import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-[url("/images/bg.jpg")] bg-cover bg-center w-screen h-screen flex flex-col justify-evenly items-center'>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-[1.2] font-sans text-white font-thinbold text-center mt-20 select-none transition-all duration-300">
          Harsh verma
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium italic text-white/45 font-sans text-center select-none mt-4">
          Full Stack Developer
        </h1>
      </div>
      {/* <div className='h-screen z-0 fixed top-1/2 -translate-y-1/2 right-0 flex justify-end items-end pointer-events-none'>
        <img className='w-full h-full object-left' src="/images/spidey.png" alt="Spider"  />
    </div> */}
      <div className='flex flex-col sm:flex-row gap-6 sm:gap-10'>
        <Button content="Hire Me" />
        <Button content="Contact Me" />
      </div>
    </div>
  )
}

export default Hero