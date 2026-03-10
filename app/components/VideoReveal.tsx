"use client"
import React from 'react'

const VideoReveal = ({ onVideoEnd }: { onVideoEnd: () => void }) => {
    const wrapperRef = React.useRef<HTMLDivElement|null>(null);
    const handleVideoEnd = () => {
        wrapperRef?.current?.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            onVideoEnd();
        }, 600);
    }
  return (
    <div 
    ref={wrapperRef}
    onClick={handleVideoEnd} className='h-screen w-screen fixed overflow-hidden transition-opacity bg-black top-0 left-0 z-50'>
        <video className='h-full w-screen' muted autoPlay onEnded={handleVideoEnd}>
            <source src='/video/loadingVideo.mp4' type='video/mp4' />
        </video>

    </div>
  )
}

export default VideoReveal