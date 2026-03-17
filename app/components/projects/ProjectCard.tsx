import { ExternalLink } from 'lucide-react';
import React from 'react'
interface ProjectCardProps {
    name: string;
    description: string;
    githubLink: string;
    previewImg?: string;
}
const ProjectCard = ({ name, description, githubLink, previewImg }: ProjectCardProps) => {
    return (
        <div className='flex flex-col w-full md:w-96 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl hover:border-white/40 transition-all duration-300'>
            {previewImg && (
                <div className='w-full h-48 md:h-44 overflow-hidden'>
                    <img src={previewImg} alt={name} className='w-full h-full object-cover' />
                </div>
            )}
            <div className='flex flex-col gap-3 p-5'>
                <h1 className='text-2xl md:text-3xl font-thin text-white leading-tight tracking-wider'>{name}</h1>
                <p className='text-base md:text-xl font-thin text-white/70 leading-tight tracking-wider'>{description}</p>
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 text-base md:text-xl font-thin text-white/80 hover:text-white transition-colors duration-200 mt-1 w-fit leading-tight tracking-wider'
                >
                    View on GitHub <ExternalLink size={14} />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard