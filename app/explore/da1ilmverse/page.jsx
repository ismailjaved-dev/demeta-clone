import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import React from 'react'
import Footer from '@/components/ui/Footer'
import { FaBusinessTime, FaCentos, FaGamepad, FaTripadvisor } from "react-icons/fa";
import { Button } from '@/components/ui/button';

const page = () => {



    return (
        <div className='relative bg-[#0E0E0E] pt-[150px] xl:pt-[250px]'>
            <Navbar />
            <h1 className='bg-black text-[#0D8D2E] text-[36px] sm:text-[46px] md:text-[54px] uppercase tracking-[4.6px] font-semibold text-center px-5 py-2'>Da1ilmverse (MVP)

            </h1>

            <div className='px-5 relative min-h-[100vh] overflow-hidden mb-10'>
                <div className='absolute bg-[#000]/70 w-full h-full z-10 left-0'></div>
                <Image src={'/explore/background9.jpg'} className='object-cover' fill alt='' />

                <p className='relative z-10 text-[18px] sm:text-[25px] text-white exo font-normal tracking-[0.6px] max-w-[720px] ml-auto mr-[5%] py-15 sm:py-30' style={{ wordSpacing: "1px" }}>
                    Da1ilmverse is a ground-breaking educational Metaverse platform that leverages virtual reality (VR) and artificial intelligence (AI) to create immersive, future-ready learning experiences. By enhancing not only the academic knowledge but also the mental attitude and skill set of children, Da1ilmverse prepares students to thrive in a rapidly evolving digital world.
                    <br />
                    <br />
                    The platform offers interactive virtual classrooms with AI-powered teachers, dynamic learning environments, and a virtual campus where students can explore complex concepts in a highly engaging and effective way. Through cutting-edge technology, personalized learning paths, and real-time feedback, Da1ilmverse nurtures resilience, adaptability, and creativity—key skills needed for future success. With Da1ilmverse, education becomes an empowering journey, transforming how students learn and grow for tomorrow’s challenges.
                </p>
            </div>

            <div className='px-5 relative min-h-[100vh] overflow-hidden mb-10'>
                <div className='absolute bg-[#000]/50 w-full h-full z-10 left-0'></div>
                <Image src={'/explore/background10.jpg'} className='object-cover' fill alt='' />
                <h3 className='font-semibold text-[#2BF568] text-[34px] tracking-[3.8px] leading-[1.3] relative z-10 max-w-[720px] ml-[5%] pb-5 mr-auto pt-15 sm:pt-30'>
                    IMMERSIVE LEARNING ENVIRONMENT
                </h3>
                <p className='relative z-10 text-[18px] sm:text-[25px] text-white poppins font-normal tracking-[0.6px] max-w-[720px] ml-[5%] mr-auto pb-15 sm:pb-30' style={{ wordSpacing: "1px" }}>
                    Da1ilmverse creates immersive learning environments that transform how students engage with educational content. Using advanced VR technology, these environments simulate real-world scenarios and interactive simulators that make learning more tangible and understandable. Students can conduct virtual experiments, explore historical sites, or dive into intricate biological systems, all within a controlled and safe virtual space. These immersive experiences are designed to stimulate curiosity and deepen comprehension by allowing students to learn through exploration and hands-on activities. The result is a more engaging and significant educational journey that goes beyond traditional textbooks and lectures.
                </p>
            </div>

            <div className='px-5 relative min-h-[100vh] overflow-hidden mb-10'>
                <div className='absolute bg-[#000]/50 w-full h-full z-10 left-0'></div>
                <Image src={'/explore/background11.jpg'} className='object-cover' fill alt='' />
                <h3 className='font-semibold text-[#2BF568] text-[34px] tracking-[3.8px] leading-[1.3] relative z-10 max-w-[720px] ml-[5%] pb-5 mr-auto pt-15 sm:pt-30'>
                    VIRTUAL CAMPUS
                </h3>
                <p className='relative z-10 text-[18px] sm:text-[25px] text-white poppins font-normal tracking-[0.6px] max-w-[720px] ml-[5%] mr-auto pb-15 sm:pb-30' style={{ wordSpacing: "1px" }}>
                    Da1ilmverse creates immersive learning environments that transform how students engage with educational content. Using advanced VR technology, these environments simulate real-world scenarios and interactive simulators that make learning more tangible and understandable. Students can conduct virtual experiments, explore historical sites, or dive into intricate biological systems, all within a controlled and safe virtual space. These immersive experiences are designed to stimulate curiosity and deepen comprehension by allowing students to learn through exploration and hands-on activities. The result is a more engaging and significant educational journey that goes beyond traditional textbooks and lectures.
                </p>
            </div>


            <div className='gradient w-fit rounded-full p-1 mx-auto my-10'>
        <Button className="relative group overflow-hidden w-[295px] text-[19px] bg-black  z-20  rounded-full">

        <span 
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-white
               transition-all duration-300 ease-in-out
               group-hover:-translate-x-2 group-hover:opacity-0
               opacity-100 translate-x-0"
        ></span>
        Explore Da1ilmverse
        <span
          className="absolute left-[260px] top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-white
               opacity-0 translate-x-2
               group-hover:translate-x-0 group-hover:opacity-100
               transition-all duration-300 ease-in-out"
        ></span>
      </Button>
      </div>

            <div className='grid lg:grid-cols-2 gap-10 px-5 pb-20'>
                  <div className='min-h-[350px] rounded-4xl overflow-hidden relative flex items-center justify-center '>
                    <div className='absolute bg-[#000]/75 w-full h-full z-10 left-0'></div>
                     <Image src={'/explore/back1.jpg'} className='object-cover' fill alt='' />
                      <div className='relative z-10 flex flex-col items-center justify-center px-10 text-center '>
                        <FaBusinessTime color='white' size={90}/>
                          <h3 className='text-[33px] tracking-[2.8px] text-white font-extrabold '>2024- Da1ilmverse MVP launch</h3>
                      </div>
                  </div>

                  


<div className='min-h-[350px] rounded-4xl overflow-hidden relative flex items-center justify-center '>
                    <div className='absolute bg-[#000]/75 w-full h-full z-10 left-0'></div>
                     <Image src={'/explore/back2.jpg'} className='object-cover' fill alt='' />
                      <div className='relative z-10 flex flex-col items-center justify-center px-10 text-center '>
                        <FaGamepad  color='white' size={80}/>
                          <h3 className='text-[33px] tracking-[2.8px] text-white font-extrabold '>2025- Ai integration with Da1 ilmverse</h3>
                      </div>
                  </div>


                  <div className='min-h-[350px] rounded-4xl overflow-hidden relative flex items-center justify-center '>
                    <div className='absolute bg-[#000]/75 w-full h-full z-10 left-0'></div>
                     <Image src={'/explore/back3.jpg'} className='object-cover' fill alt='' />
                      <div className='relative z-10 flex flex-col items-center justify-center px-10 text-center '>
                        <FaTripadvisor color='white' size={114}/>
                          <h3 className='text-[33px] tracking-[2.8px] text-white font-extrabold '>2026- Da1ilmverse Launch on Meta store</h3>
                      </div>
                  </div>





                  <div className='min-h-[350px] rounded-4xl overflow-hidden relative flex items-center justify-center '>
                    <div className='absolute bg-[#000]/75 w-full h-full z-10 left-0'></div>
                     <Image src={'/explore/back4.jpg'} className='object-cover' fill alt='' />
                      <div className='relative z-10 flex flex-col items-center justify-center px-10 text-center '>
                        <FaCentos  color='white' size={107}/>
                          <h3 className='text-[33px] tracking-[2.8px] text-white font-extrabold '>2027 Dope Continent Launch</h3>
                      </div>
                  </div>
                  
            </div>

            <Footer />

        </div>
    )
}

export default page
