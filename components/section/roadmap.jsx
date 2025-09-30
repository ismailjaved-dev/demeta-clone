'use client'
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Roadmap = () => {

      useEffect(() => {
    AOS.init({
      duration: 1000 // Duration in milliseconds
    });
  }, []);

    const data = [
        {
            title: '2021: Idea Inception',
            img: "/roadmap/img1.jpg",
        },
        {
            title: '2023: First Whitepaper',
            img: "/roadmap/img2.jpg",
        },
        {
            title: '2024: Da1ilmverse MVP',
            img: "/roadmap/img3.jpg",
        },
        {
            title: '2025: AI Integration',
            img: "/roadmap/img4.jpg",
        },
        {
            title: '2026: Meta Store Launch',
            img: "/roadmap/img5.png",
            color:"#137F108A"
        },
        {
            title: '2027: Dope Continent',
            img: "/roadmap/img6.jpg",
        },
        {
            title: '2028: Ecosystem Expansion',
            img: "/roadmap/img7.jpg",
        },
    ]

    const prevRef = useRef(null);
          const nextRef = useRef(null);

    return (
        <div className='bg-white px-5 py-8'>
            <div className="bg-[#1CD44C] w-full h-[2.5px] block my-6 sm:my-12 max-w-[1140px] mx-auto"></div>
            <h2 className='text-[36px] sm:text-[48px] tracking-[4.5px] text-center'>The DaMeta1 Roadmap</h2>
            <h2 className='text-[28px] sm:text-[36px] tracking-[4.5px] text-center font-extralight my-3'>Shaping the Digital Future</h2>
            <h4 className='text-[22px] sm:text-[26px] tracking-[4.5px] text-center font-normal text-[#1cd44d]'>The Evolution of the Metaverse Starts Here</h4>
              
               <div className=" relative">
                      {/* Custom navigation buttons */}
                      <div className="absolute top-1/2 left-[-7px] sm:left-[15px]  z-10 transform -translate-y-1/2 cursor-pointer" ref={prevRef}>
                        <ChevronLeft color='#ededede6' size={32}/>
                      </div>
                      <div className="absolute top-1/2 right-[-7px] sm:right-[15px] z-10 transform -translate-y-1/2 cursor-pointer" ref={nextRef}>
                       <ChevronRight color='#ededede6' size={32}/>
                      </div>
                  

              <Swiper 
                          loop={true}
                          pagination={{clickable:true}}
                          autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                          }}
                          navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                          }}
                          onBeforeInit={(swiper) => {
                            // Attach navigation refs before swiper initializes
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                          }}
                          modules={[Pagination,Autoplay, Navigation]}
              className="mySwiper shadow-[0px_0px_100px_14px_rgba(0,115,8,0.98)] hover:shadow-none transition-all duration-300 ease-in-out mt-12">
        
                   {data.map((item, index) => {
                    return(
                        <SwiperSlide className='min-h-[380px] sm:min-h-[445px] w-full !flex justify-center items-center relative ' key={index}>
                            <div className={`absolute w-full h-full top-0  z-1 ${item.color && ' bg-[#137F108A]'}`}></div>
             <Image src={item.img} alt="" fill className='object-cover z-0' />
             <div className='relative z-10 text-white text-center' data-aos={'fade-up'}>
                <h2 className='text-[36px] sm:text-[50px] tracking-[5.6px] font-semibold leading-none'>{item.title}</h2>
                <button className='border-2 border-white poppins py-3 px-6 text-[15px] rounded-[3px] leading-none mt-[30px] cursor-pointer'>Click Here</button>
             </div>
        </SwiperSlide>
                    )
                   })}
      </Swiper>
    </div>
        </div>
    )
}

export default Roadmap
