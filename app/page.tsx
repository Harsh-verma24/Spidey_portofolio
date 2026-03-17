"use client"
import Image from "next/image";
import Hero from "./components/home/Hero";
import VideoReveal from "./components/VideoReveal";
import { useState } from "react";
import Marque from "./components/Marque";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  return (

    <>
      {isVideoPlaying ?
       <VideoReveal onVideoEnd={() => setIsVideoPlaying(false)} /> : 
       <>
       <div id="home" className="select-none flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Hero />
      </div>
      <Marque/>
      <div className="select-none" id="about">
        <About/>
      </div>
      <Marque/>
      <div className="select-none" id="skills">
        <Skills/>
      </div>
      <Marque/>
      <div className="select-none" id="project"><Project/></div>
      <Marque/>
      <div className="select-none" id="contact">
        <Contact/>
      </div>
       </>
       
       }
    </>
  );
}
