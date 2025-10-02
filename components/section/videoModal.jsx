'use client'
import React, { useState, useRef } from 'react'
import { IoMdPlay } from "react-icons/io";
import Image from 'next/image'
import { HeroVideoDialog } from '../ui/hero-video-dialog';

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


                <HeroVideoDialog
          className="relative flex mx-auto max-w-[1140px] max-h-[640px] overflow-hidden my-10"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/9HPg-zh9D4Q?si=NBwOwbVrPbeTUlVs"
          thumbnailSrc="https://dameta1.com/wp-content/uploads/2024/07/dameta1.png"
          thumbnailAlt="Dummy Video Thumbnail"
        />
     
           
       
    </div>
  );
}

export default VideoModal;
