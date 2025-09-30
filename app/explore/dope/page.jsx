import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import React from 'react'
import Footer from '@/components/ui/Footer'

const page = () => {
    return (
        <div className='relative bg-[#0E0E0E] pt-[150px] xl:pt-[250px]'>
            <Navbar />
            <h1 className='bg-black text-[#0D8D2E] text-[36px] sm:text-[46px] md:text-[54px] uppercase tracking-[4.6px] font-semibold text-center px-5 py-2'>DOPE

            </h1>

          

            <div className='px-5 relative min-h-[100vh] overflow-hidden py-10'>
                <div className='absolute bg-[#000]/50 w-full h-full z-10 left-0 top-0'></div>
                <Image src={'/explore/background7.jpg'} className='object-cover top-0 ' fill alt='' />

                <p className='mx-auto bg-[#000000DE]/85 relative z-10 text-[18px] sm:text-[25px] text-white exo font-normal tracking-[0.6px] max-w-[760px] pt-10 px-8 pb-15' style={{ wordSpacing: "1px" }}>
                   Dope is the premier entertainment hub within the DaMeta1 universe, offering an expansive array of entertainment options. This vibrant continent features:
                   
                    <br/>   
                    <ul className='leading-[1.3] pl-5'>
                        <li>Sports arenas</li>
                        <li>Live TV broadcasts</li>
                        <li>Music concerts</li>
                        <li>Cinema halls</li>
                    </ul>
                    <br/>
                    <br/>
                    All designed to provide an unparalleled entertainment experience.
                    <br/>
                    <br/>
                    Users can immerse themselves in a rich tapestry of cultural and musical events, purchasing tickets and passes to explore everything Dope has to offer. From electrifying live performances to thrilling activities, Dope ensures a continuous stream of excitement and entertainment, catering to all tastes and preferences.   
                </p>
            </div>

            <Footer />

        </div>
    )
}

export default page
