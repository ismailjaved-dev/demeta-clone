import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import React from 'react'
import img from '../../../assets/what-bg.jpg'
import Footer from '@/components/ui/Footer'

const page = () => {
    return (
        <div className='relative bg-[#0E0E0E] pt-[150px] xl:pt-[250px]'>
            <Navbar />
            <h1 className='bg-black text-[#0D8D2E] text-[36px] sm:text-[46px] md:text-[54px] uppercase tracking-[4.6px] font-semibold text-center px-5 py-2'>Business bay
            </h1>

            <div className='px-5 relative min-h-[100vh] overflow-hidden'>
                <div className='absolute bg-[#000]/70 w-full h-full z-10 left-0'></div>
                <Image src={'/explore/background1.jpg'} className='object-cover' fill alt=''/>

                <p className='relative z-10 text-[18px] sm:text-[25px] text-white exo font-normal tracking-[0.6px] max-w-[760px] mx-auto py-15 sm:py-30' style={{ wordSpacing: "1px" }}>
                    Business Bay is the ultimate hub for professional activities and events within the DeMeta1 world. This dynamic continent offers a wide range of diverse facilities that cater to modern business needs, seamlessly integrating professional services with cutting-edge virtual technology. Users can explore fully immersive digital spaces, from luxurious office suites and conference rooms to event venues designed to host global meetings, corporate gatherings, and large-scale events.
                    <br />
                    <br />
                    Whether it's conducting a virtual board meeting, organizing a major conference, or hosting an international business summit, Business Bay provides the ideal environment to engage with clients and partners in a realistic and efficient manner.
                </p>
            </div>

            <div className='px-5 relative min-h-[100vh] overflow-hidden py-10'>
                <div className='absolute bg-[#000]/50 w-full h-full z-10 left-0 top-0'></div>
                <Image src={img} className='object-cover top-0' fill alt=''/>

                <p className='bg-[#000000DE]/85 relative z-10 text-[18px] sm:text-[25px] text-white exo font-normal tracking-[0.6px] max-w-[760px] mx-auto pt-10 px-8 pb-15' style={{ wordSpacing: "1px" }}>
                    Business Bay is the ultimate hub for professional activities and events within the DeMeta1 world. This dynamic continent offers a wide range of diverse facilities that cater to modern business needs, seamlessly integrating professional services with cutting-edge virtual technology. Users can explore fully immersive digital spaces, from luxurious office suites and conference rooms to event venues designed to host global meetings, corporate gatherings, and large-scale events.
                    <br />
                    <br />
                    Whether it's conducting a virtual board meeting, organizing a major conference, or hosting an international business summit, Business Bay provides the ideal environment to engage with clients and partners in a realistic and efficient manner.
                </p>
            </div>

            <Footer />

        </div>
    )
}

export default page
