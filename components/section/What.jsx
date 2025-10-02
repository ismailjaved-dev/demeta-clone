"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";

import AOS from 'aos';
import 'aos/dist/aos.css';

const What = () => {
  const [activeText, setActiveText] = useState("Eureka for creators, developers, and innovators");


  useEffect(() => {
    AOS.init({
      duration: 1000 // Duration in milliseconds
    });
  }, []);


  const iconData = [
    { id: 1, text: "Eureka for creators, developers, and innovators", top: "10%", left: "-6%", iconUrl: "/animation/img1.png" },
    { id: 2, text: "Business Bay for enterprise and virtual real estate", top: "60%", left: "-8%", iconUrl: "/animation/img2.png" },
    { id: 3, text: "Dope for entertainment, culture, and creativity.", bottom: "-10%", left: "45%", iconUrl: "/animation/img3.png" },
    { id: 4, text: "Da1Ilmverse for immersive, AI powered education", top: "-15%", right: "20%", iconUrl: "/animation/img4.png" },
    { id: 5, text: "Gameaholic for competitive and social gaming experiences", top: "35%", right: "-15%", iconUrl: "/animation/img5.png" },
  ];



  return (
    <div className=" what-bg w-full flex justify-center items-center py-[150px] overflow-hidden" >
      <div className="max-w-[1200px] grid xl:grid-cols-2 gap-16 z-1" id="about">
        <div className=" flex gap-5 items-start justify-center flex-col" data-aos={'fade-right'}>
          <h1 className="text-4xl tracking-[1.3px] font-medium leading-[45px]">
            What is DaMeta1?
          </h1>
          <p className="poppins text-lg leading-[37px]">
            Take that first step towards a connected digital world
          </p>
          <p className="poppins text-lg leading-[37px]">
            It's where the virtual and physical world converge to unleash a new
            era of possibilities.
            <br /> Backed by cutting-edge technologies like AI, Blockchain and
            RealTech, DaMeta1 is designed as a thriving digital ecosystem that
            mirrors the complexity and vibrance of real life but with unlimited
            scalability.
          </p>
          <p className="poppins text-lg leading-[37px]">
            At its core, DaMeta1 is structured around 5 interconnected
            continents, each tailored to meet the needs of a modern digital
            society.
          </p>
        </div>
        <div
          className="relative min-h-[568px] max-w-[568px] pictureBg hidden xl:block"
        >
          <p className="absolute text-white text-[18px] poppins text-center max-w-[250px] z-10 left-[30%] top-[48%]">{activeText}</p>


          <div className=" h-[95%]  w-[95%] top-[2.5%] left-[2.5%] absolute border-4 border-black rounded-full shadow shadow-white spin-slow">
            {iconData.map(item => (

              <div
                key={item.id}
                onMouseOver={() => setActiveText(item.text)}
                className="absolute flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 z-20 spin-counter"
                style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
              >

                <div className="w-[192px] h-[192px] rounded-full p-[3px]  shadow-2xl overflow-hidden">

                  <div className="w-full h-full rounded-full bg-black outline-4 outline-white flex items-center justify-center p-[18px]">

                    <img
                      src={item.iconUrl}
                      alt={item.text}
                      className="object-contain "
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/000000/ffffff?text=Icon"; }} // Fallback
                    />
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
