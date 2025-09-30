import Navbar2 from '@/components/ui/Navbar2'
import Image from 'next/image'
import React from 'react'
import titleIcon from '../../../assets/titleIcon.png'
import Link from 'next/link'

const BlogHero = ({ heading, cat = false }) => {
  return (
    <div className='w-full'>
      <div className="w-full bg-[#ebf0f4] flex flex-col justify-center items-center rounded-bl-3xl rounded-br-3xl">
        <Navbar2 />
        <div className="rounded-3xl blog-bg relative w-[95%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center mt-3 mb-6 sm:mb-10">
          <div className="w-[90%] sm:w-[85%] flex gap-3 justify-center items-start flex-col px-4 sm:px-0">
            <Image alt="sds" src={titleIcon} className="h-[20px] sm:h-[40px] w-auto" />
            <h1 className="exo text-white text-3xl  md:text-[60px] lg:text-[80px] font-medium leading-tight md:leading-[90px]">
              {cat ? `Category : ${heading}` : heading}
            </h1>
          </div>

          <div className="bottom-0 h-[50px] sm:h-[60px] px-4 sm:px-8 right-4 sm:right-10 md:right-28 absolute rounded-tl-2xl rounded-tr-2xl bg-[#ebf0f4] flex flex-wrap justify-center items-center gap-1">
            <Link
              href={'#'}
              className="exo font-medium text-xs sm:text-sm border-b-[1.5px] border-[#317b00] leading-[20px] sm:leading-[23px]"
            >
              Home
            </Link>
            <span className="text-zinc-400 exo font-medium text-xs sm:text-sm"> / </span>
            <p className="exo font-medium text-xs sm:text-sm leading-[20px] sm:leading-[23px]">
              {cat ? `Archive by Category "${heading}"` : heading}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHero
