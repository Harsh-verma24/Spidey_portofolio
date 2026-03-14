"use client"
import Image from "next/image";
import Hero from "./components/home/Hero";
import VideoReveal from "./components/VideoReveal";
import { useState } from "react";
import Marque from "./components/Marque";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  return (

    <>
      {isVideoPlaying ?
       <VideoReveal onVideoEnd={() => setIsVideoPlaying(false)} /> : 
       <>
       <div id="home" className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Hero />
      </div>
      <Marque/>
      <div id="about">
        <About/>
      </div>
      <Marque/>
      <div id="contact">
        <Skills/>
      </div>
       </>
       }
    </>
  );
}
