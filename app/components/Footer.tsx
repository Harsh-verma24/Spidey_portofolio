"use client"
import React from 'react'
import { ArrowUpFromDot, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-around gap-4 p-6 bg-black/50 text-white'>
        <div className='aspect-square rounded-full p-4 bg-gray-700'><ArrowUpFromDot onClick={()=>{
            const element = document.getElementById('home');
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
                // window.scrollTo({ top: 0, behavior: 'smooth' });
        }} className='color-white hover:cursor-pointer' /></div>
        <span className='md:text-2xl text-xl font-thin tracking-wider'>Swinging through code & catching bugs before they escape 🕸️</span>
        <p className='text-xl tracking-wide text-white/50 mt-4'>© 2026 Harsh Verma. All rights reserved.</p>
        <p className='flex text-xl text-white/50 justify-center items-center tracking-wide'>Built with  <Heart className='mx-2 text-red-500' size={18} /> using Next.js • Tailwind • Smooth Scroll (Lenis)</p>
    </div>
  )
}

export default Footer