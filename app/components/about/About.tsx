"use client"
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='min-h-screen w-full bg-[url("/images/bg.jpg")] bg-cover bg-center flex flex-col gap-10 md:gap-20 justify-center items-center py-10 md:py-20'>
            <div>
                <h1 className='text-6xl md:text-9xl font-medium text-white text-center font-sans tracking-wide'>About Me</h1>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center w-full px-6 md:px-0 gap-10 md:gap-0'>
                <div className='text-xl md:text-4xl select-none text-white/80 font-sans text-center md:text-left max-w-lg md:max-w-2xl leading-relaxed'>
                    <span>Like a certain web-slinger, I spend my time building things for the city - except my city is the web.

                        I&apos;m Harsh, a developer passionate about crafting interactive frontends and powerful backends. I started with MERN, and now I&apos;m exploring Java and Spring Boot to build scalable systems.

                        My mission is simple:
                        write clean code, build meaningful projects, and keep leveling up.</span>
                </div>
                <div className='relative h-64 w-64 md:h-120 md:w-120 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shrink-0'>
                    <Image className='object-cover' src="/images/harsh.jpg" alt="Harsh" fill sizes='(max-width: 768px) 256px, 480px' priority={false} />
                </div>
            </div>

        </div>
    )
}

export default About