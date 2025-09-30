'use client'
import React, { useState, useRef } from 'react'
import { IoMdPlay } from "react-icons/io";
import Image from 'next/image'

const VideoModal = () => {

  const [active, setActive] = useState(false)
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setActive(true);
    videoRef.current.play();  // Ensure video starts when play button is clicked
  }

  return (
    <div className='relative overflow-hidden py-10 px-5'>
        <Image src={'/feaetures/img4.jpg'} fill alt='' className='z-0'/>
        <h2 className='text-[28px] capitalize font-semibold text-center max-w-[1100px] mx-auto relative z-10'>
          A world with limitless opportunities is waiting for you! Are you ready to take that leap?
        </h2>
           
        <div className='relative z-100 isolate max-w-[1140] max-h-[640px] mx-auto my-10'>
          {!active && (
            <>
              <div className='block w-full h-full absolute z-10'
               style={{backgroundImage:'url(https://dameta1.com/wp-content/uploads/2024/07/dameta1.png)',
                backgroundPosition:"center",
                backgroundSize:"cover"
               }}
              ></div>
              <div className='w-full h-full absolute bg-[#000]/35 z-10 flex justify-center items-center'>
                <span 
                  className='border-white border-4 rounded-full flex justify-center items-center h-[100px] w-[100px] cursor-pointer' 
                  onClick={handlePlayClick}
                >
                  <IoMdPlay color="white" size={32}/>
                </span>
              </div>
            </>
          )}
          
          {/* Video element */}
          <video 
            ref={videoRef} 
            className='w-full h-full relative z-0'  
            muted 
            loop 
            controls={active}
            autoPlay={active}
          >
            <source src="/animation/video.mp4" type="video/mp4"/>
            <source src="/animation/video.mp4" type="video/ogg"/>
            Your browser does not support the video tag.
          </video>
        </div> 
    </div>
  );
}

export default VideoModal;
