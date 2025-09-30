'use client'
import React,{useEffect, useState} from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronDown } from 'lucide-react'

const ContactBook = () => {

const  [state, setstate] = useState(false)
 const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Current scroll position (vertical)
      const documentHeight = document.documentElement.scrollHeight; // Total document height
      const windowHeight = window.innerHeight; // Visible window height

      // Calculate the percentage of the page scrolled
      const scrollPos = (currentScrollY / (documentHeight - windowHeight)) * 100;

       scrollPos > 3 && setActive(true)
       scrollPos < 3 && setActive(false)
     
  
    
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   const scrollToTop = () => {
    console.log('object')
    active &&
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className={`fixed z-100 bottom-[50px] right-[43px] bg-white text-black rounded-3xl  w-[50px] h-[73px] overflow-hidden flex items-center justify-center hover:bg-[#2bf568] transition duration-300 ease-in-out ${active ? 'opacity-100  cursor-pointer' : 'opacity-0'}`} onClick={()=>{scrollToTop()}}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="47" height="47">
<path d="M0 0 C15.51 0 31.02 0 47 0 C47 15.51 47 31.02 47 47 C31.49 47 15.98 47 0 47 C0 31.49 0 15.98 0 0 Z " fill="#00000000" transform="translate(0,0)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 1.32 2.66 2.64 3 4 C4.32 4.33 5.64 4.66 7 5 C6.67 5.99 6.34 6.98 6 8 C5.01 7.67 4.02 7.34 3 7 C2.67 6.34 2.34 5.68 2 5 C1.34 5 0.68 5 0 5 C-0.99 6.485 -0.99 6.485 -2 8 C-2.99 7.67 -3.98 7.34 -5 7 C-4.67 6.01 -4.34 5.02 -4 4 C-3.01 4 -2.02 4 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#000" transform="translate(23,22)"/>
</svg>
      </div>
       <Popover >
  <PopoverTrigger className="text-white fixed z-100 bottom-5 right-5 bg-black rounded-full cursor-pointer ">
    <div className='relative' onClick={()=>setstate(!state)} id='closeModal'>

<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle className="color-element" cx="24" cy="24" r="24" fill="#000"></circle> <path d="M34.5002 12.334H17.0002C16.3813 12.334 15.7878 12.5798 15.3502 13.0174C14.9127 13.455 14.6668 14.0485 14.6668 14.6673V18.1673H12.3335V20.5007H14.6668V22.834H12.3335V25.1673H14.6668V27.5007H12.3335V29.834H14.6668V33.334C14.6668 33.9528 14.9127 34.5463 15.3502 34.9839C15.7878 35.4215 16.3813 35.6673 17.0002 35.6673H34.5002C34.8096 35.6673 35.1063 35.5444 35.3251 35.3256C35.5439 35.1068 35.6668 34.8101 35.6668 34.5007V13.5007C35.6668 13.1912 35.5439 12.8945 35.3251 12.6757C35.1063 12.4569 34.8096 12.334 34.5002 12.334ZM25.1668 15.8328C27.0895 15.8328 28.6668 17.409 28.6668 19.3328C28.6635 20.2601 28.2937 21.1485 27.638 21.8044C26.9824 22.4602 26.0942 22.8303 25.1668 22.834C23.2453 22.834 21.6668 21.2555 21.6668 19.3328C21.6668 17.409 23.2453 15.8328 25.1668 15.8328ZM32.1668 31.0007H18.1668V30.1257C18.1668 27.5368 21.3227 24.8757 25.1668 24.8757C29.011 24.8757 32.1668 27.5368 32.1668 30.1257V31.0007Z" fill="white"></path> </svg>
    <svg viewBox="0 0 52 52" height="48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute z-100 top-0 transition-all duration-[500ms] ease-in-out ${state ? 'rotateRight opacity-100': 'rotateLeft opacity-0'}`}><ellipse cx="26" cy="26" rx="26" ry="26" fill="#A886CD"></ellipse><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)" fill="#ffffff"></rect><rect width="27.1433" height="3.89857" rx="1.94928" transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)" fill="#ffffff"></rect></svg>
    </div>

  </PopoverTrigger>
  <PopoverContent className="z-100 bg-white rounded-xl">
    <Card>
  <CardHeader>
    <CardTitle className="bg-[#202020] flex items-center justify-between px-3 py-3 text-[18px] exo text-white font-normal">Request For White Paper <ChevronDown color='white' className='cursor-pointer' onClick={()=>{document.getElementById('closeModal').click()}}/></CardTitle>
  
   
  </CardHeader>
  <CardContent className="max-h-[230px] overflow-y-scroll">
    <p className='text-[14px] text-[#000] font-light font-sans'>Email<span className='text-[18px] text-red-600 ml-[2px] font-medium'>*</span></p>
     <input placeholder='Enter your email address' type='email' className='font-light font-sans text-[16px] py-1 rounded px-2 border text-[#000] mb-2 border-[#000]/40 w-full'/>
         <p className='text-[14px] text-[#000] font-light font-sans'>Phone<span className='text-[18px] text-red-600 ml-[2px] font-medium'>*</span></p>
     <input placeholder='Enter your phone number' type='number' className='font-light font-sans text-[16px] py-1 rounded px-2 border text-[#000] mb-2 border-[#000]/40 w-full'/>
         <p className='text-[14px] text-[#000] font-light font-sans'>Message<span className='text-[18px] text-red-600 ml-[2px] font-medium'>*</span></p>
     <textarea placeholder='Enter your message'  rows={5} type='number' className='font-light font-sans text-[16px] py-1 rounded px-2 border text-[#000] mb-2 border-[#000]/40 w-full'></textarea>
   
  </CardContent>
   <CardFooter className="py-4">
    <button className='bg-[#49E670] text-[#202020] w-full text-center text-[18px] rounded leading-[2] manrope font-medium'>Submit</button>
   </CardFooter>
</Card>
  </PopoverContent>
</Popover>
    </div>
  )
}

export default ContactBook
