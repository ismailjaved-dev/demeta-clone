import React from 'react'
import { NumberTicker } from '../ui/number-ticker'

const University = () => {
  return (
    <div>
      <div className='max-w-[1140px] mx-auto  py-10'>
        <h2 className='text-[#1CD44C] text-[28px] sm:text-[36px] md:text-[48px] font-semibold text-center bg-black tracking-[7.4px]'>Ilmversity Integration</h2>
        <div className='grid md:grid-cols-2 gap-10 mt-10 px-5'>
          <div className='min-h-[340px]'>
            <iframe
              src={'https://www.youtube.com/embed/ZUa-HkrY_nI?si=v85iAGbHqKNVu0OS'}
              title="Hero Video player"
              className="size-full "
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <p className='text-center text-[20px] font-normal poppins tracking-[-0.4px] mt-5 px-2' style={{ wordSpacing: "2px" }}>Powering the Knowledge Continent with AI powered Academic Management : Through our partnership with Ilmversity, Da1Ilmverse brings forth a proven, school tested Learning,Academic and Administrative Management System (LAAM) into the Metaverse, enriching every learning experience with real world educational rigor.</p>
        </div>
      </div>
      <div className='bg-black pb-3'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5  max-w-[1100px] mx-auto'>
          <div className='flex flex-col items-center '>
            <span className="text-[38px] font-semibold tracking-[2.7px] whitespace-pre-wrap text-[#1CD44C]">

              <NumberTicker
                value={400}
                className="text-[38px] font-semibold tracking-[2.7px] whitespace-pre-wrap text-[#1CD44C]"
              />+
            </span>
            <p className='text-[30px] font-normal text-white leading-[1.1]'>Schools</p>

          </div>
          <div className='flex flex-col items-center '>
            <span className="text-[38px] font-semibold tracking-[2.7px] whitespace-pre-wrap text-[#1CD44C] flex">

              <NumberTicker
                value={"300000"}
                className="text-[38px] font-semibold tracking-[2.7px] whitespace-pre-wrap text-[#1CD44C]"
              /><span>+</span>
            </span>
            <p className='text-[30px] font-normal text-white leading-[1.1]'>Users</p>

          </div>
          <div className='flex flex-col items-center  '>
            <span className="text-[38px] font-semibold tracking-[2.7px] whitespace-pre-wrap text-[#1CD44C]">

              <NumberTicker
                value={20}
                className="text-[38px] font-semibold tracking-[2.7px] whitespace-pre-wrap text-[#1CD44C]"
              />+
            </span>
            <p className='text-[30px] font-normal text-white leading-[1.1]'>Cities</p>

          </div>
          <div className='flex flex-col items-center '>
            <span className="text-[38px] font-semibold tracking-[2.7px] whitespace-pre-wrap text-[#1CD44C] flex">

              <NumberTicker
                value={"12000"}
                className="text-[38px] font-semibold tracking-[2.7px] whitespace-pre-wrap text-[#1CD44C]"
              /><span>+</span>
            </span>
            <p className='text-[30px] font-normal text-white leading-[1.1]'>Teachers</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default University
