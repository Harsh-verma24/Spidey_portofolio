"use client"
import Image from "next/image";
import Hero from "./components/home/Hero";
import VideoReveal from "./components/VideoReveal";
import { useState } from "react";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  return (
      <>
      <VideoReveal onVideoEnd={() => setIsVideoPlaying(false)} />
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
    </div>
  </>
  );
}
