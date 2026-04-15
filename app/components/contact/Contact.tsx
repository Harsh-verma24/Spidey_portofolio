import { Github, Linkedin, Mail, MapPinned, Twitter } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
        <section className='bg-black px-4 md:px-8 py-16'>
            <div className='mx-auto max-w-5xl'>
                <div className='mb-10 text-center'>
                    <h1 className='text-6xl md:text-9xl font-extralight text-white leading-tight tracking-wide'>Get In Touch</h1>
                    <p className='mt-4 text-lg md:text-2xl text-white/70 font-thin leading-tight tracking-wide'>
                        Feel free to reach out to me for any inquiries or opportunities.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg'>
                    <div className='p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/15'>
                        <h2 className='text-3xl md:text-4xl text-white font-thin leading-tight tracking-wide'>Contact Information</h2>
                        <div className='mt-6'>
                            <a
                                href='mailto:iamharshvrma@gmail.com'
                                className='inline-flex items-center gap-3 rounded-xl border border-white/20 px-4 py-3 text-white/90 hover:text-white hover:border-white/40 transition-colors duration-200 text-base md:text-2xl font-thin leading-tight tracking-wide'
                            >
                                <Mail size={18} />
                                iamharshvrma@gmail.com
                            </a>
                        </div><div className='mt-6'>
                            <a
                                className='inline-flex items-center gap-3 rounded-xl border border-white/20 px-4 py-3 text-white/90 hover:text-white hover:border-white/40 transition-colors duration-200 text-base md:text-2xl font-thin leading-tight tracking-wide'
                            >
                                <MapPinned size={18} />
                                New Delhi, India
                            </a>
                        </div>
                    </div>

                    <div className='p-6 md:p-8'>
                        <h2 className='text-3xl md:text-4xl text-white font-thin leading-tight tracking-wide'>Connect with Me</h2>
                        <div className='mt-6 flex flex-col gap-3'>
                            <a
                                href='https://github.com/Harsh-verma24'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center justify-between rounded-xl border border-white/20 px-4 py-3 text-white/85 hover:text-white hover:border-white/40 transition-colors duration-200 text-base md:text-2xl font-thin leading-tight tracking-wide'
                            >
                                <span className='flex items-center gap-3'>
                                    <Github size={18} />
                                    GitHub
                                </span>
                            </a>

                            <a
                                href='https://x.com/harsh_vrma24'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center justify-between rounded-xl border border-white/20 px-4 py-3 text-white/85 hover:text-white hover:border-white/40 transition-colors duration-200 text-base md:text-2xl font-thin leading-tight tracking-wide'
                            >
                                <span className='flex items-center gap-3'>
                                    <Twitter size={18} />
                                    Twitter
                                </span>
                            </a>

                            <a
                                href='https://www.linkedin.com/in/harsh-verma-68115a326/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center justify-between rounded-xl border border-white/20 px-4 py-3 text-white/85 hover:text-white hover:border-white/40 transition-colors duration-200 text-base md:text-2xl font-thin leading-tight tracking-wide'
                            >
                                <span className='flex items-center gap-3'>
                                    <Linkedin size={18} />
                                    LinkedIn
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact