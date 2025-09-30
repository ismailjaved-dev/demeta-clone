"use client";
import React from "react";
import Navbar from "../ui/Navbar";
import AnimatedBtn from "../ui/AnimatedBtn";

const Hero = () => {

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none blur-[1px]"
        src="https://www.youtube.com/embed/UxqUIZ6kBTI?autoplay=1&mute=1&controls=0&loop=1&playlist=UxqUIZ6kBTI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/80" />

      <div className="relative z-10 flex items-center justify-center flex-col gap-6 h-full text-white">
        <Navbar />

        <div className="sm:w-[80%] md:w-[45%]">
          <h1 className="text-5xl font-semibold tracking-[4.5px] leading-[54px] text-center mt-20">
            <span className="hidden md:inline">
              The Next Generation <br />
              Digital Immersive World <br />
              Is Here!
            </span>
            <span className="block md:hidden">
              The Next Generation Digital Immersive World Is Here!
            </span>
          </h1>
        </div>

        <div className="flex flex-col w-full">
          <h2 className="text-4xl tracking-[3.5px] font-normal leading-[45px] text-center">
            Enter the Future with DaMeta1
          </h2>
          <h3 className="text-3xl tracking-[3.5px] font-normal leading-[45px] text-center">
            Redefining how you Learn, Work, and Play
          </h3>
        </div>

        <AnimatedBtn />
      </div>

      <div className="border-[18px] border-[#1bd44c] flex justify-center items-center rounded-xl mx-4 my-12">
        <h1 className="text-4xl tracking-[1px] py-2 font-medium leading-[45px] text-center w-[80%] md:w-auto">
          <span className="hidden md:inline">
            Our First MVP <br /> Impact
          </span>
          <span className="block md:hidden">Our First MVP Impact</span>
        </h1>
      </div>

      <div className="mx-5">
        <div className="w-full border-t-[2px] border-[#1bd44c] flex justify-center items-center py-8">
          <h1 className="text-4xl tracking-[1px] py-3.5 font-normal leading-[45px] text-center w-[68%] md:w-auto">
            <span className="hidden md:inline">
              Connect With <br /> Us
            </span>
            <span className="block md:hidden">Connect With Us</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
