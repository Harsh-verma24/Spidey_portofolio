"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Hero from "./components/home/Hero";
import VideoReveal from "./components/VideoReveal";

const Marque = dynamic(() => import("./components/Marque"));
const About = dynamic(() => import("./components/about/About"));
const Skills = dynamic(() => import("./components/skills/Skills"));
const Project = dynamic(() => import("./components/projects/Project"));
const Contact = dynamic(() => import("./components/contact/Contact"));

export default function HomePageClient() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setIsVideoPlaying(false);
    }
  }, []);

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  if (isVideoPlaying) {
    return <VideoReveal onVideoEnd={handleVideoEnd} />;
  }

  return (
    <>
      <div
        id="home"
        className="animate-soft-fade select-none flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      >
        <Hero />
      </div>
      <Marque />
      <div className="animate-fade-up select-none" id="about">
        <About />
      </div>
      <Marque />
      <div className="animate-fade-up select-none" id="skills">
        <Skills />
      </div>
      <Marque />
      <div className="animate-fade-up select-none" id="project">
        <Project />
      </div>
      <Marque />
      <div className="animate-fade-up select-none" id="contact">
        <Contact />
      </div>
    </>
  );
}
