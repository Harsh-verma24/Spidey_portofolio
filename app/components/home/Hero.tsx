import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-[url("/images/Background.png")] bg-cover bg-center w-screen h-screen flex flex-col justify-evenly items-center'>
    <div>
        <h1 className="text-2xl font-montserrat italic text-black font-thinbold text-center mt-20">Harsh verma</h1>
        <h1 className="text-xl font-medium italic text-black/45 font-montserrat text-center ">Full Stack Developer</h1>
    </div>
    <div className='h-[60%]'>
        <img className='w-full h-full object-contain' src="/images/Spider.png" alt="Spider"  />
    </div>
    <div className='flex gap-10'>
    <Button content="Hire Me"/>
    <Button content="Contact Me"/>
    </div>
    </div>
  )
}

export default Hero