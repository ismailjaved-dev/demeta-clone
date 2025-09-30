import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import React from 'react'
import img from '../../../assets/what-bg.jpg'
import Footer from '@/components/ui/Footer'

const page = () => {
    return (
        <div className='relative bg-[#0E0E0E] pt-[150px] xl:pt-[250px]'>
            <Navbar />
            <h1 className='bg-black text-[#0D8D2E] text-[36px] sm:text-[46px] md:text-[54px] uppercase tracking-[4.6px] font-semibold text-center px-5 py-2'>EUREKA
            </h1>

            <div className='px-5 relative min-h-[100vh] overflow-hidden '>
                <div className='absolute bg-[#000]/70 w-full h-full z-10 left-0'></div>
                <Image src={'/explore/background8.jpg'} className='object-cover' fill alt=''/>

                <p className='relative z-10 text-[18px] sm:text-[25px] text-white exo font-normal tracking-[0.6px] max-w-[760px] ml-auto mr-[5%] py-15 sm:py-30' style={{ wordSpacing: "1px" }}>
                    Eureka in DaMeta1 is the dedicated continent for content creators and developers, built to harness the power of community-generated content. This vibrant hub offers state-of-the-art tools and technology, enabling creators and innovators from across the globe to collaborate in a single, immersive environment.
                    <br />
                    <br />
                    Eureka nurtures a thriving ecosystem where creativity knows no bounds, providing the perfect platform for individuals to develop, share, and bring their ideas to life. With its emphasis on innovation, Eureka encourages users to push the boundaries of what’s possible, making it the ultimate destination for those looking to create and contribute to the future of DaMeta1.
                </p>
            </div>

         

            <Footer />

        </div>
    )
}

export default page
