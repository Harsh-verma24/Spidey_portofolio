import React from 'react'

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
  logo: "/logos/javascript.gif"
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
  name: "Spring Boot(still learning)",
  logo: "/logos/springboot.png"
},
]
const ToolsData = [{
  name: "Git",
  logo: "/logos/git.png"
},
{
  name:"Vercel",
  logo: "/logos/vercel.png"
},
{
  name: "Docker",
  logo: "/logos/docker.png"
}
]
const Skills = () => {
  return (
    <div className='flex items-center gap-8 h-screen flex-col w-screen justify-center'>
      <div><h1 className='text-[10rem]'>Skills</h1></div>
      <div className='flex rounded-2xl' >
        <section>
          <div id='card1'>
          <img src="/images/Frame1.png" alt="" />
        </div>
        <div className='fixed '>
          <h1>Frontend</h1>
          {frontendData.map((item, index) => (
            <div key={index} className='flex items-center gap-4'>
              <img src={item.logo} alt={item.name} className='w-8 h-8' />
              <span>{item.name}</span>
            </div>
          ))}

        </div>
        </section>
        <section><div id='card2'>
          <img src="/images/Frame2.png" alt="" />
        </div>
        <div>
          <h1>Backend</h1>
          {backendData.map((item, index) => (
            <div key={index} className='flex items-center gap-4'>
              <img src={item.logo} alt={item.name} className='w-8 h-8' />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        </section>
        <section><div id='card3'>
          <img src="/images/Frame3.png" alt="" />
        </div>
        <div>
          <h1>Tools</h1>
          {ToolsData.map((item, index) => (
            <div key={index} className='flex items-center gap-4'>
              <img src={item.logo} alt={item.name} className='w-8 h-8' />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        </section>
      </div>
    </div>
  )
}

export default Skills