'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';

const Partners = () => {
      const prevRef = useRef(null);
      const nextRef = useRef(null);

    const data = [
        {img:"/partners/img1.png"},
        {img:"/partners/img2.png"},
        {img:"/partners/img3.png"},
        {img:"/partners/img4.png"},
        {img:"/partners/img5.png"},
        {img:"/partners/img6.png"},
        {img:"/partners/img1.png"},
        {img:"/partners/img2.png"},
        {img:"/partners/img3.png"},
        {img:"/partners/img4.png"},
        {img:"/partners/img5.png"},
        {img:"/partners/img6.png"},
    ]

  return (
    <div>
      <div className="bg-white px-5 py-8">
        <div className="bg-[#1CD44C] w-full h-[2.5px] block my-12"></div>
        <h2 className="text-[32px] font tracking-[3.2px] capitalize text-center ">Our Showcase Partners</h2>
      </div> 
        
        <div className="px-5 relative grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[30px] items-end">
        {/* Custom navigation buttons */}
        <div className="absolute top-1/2 left-[25px]  z-10 transform -translate-y-1/2 cursor-pointer" ref={prevRef}>
          <ChevronLeft color='#ededede6' size={32}/>
        </div>
        <div className="absolute top-1/2 right-[25px] z-10 transform -translate-y-1/2 cursor-pointer" ref={nextRef}>
         <ChevronRight color='#ededede6' size={32}/>
        </div>

           <div className=' h-[200px] w-[110%] relative hidden sm:block'>
            <Link href={'https://www.forbes.com/sites/kolawolesamueladebayo/2025/06/27/how-ai-could-reshape-global-education---and-what-comes-after/'} target='_blank'>
          <Image src="/partners/forbes.png" fill alt="" className='object-contain'/>
            </Link>
            
           </div>
        <Swiper
          slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              500:{
slidesPerView: 1.5,
            spaceBetween: 30,
              },
              600: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
            loop={true}
            pagination={{clickable:true}}
            autoplay={{
              delay: 2500,
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
          className="mySwiper max-w-[1300px] mx-auto sm:col-span-2  md:col-span-3 lg:col-span-4 xl:col-span-5"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[170px] relative rounded-3xl overflow-hidden">
                <img src={item.img} alt={`Gallery image ${index + 1}`} className="w-[90%] h-[90%] m-auto object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Partners
