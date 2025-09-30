import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import React from 'react'
import Footer from '@/components/ui/Footer'

const page = () => {
    return (
        <div className='relative bg-[#0E0E0E] pt-[150px] xl:pt-[250px]'>
            <Navbar />
            <h1 className='bg-black text-[#0D8D2E] text-[36px] sm:text-[46px] md:text-[54px] uppercase tracking-[4.6px] font-semibold text-center px-5 py-2'>GAMEAHOLIC
            </h1>

          

            <div className='px-5 relative min-h-[100vh] overflow-hidden py-10'>
                <div className='absolute bg-[#000]/50 w-full h-full z-10 left-0 top-0'></div>
                <Image src={'/explore/background6.jpg'} className='object-cover top-0 !w-[170%] !h-[133%]' fill alt='' style={{objectPosition:"left"}}/>

                <p className='bg-[#000000DE]/85 relative z-10 text-[18px] sm:text-[25px] text-white exo font-normal tracking-[0.6px] max-w-[760px] pt-10 px-8 pb-15' style={{ wordSpacing: "1px" }}>
                   Gameaholic is the ultimate virtual gaming hub within DaMeta1, offering a complete and immersive gaming experience. From play-to-earn games to user-created adventures, this continent is designed to be a thriving community where gamers, developers, and creators can connect and compete.
                    <br />
                    <br />
                    Key Features:
                    <br/>   
                    <ul className='leading-[1.3] pl-5'>
                        <li>Regular gaming tournaments to showcase skills and earn rewards</li>
                        <li>Virtual lounges for socializing and networking</li>
                        <li>Opportunities for both casual and competitive players</li>
                        <li>Platform for user-generated gaming content</li>
                    </ul>
                    <br/>
                    <br/>
                    As the premier gaming destination in the DaMeta1 Metaverse, Gameaholic provides endless entertainment and community engagement for gaming enthusiasts of all levels.
                </p>
            </div>

            <Footer />

        </div>
    )
}

export default page
