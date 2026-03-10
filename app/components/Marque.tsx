import React from 'react'
import Marquee from 'react-fast-marquee'

const Marque = () => {
  return (
    <Marquee>
        <div className='h-24 w-full flex items-center overflow-hidden gap-10 bg-black'>
        <div className='h-full flex items-center shrink-0'>
            <img className='h-full w-auto object-contain' src="/images/mrqSpider.png" alt="Spider" />
            <span className='text-5xl text-white font-sans italic whitespace-nowrap'>Dream It...</span>
        </div> 
        <div className='h-full flex items-center shrink-0'>
            <img className='h-full w-auto object-contain' src="/images/mrqSpider.png" alt="Spider" />
            <span className='text-5xl text-white font-sans italic whitespace-nowrap'>Build It...</span>
        </div>
         <div className='h-full flex items-center shrink-0'>
            <img className='h-full w-auto object-contain' src="/images/mrqSpider.png" alt="Spider" />
            <span className='text-5xl text-white font-sans italic whitespace-nowrap'>Ship It...</span>
        </div><div className='h-full flex items-center shrink-0'>
            <img className='h-full w-auto object-contain' src="/images/mrqSpider.png" alt="Spider" />
            <span className='text-5xl text-white font-sans italic whitespace-nowrap'>Dream It...</span>
        </div> 
        <div className='h-full flex items-center shrink-0'>
            <img className='h-full w-auto object-contain' src="/images/mrqSpider.png" alt="Spider" />
            <span className='text-5xl text-white font-sans italic whitespace-nowrap'>Build It...</span>
        </div>
         <div className='h-full flex items-center shrink-0'>
            <img className='h-full w-auto object-contain' src="/images/mrqSpider.png" alt="Spider" />
            <span className='text-5xl text-white font-sans italic whitespace-nowrap'>Ship It...</span>
        </div>
    </div>
    
    </Marquee>
  )
}

export default Marque