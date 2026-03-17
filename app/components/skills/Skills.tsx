import React from 'react'
import Image from 'next/image'

const frontendData = [{
  name: "HTML",
  logo: "/logos/html.png"
},
{
  name: "CSS",
  logo: "/logos/css.png"
},
{
  name: "JavaScript",
  logo: "/logos/javascript.png"
},
{
  name: "React",
  logo: "/logos/react.png"},
  {
    name: "Next.js",
    logo: "/logos/nextjs.png"
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/tailwindcss.png"
  },
]
const backendData = [{
  name: "Node.js",
  logo: "/logos/nodejs.png"
},
{
  name: "Express.js",
  logo: "/logos/expressjs.png"
},
{
  name: "MongoDB",
  logo: "/logos/mongodb.png"
},
{
  name: "Spring Boot (Still learning)",
  logo: "/logos/springboot.png"
},
]
const ToolsData = [{
  name: "Git",
  logo: "/logos/git.png"
},
{
  name:"Vercel",
  logo: "/logos/vercelIcon.png"
},
{
  name: "Docker",
  logo: "/logos/docker.png"
}
]
const Skills = () => {
  return (
    <div className='min-h-screen w-full bg-[url("/images/bg.jpg")] bg-cover bg-center flex flex-col items-center justify-center py-12 md:py-20'>
      <div className="mb-12">
        <h1 className='text-6xl md:text-9xl font-medium text-white font-sans tracking-wide'>Skills</h1>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center w-full px-4' >
        
        {/* Frontend Section */}
        <section className='relative w-full max-w-sm h-144 transition-transform hover:scale-105 duration-300'>
          <div id='card1' className="w-full h-full">
            <Image src="/images/Frame1.png" alt="Frontend Card" className="w-full h-full object-cover" width={384} height={576} sizes='(max-width: 1024px) 100vw, 384px' />
          </div>
          <div className='absolute inset-0 flex flex-col items-center pt-24 px-6 text-white select-none'>
            <h1 className="text-4xl tracking-[0.18em] font-extrabold mb-8 text-center uppercase font-[system-ui]">Frontend</h1>
            <div className="flex flex-col gap-4 w-full px-2">
              {frontendData.map((item, index) => (
                <div key={index} className='flex  items-center gap-4 bg-black/40 p-2 rounded-lg backdrop-blur-sm hover:bg-black/60 transition-colors'>
                  <Image src={item.logo} alt={item.name} className='w-8 h-8 object-contain' width={32} height={32} />
                  <span className="text-xl leading-tight font-semibold tracking-normal font-[system-ui]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Backend Section */}
        <section className='relative w-full max-w-sm h-144 transition-transform hover:scale-105 duration-300'>
          <div id='card2' className="w-full h-full">
            <Image src="/images/Frame2.png" alt="Backend Card" className="w-full h-full object-cover" width={384} height={576} sizes='(max-width: 1024px) 100vw, 384px' />
          </div>
          <div className='absolute inset-0 flex flex-col items-center pt-24 px-6 text-white select-none'>
            <h1 className="text-4xl tracking-[0.18em] font-extrabold mb-8 text-center uppercase font-[system-ui]">Backend</h1>
            <div className="flex flex-col gap-4 w-full px-2">
              {backendData.map((item, index) => (
                <div key={index} className='flex items-center gap-4 bg-black/40 p-2 rounded-lg backdrop-blur-sm hover:bg-black/60 transition-colors'>
                  <Image src={item.logo} alt={item.name} className='w-8 h-8 object-contain' width={32} height={32} />
                  <span className="text-xl leading-tight font-semibold tracking-normal font-[system-ui]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className='relative w-full max-w-sm h-144 transition-transform hover:scale-105 duration-300'>
          <div id='card3' className="w-full h-full">
            <Image src="/images/Frame3.png" alt="Tools Card" className="w-full h-full object-cover" width={384} height={576} sizes='(max-width: 1024px) 100vw, 384px' />
          </div>
          <div className='absolute inset-0 flex flex-col items-center pt-24 px-6 text-white select-none'>
            <h1 className="text-4xl tracking-[0.18em] font-extrabold mb-8 text-center uppercase font-[system-ui]">Tools</h1>
            <div className="flex flex-col gap-4 w-full px-2">
              {ToolsData.map((item, index) => (
                <div key={index} className='flex items-center gap-4 bg-black/40 p-2 rounded-lg backdrop-blur-sm hover:bg-black/60 transition-colors'>
                  <Image src={item.logo} alt={item.name} className='w-8 h-8 object-contain' width={32} height={32} />
                  <span className="text-xl leading-tight font-semibold tracking-normal font-[system-ui]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Skills