import React from 'react'
import ProjectCard from './ProjectCard'
import { ExternalLink } from 'lucide-react'

const Project = () => {
    return (
        <div className='px-4 md:px-8 py-16'>
            <div className="mb-12 flex items-center justify-center">
                <h1 className='text-6xl md:text-9xl font-medium text-white font-sans tracking-wide'>Projects</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center md:justify-evenly gap-8'>
                <ProjectCard name="Click & Collect" description="A full-featured e-commerce platform for seamless online shopping, cart management, and order collection." githubLink="https://github.com/Harsh-verma24/Click-And-Collect"
                    previewImg='/projects/c&c.png' />
                <ProjectCard name="Web Map" description="An interactive web-based map application for exploring and visualizing geographic data in real time." githubLink="https://github.com/Harsh-verma24/WebMap"
                    previewImg='/projects/webMap.png' />
            </div>
            <div className='flex justify-center mt-12 items-center'>
                <span><a href="https://anugoonj.com" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-xl md:text-3xl font-thin text-white/80 hover:text-white transition-colors duration-200 mt-1 w-fit leading-tight tracking-wider'>Contributed in Anugoonj 2026 <ExternalLink size={14} /></a></span>
            </div>
        </div>
    )
}

export default Project