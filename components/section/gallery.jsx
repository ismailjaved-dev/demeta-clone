'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

    useEffect(() => {
    AOS.init({
      duration: 1000 // Duration in milliseconds
    });
  }, []);

  const images = [
    { img: "/gallery/img1.jpg" },
    { img: "/gallery/img2.jpg" },
    { img: "/gallery/img3.jpg" },
    { img: "/gallery/img4.jpg" },
    { img: "/gallery/img5.jpg" },
    { img: "/gallery/img6.jpg" },
    { img: "/gallery/img7.jpg" },
    { img: "/gallery/img8.jpg" },
    { img: "/gallery/img9.jpg" },
    { img: "/gallery/img10.jpg" }
  ];

  return (
    <div className="relative">
      <div className="bg-white px-5 py-5">
        <div className="bg-[#1CD44C] w-full h-[2.5px] block"></div>
        <h2 className="text-[28px] font-semibold tracking-[3.8px] capitalize text-center mt-8">DaMeta1 Gallery</h2>
      </div>

      <div className="px-5 relative">
        {/* Custom navigation buttons */}
        <div className="absolute top-1/2 left-[25px]  z-10 transform -translate-y-1/2 cursor-pointer" ref={prevRef}>
          <ChevronLeft color='#ededede6'/>
        </div>
        <div className="absolute top-1/2 right-[25px] z-10 transform -translate-y-1/2 cursor-pointer" ref={nextRef}>
         <ChevronRight color='#ededede6'/>
        </div>

        <Swiper
         data-aos={'fade-up'}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40,
          }
        }}
          loop={true}
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
          modules={[Autoplay, Navigation]}
          className="mySwiper max-w-[1300px] mx-auto"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[281px] relative rounded-3xl overflow-hidden">
                <img src={item.img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
