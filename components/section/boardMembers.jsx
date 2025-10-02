import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BoardMembers = () => {

    const data = [
        {
            name: "Waqas Suhail",
            role: "CEO & Co-Founder",
            img: "/boardMembers/img1.jpg",
            desc: "A tech industry veteran with 26 years building and scaling enterprises across Asia, Europe, and the Middle East. Waqas aligns DaMeta1's vision with strategic goals to drive global growth.",
            href: "https://www.linkedin.com/in/waqas-suhail-80948813/"
        },
        {
            name: "Jawad Ijaz ",
            role: "CO-FOUNDER & CTO",
            img: "/boardMembers/img2.png",
            desc: "An innovation leader dedicated to pioneering transformative tech solutions. Jawad heads product and engineering, empowering institutions with next-gen learning and management tools.",
            href: "https://www.linkedin.com/in/jawad-ijaz/"
        },
        {
            name: "Faisal Suhail",
            role: "CHIEF MARKETING OFFICER",
            img: "/boardMembers/img3.jpg",
            desc: "Bringing 25+ years of global brand and agency experience, Faisal crafts tailored marketing strategies for diverse markets, ensuring DaMeta1's message resonates worldwide.",
            href: "https://www.linkedin.com/in/faisal-suhail-241b33275/"
        },
        {
            name: "Turky Almasmari",
            role: "CHIEF STRATEGY BUSINESS ACQUISITION OFFICER",
            img: "/boardMembers/img4.jpg",
            desc: "With 29 years across telecom, defense, and real estate, Turky provides visionary leadership and strategic insights that drive business transformation and acquisition.",
            href: "https://www.linkedin.com/in/eng-turky-al-mesmari-70241556/"
        },
        {
            name: "Jasaira Kamal",
            role: "CHIEF GROWTH AND INVESTMENT OFFICER",
            img: "/boardMembers/img5.jpg",
            desc: "With 20+ years of experience in financial services and angel investment ventures.  As Chief Growth and Investment Officer, she focuses on building strong investor relationships to drive recurrent investments and financial endorsements",
            href: "https://www.linkedin.com/in/jasaira/"
        },
        {
            name: "Tunku Fauzi Malek",
            role: "Director of Data & Analytics",
            img: "/boardMembers/img6.png",
            desc: "Over 20 years in tech development and BI, Marko specializes in data-driven digital transformation, leveraging advanced analytics to inform DaMeta1's strategic decisions.",
            href: "https://www.linkedin.com/in/tunku-fauzi-malek-797b392a/  "
        },
        {
            name: "Essa Al Harti ",
            role: "CHIEF PARTNERSHIP OFFICER",
            img: "/boardMembers/img7.jpg",
            desc: "A collaborative leader focused on forging high-value partnerships and efficient processes that fuel DaMeta1's sustainable growth and mission fulfillment.",
            href: "#"
        }
    ]

    return (
        <>
        <div className='bg-white px-5 py-5'>
            <div className='bg-[#1CD44C] w-full h-[2.5px] block '></div>
            <h2 className='text-[28px] font-semibold tracking-[3.8px] capitalize text-center mt-6 sm:mt-12'>Our Board Directors</h2>
        </div>
        <div className='bg-black py-10 md:py-20 text-center px-5 '>
            <div className='max-w-[1100px] mx-auto sm:grid-cols-2 grid md:grid-cols-3 gap-10 lg:gap-20'>
                {
                    data.map((res, index) => {
                        return (
                            <div className='flex flex-col gap-4 items-center relative' key={index}>
                                <div className='bg-[#000] h-full w-full absolute top-0 left-0 z-10  opacity-0  hover:opacity-100 transition-all duration-700 ease-in-out p-5 flex flex-col justify-center text-white text-[16px] poppins'>
                                    <p>{res.desc}</p>
                                    <a href={res.href} target='_blank' className='leading-none bg-[#293BA0] text-[20px] mt-[15px] px-[18px] py-[14px] w-fit font-sans mx-auto flex items-center gap-[5px] rounded-sm hover:bg-black transition-all duration-300 ease-in-out'>
                                        LinkedIn
                                        <svg
                                            aria-hidden="true"
                                            className="ea-flipbox-icon e-font-icon-svg e-fab-linkedin w-4 h-4 fill-white"
                                            viewBox="0 0 448 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                        </svg>
                                        </a>
                                </div>
                                <div className='block min-h-[220px] w-full relative'>
                                    <Image src={res.img} fill alt='' className='object-contain' />
                                </div>
                                <h3 className='text-[23px] tracking-[2.5px] text-white' style={{ wordSpacing: '4px' }}>{res.name}</h3>
                                <h3 className='text-[18px] tracking-[3.2px] text-white' >{res.role}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default BoardMembers
