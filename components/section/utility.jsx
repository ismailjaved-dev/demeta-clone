import React from 'react'
import { TextAnimate } from '../ui/text-animate'

const Utility = () => {
    return (
        <div className='bg-white px-5 pb-10 '>

            <TextAnimate animation="slideUp" by="word" duration={0.5} className='text-[36px] sm:text-[48px] tracking-[4px] text-center '>
                DaMeta1 Utility Token
            </TextAnimate>
            <p className='text-[18px] tracking-[1.1px] text-center font-light my-5 max-w-[1000px] mx-auto poppins' style={{ wordSpacing: "4px" }}>
                DaMeta1 is a next generation ecosystem built for those who dare to evolve.  From entrepreneurs and educators to gamers and innovators,

                 DaMeta1 delivers cutting-edge, immersive experiences that transform how we engage, learn, create, and collaborate.
                 </p>
                 <ul className='text-[18px] tracking-[1.1px]  font-light my-5 max-w-[900px] mx-auto poppins'>
                    <li className='mt-3'>
                        <span className='font-semibold text-[#169135]'>Da1ilmverse (Education)-</span> Provides access to virtual classrooms, learning hubs, NFT certifications, and knowledge exchanges, with rewards for progress and achievement.
                    </li>
                    <li className='mt-3'>
                        <span className='font-semibold text-[#169135]'>Business Bay (Business)-</span> Drives secure transactions, smart contracts, and ownership of virtual properties, enterprises, and marketplaces.
                    </li>
                    <li className='mt-3'>
                        <span className='font-semibold text-[#169135]'>Gameaholic (Gaming)-</span> Is used as in-game currency for upgrades, tournaments, rewards, and player-to-player trades without fees.
                    </li>
                    <li className='mt-3'>
                        <span className='font-semibold text-[#169135]'>Dope (Entertainment)-</span> Provides access to immersive concerts, events, movies, and interactive entertainment experiences.
                    </li>
                    <li className='mt-3'>
                        <span className='font-semibold text-[#169135]'>Eureka (Creators & Innovators)-</span> Powers creator tools, content publishing, AI spaces, and new project development throughout the ecosystem.
                    </li>
                 </ul>

                  <p className='text-[18px] tracking-[1.1px] font-light my-8 max-w-[1000px] mx-auto poppins' style={{ wordSpacing: "4px" }}>
                With DMU at its center, DaMeta1's continents remain interconnected, prosperous, and prepared for infinite possibilities.
                 </p>

        </div>
    )
}

export default Utility
