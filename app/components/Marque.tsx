import React from 'react'
import Marquee from 'react-fast-marquee'

const Marque = () => {
    const marqueeItems = [
        "Dream It...",
        "Build It...",
        "Ship It...",
        "Dream It...",
        "Build It...",
        "Ship It...",
        "Dream It...",
        "Build It...",
        "Ship It...",
        "Dream It...",
        "Build It...",
        "Ship It...", 
        "Dream It...",
        "Build It...",
        "Ship It...",
        "Dream It...",
        "Build It...",
        "Ship It...",
    ];

    return (
        <Marquee className="bg-black">
            <div className='h-16 md:h-24 w-full flex items-center overflow-hidden gap-6 md:gap-10 bg-black pr-6 md:pr-10'>
                {marqueeItems.map((item, index) => (
                    <div key={index} className='h-full flex items-center shrink-0 gap-2 md:gap-4'>
                        <img className='h-10 md:h-16 w-auto object-contain' src="/images/mrqSpider.png" alt="Spider" />
                        <span className='text-2xl md:text-4xl text-white font-sans italic whitespace-nowrap'>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </Marquee>
    )
}

export default Marque