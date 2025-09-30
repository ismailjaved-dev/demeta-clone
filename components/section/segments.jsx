'use client'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Segments = () => {

      useEffect(() => {
    AOS.init({
      duration: 1000 // Duration in milliseconds
    });
  }, []);

    const data = [
        {
            title: "For Entrepreneurs & Businesses",
            desc: "Set up your virtual office in Business Bay, host global conferences, and invest in digital real estate.",
            img: "/segments/img1.png"
        },
        {
            title: "For Content Creators & Developers",
            desc: "Build and monetize your innovations in Eureka, the creator's hub powered by AI and Blockchain.",
            img: "/segments/img2.png"
        },
        {
            title: "For Gamers & Developers",
            desc: "Step into Gameaholic, where immersive gameplay, E-Sports tournaments and user generated worlds redefine gaming.",
            img: "/segments/img3.png"
        },
        {
            title: "For Digital Investors & Property Owners",
            desc: "Claim your stake in the future of real estate through Business Bay's metaverse driven economy.",
            img: "/segments/img4.png"
        },
        {
            title: "For Entertainment Enthusiasts",
            desc: "Experience concerts, sports  events, and live shows in Dope, the entertainment capital of DaMeta1.",
            img: "/segments/img5.png"
        }
    ]

    return (
        <div className='bg-white  pt-16 '>
            <div className='px-5'>
                <div className='bg-[#1CD44C] w-full h-[2px] block '></div>
                <div className='max-w-[1140px] mx-auto flex flex-col gap-3 mt-6 sm:mt-10 mb-1'>
                    <h2 className='text-[34px] sm:text-[42px] tracking-[1.2px] text-center'>Audience Segments</h2>
                    <h3 className='text-[26px] sm:text-[31px] tracking-[1.2px] text-center'>A World Designed for Visionaries, Innovators & Dreamers</h3>
                    <p className='text-[16px] sm:text-[18px] font-normal text-center tracking-[1.2px] leading-[2] sm:leading-[2.5] exo'>The future belongs to those who dare to innovate, create, and lead. DaMeta1 is a transformative movement. Whether you are a business leader, a tech enthusiast, or a creative genius, DaMeta1 offers a new digital realm designed to nurture your ambitions.</p>
                </div>
            </div>

            <div className='bg-black px-5 pt-10 pb-20 text-white'>
                <div className='max-w-[1140px] mx-auto flex flex-wrap gap-5'>
                        { data.map((item, index)=>{
                            return (
                                <div data-aos={'fade-right'} key={index} className='flex flex-col items-center gap-3 border-2 rounded border-white p-3 group  hover:shadow-[0px_20px_40px_0px_rgba(0,244,17,0.97)] flex-1 transition-all duration-300 ease-in-out'>
                                    <div className='h-[313px] w-[313px] relative overflow-hidden bg-[#239a29] transition-all duration-500 ease-in-out group-hover:rounded-none rounded-[50%] hover:bg-transparent'>
                                        <img src={item.img} alt='' className='w-full h-full object-contain'/>
                                    </div>
                                    <h3 className='text-[24px] leading-[1.3em] tracking-[2px] text-center capitalize group-hover:text-[#239a29] transition-all duration-300 ease-in'>{item.title}</h3>
                                    <p className='text-[18px] font-normal leading-[1.6em] poppins text-center'>{item.desc}</p>
                                </div>
                            )
                        })}
                </div>

            </div>
        </div>
    )
}

export default Segments
