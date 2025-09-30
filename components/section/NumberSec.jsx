"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const NumberSec = () => {

      useEffect(() => {
    AOS.init({
      duration: 1000 // Duration in milliseconds
    });
  }, []);

    return (
        <div className='w-full bg-black flex justify-center items-center'>
            <div className="w-[90%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 p-4 md:p-6">
                
                <div className="rounded-lg text-center" data-aos={'fade-left'}>
                    <h1 className='text-4xl md:text-5xl text-white tracking-[1px] pt-2 font-normal leading-[45px]'>
                        400<sup>+</sup>
                    </h1>
                    <h2 className='text-2xl md:text-3xl tracking-[2px] text-[#39fe1f] font-normal leading-[45px]'>
                        Institutes
                    </h2>
                </div>

                <div className="rounded-lg text-center" data-aos={'fade-left'}>
                    <h1 className='text-3xl md:text-4xl text-white tracking-[1px] pt-2 font-normal leading-[45px]'>
                        500,000
                    </h1>
                    <h2 className='text-2xl md:text-3xl tracking-[2px] text-[#39fe1f] font-normal leading-[45px]'>
                        Users
                    </h2>
                </div>

                <div className="rounded-lg text-center">
                    <h1 className='text-4xl md:text-5xl text-white tracking-[1px] pt-2 font-normal leading-[45px]' data-aos={'fade-right'}>
                        2
                    </h1>
                    <h2 className='text-2xl md:text-3xl tracking-[2px] text-[#39fe1f] font-normal leading-[45px]' data-aos={'fade-left'}>
                        Continents Live
                    </h2>
                </div>

                <div className="rounded-lg text-center" data-aos={'fade-left'}>
                    <h1 className='text-3xl md:text-4xl text-white tracking-[1px] pt-2 font-normal leading-[45px]'>
                        400,000<sup>+</sup>
                    </h1>
                    <h2 className='text-2xl md:text-3xl tracking-[2px] text-[#39fe1f] font-normal leading-[45px]'>
                        Students
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default NumberSec
