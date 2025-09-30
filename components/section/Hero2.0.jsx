import React from 'react'
import Navbar from '../ui/Navbar'
import { Button } from '../ui/button'

const Hero2 = () => {
  return (
    <div className='bg-[#000] pb-[100px] pt-[250px] lg:pt-[320px] flex flex-col justify-center relative overflow-hidden '>
        <Navbar />
         <iframe
        className="absolute z-0 top-0 left-0 w-full h-full  pointer-events-none blur-[1px]"
        style={{width:"1774.87px", height:"999px"}}

        src="https://www.youtube.com/embed/UxqUIZ6kBTI?autoplay=1&mute=1&controls=0&loop=1&playlist=UxqUIZ6kBTI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div className='absolute bg-[#000000FC] top-0 left-0 w-full h-full opacity-80 backdrop-blur-lg'></div>
      <div className='relative z-10 max-w-[1140px] mx-auto text-center text-white flex flex-col items-center px-5'>
         <h2 className='max-w-[775px] text-[36px] sm:text-[48px] capitalize font-semibold leading-[1] tracking-[4.6px] mb-8' style={{wordSpacing:"20px"}}>The Next Generation Digital Immersive World Is  Here!</h2>
         <h3 className='text-[28px] sm:text-[36px] capitalize font-normal tracking-[3.7px]' >  Enter the future with DaMeta1</h3>
         <h4 className='text-[22px] sm:text-[28px] capitalize font-normal tracking-[6.1px] mb-10   '>redefining how you learn, work, and play</h4>
        
                  <div className="relative p-1 w-fit rounded overflow-hidden">
       <div className="gradient absolute w-full h-full block clip z-10"></div>
      <Button className="relative group overflow-hidden ml-1">

        <span
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-white
               transition-all duration-300 ease-in-out
               group-hover:-translate-x-2 group-hover:opacity-0
               opacity-100 translate-x-0"
        ></span>
        Explore DaMeta1
        <span
          className="absolute left-[260px] top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-black
               opacity-0 translate-x-2
               group-hover:translate-x-0 group-hover:opacity-100
               transition-all duration-300 ease-in-out"
        ></span>
      </Button>
      </div>
        </div>  
    </div>
  )
}

export default Hero2
