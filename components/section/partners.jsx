'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        
        <div className="px-5 relative">
        {/* Custom navigation buttons */}
        <div className="absolute top-1/2 left-[25px]  z-10 transform -translate-y-1/2 cursor-pointer" ref={prevRef}>
          <ChevronLeft color='#ededede6' size={32}/>
        </div>
        <div className="absolute top-1/2 right-[25px] z-10 transform -translate-y-1/2 cursor-pointer" ref={nextRef}>
         <ChevronRight color='#ededede6' size={32}/>
        </div>

        <Swiper
          slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
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
          className="mySwiper max-w-[1300px] mx-auto"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[183px] relative rounded-3xl overflow-hidden">
                <img src={item.img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Partners
