'use client'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React, { useEffect } from 'react'

const Page = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <div className='w-full min-h-screen pt-[200px] flex justify-center items-center gap-10 flex-col  relative bg-[#0b0b0b]'>
        <Navbar />
        <div className='w-[80%] bg-black flex justify-center items-center py-5 tracking-[8px]'>
          <h1 className='text-[#0c8d2e] text-[29px] tracking-[4.6px] font-semibold capitalize'>
            Book Your Meeting with Faisal Suhail
          </h1>
        </div>
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/mubashirmjjawed/30min?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: '700px', height: '700px' }}
        ></div>
      </div>

      <Footer />
    </div>
  )
}

export default Page
