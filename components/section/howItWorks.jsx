'use client'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const HowItWorks = () => {

   const [active, setActive] = useState(false)

       useEffect(() => {
       AOS.init({
         duration: 1000 // Duration in milliseconds
       });
     }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Current scroll position (vertical)
      const documentHeight = document.documentElement.scrollHeight; // Total document height
      const windowHeight = window.innerHeight; // Visible window height

      // Calculate the percentage of the page scrolled
      const scrollPos = (currentScrollY / (documentHeight - windowHeight)) * 100;

       scrollPos > 43 && setActive(true)
       scrollPos < 43 && setActive(false)
  
    
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  

    

    const data =[
        {
            title:"Create Your Epitome",
            desc:"Design your unique avatar, your personal gateway to DaMeta1's Metaverse.",
            img:<svg aria-hidden="true" className="e-font-icon-svg e-fab-creative-commons-by" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M314.9 194.4v101.4h-28.3v120.5h-77.1V295.9h-28.3V194.4c0-4.4 1.6-8.2 4.6-11.3 3.1-3.1 6.9-4.7 11.3-4.7H299c4.1 0 7.8 1.6 11.1 4.7 3.1 3.2 4.8 6.9 4.8 11.3zm-101.5-63.7c0-23.3 11.5-35 34.5-35s34.5 11.7 34.5 35c0 23-11.5 34.5-34.5 34.5s-34.5-11.5-34.5-34.5zM247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3z"></path></svg>,
        },
        {
            title:"Step Through Accession",
            desc:"Enter the hub continent, explore maps and tours, then choose one of five specialized worlds: Da1Ilmverse - Immersive Learning Business Bay - Virtual Real Estate & Commerce Eureka - Creator Innovation",
            img:<svg aria-hidden="true" className="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>,
        },
        {
            title:"Learn- Build - Earn",
            desc:"Learn in VR classrooms with AI-powered teachers. Earn rewards through challenges, play-to-earn games, and virtual commerce. Build your own experiences and community content with state of the art tools.",
            img:<svg aria-hidden="true" className="e-font-icon-svg e-fab-leanpub" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M386.539 111.485l15.096 248.955-10.979-.275c-36.232-.824-71.64 8.783-102.657 27.997-31.016-19.214-66.424-27.997-102.657-27.997-45.564 0-82.07 10.705-123.516 27.723L93.117 129.6c28.546-11.803 61.484-18.115 92.226-18.115 41.173 0 73.836 13.175 102.657 42.544 27.723-28.271 59.013-41.721 98.539-42.544zM569.07 448c-25.526 0-47.485-5.215-70.542-15.645-34.31-15.645-69.993-24.978-107.871-24.978-38.977 0-74.934 12.901-102.657 40.623-27.723-27.723-63.68-40.623-102.657-40.623-37.878 0-73.561 9.333-107.871 24.978C55.239 442.236 32.731 448 8.303 448H6.93L49.475 98.859C88.726 76.626 136.486 64 181.775 64 218.83 64 256.984 71.685 288 93.095 319.016 71.685 357.17 64 394.225 64c45.289 0 93.049 12.626 132.3 34.859L569.07 448zm-43.368-44.741l-34.036-280.246c-30.742-13.999-67.248-21.41-101.009-21.41-38.428 0-74.385 12.077-102.657 38.702-28.272-26.625-64.228-38.702-102.657-38.702-33.761 0-70.267 7.411-101.009 21.41L50.298 403.259c47.211-19.487 82.894-33.486 135.045-33.486 37.604 0 70.817 9.606 102.657 29.644 31.84-20.038 65.052-29.644 102.657-29.644 52.151 0 87.834 13.999 135.045 33.486z"></path></svg>,
        },
        {
            title:"Own & Trade Assets",
            desc:"Secure virtual land, NFTs, and digital property in Business Bay's marketplace, buy, lease, or trade with confidence.",
            img:<svg aria-hidden="true" className="e-font-icon-svg e-fab-trade-federation" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 8.8c-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248zm0 482.8c-129.7 0-234.8-105.1-234.8-234.8S118.3 22 248 22s234.8 105.1 234.8 234.8S377.7 491.6 248 491.6zm155.1-328.5v-46.8H209.3V198H54.2l36.7 46h117.7v196.8h48.8V245h83.3v-47h-83.3v-34.8h145.7zm-73.3 45.1v23.9h-82.9v197.4h-26.8V232.1H96.3l-20.1-23.9h143.9v-80.6h171.8V152h-145v56.2zm-161.3-69l-12.4-20.7 2.1 23.8-23.5 5.4 23.3 5.4-2.1 24 12.3-20.5 22.2 9.5-15.7-18.1 15.8-18.1zm-29.6-19.7l9.3-11.5-12.7 5.9-8-12.4 1.7 13.9-14.3 3.8 13.7 2.7-.8 14.7 6.8-12.2 13.8 5.3zm165.4 145.2l-13.1 5.6-7.3-12.2 1.3 14.2-13.9 3.2 13.9 3.2-1.2 14.2 7.3-12.2 13.1 5.5-9.4-10.7zm106.9-77.2l-20.9 9.1-12-19.6 2.2 22.7-22.3 5.4 22.2 4.9-1.8 22.9 11.5-19.6 21.2 8.8-15.1-17zM248 29.9c-125.3 0-226.9 101.6-226.9 226.9S122.7 483.7 248 483.7s226.9-101.6 226.9-226.9S373.3 29.9 248 29.9zM342.6 196v51h-83.3v195.7h-52.7V245.9H89.9l-40-49.9h157.4v-81.6h197.8v50.7H259.4V196zM248 43.2c60.3 0 114.8 25 153.6 65.2H202.5V190H45.1C73.1 104.8 153.4 43.2 248 43.2zm0 427.1c-117.9 0-213.6-95.6-213.6-213.5 0-21.2 3.1-41.8 8.9-61.1L87.1 252h114.7v196.8h64.6V253h83.3v-62.7h-83.2v-19.2h145.6v-50.8c30.8 37 49.3 84.6 49.3 136.5.1 117.9-95.5 213.5-213.4 213.5zM178.8 275l-11-21.4 1.7 24.5-23.7 3.9 23.8 5.9-3.7 23.8 13-20.9 21.5 10.8-15.8-18.8 16.9-17.1z"></path></svg>},

        {
            title:"Connect Globally",
            desc:"Join real time events, corporate meetups, and social gatherings across continents. Network, collaborate, and grow your digital footprint worldwide.",
            img:<svg aria-hidden="true" className="e-font-icon-svg e-fas-globe" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
        },

    ]

  return (
    <div className='bg-black p-8'>
       <h2 className='text-[36px] sm:text-[48px] font-medium tracking-[4.3px] text-[#1CD44C] bg-white px-5 py-1 leading-none text-center'>How It Works  </h2>
      <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-10 max-w-[1330px] mx-auto my-20 relative'>
         {active && <span className='bg-[#1CD44C]  left-[3%] top-[95px] h-1 rounded absolute lineAnimation hidden lg:block'></span>}
          {
            data.map((res,index)=>{
                return(
                    <div className='flex flex-col gap-5 text-center items-center text-white' key={index} data-aos={'fade-up'} data-aos-duration={index+1+400}>
                        <div className='relative flex w-[180px] h-[180px] items-center justify-center bg-white rounded-full'>
                            <span className='bg-[#1CD44C] w-14 h-14 rounded-full flex items-center justify-center absolute right-[-3px] top-[-7px] text-[20px] exo'>
                               {index+1}.
                            </span>
                           <span className='h-15 w-15'>
                            {res.img}
                           </span>
                        </div>
                           <h3 className='text-[25px] tracking-[0.5px]'>{res.title}</h3>
                           <p className='text-[18px] exo'>{res.desc}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default HowItWorks
