import Image from 'next/image'
import React from 'react'

const Features = () => {

    const coreFeatures = [
        {
            desc: "Real-Time Progress Tracking Instant visibility into attendance, grades, and performance metrics. ",
            img: <svg aria-hidden="true" fill='#1CD44C' height={41} width={41} className="e-font-icon-svg e-fas-check " viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
        },
        {
            desc: "Interactive Virtual Lectures.",
            img: <svg aria-hidden="true" fill='#1CD44C' height={41} width={41} className="e-font-icon-svg e-fas-times" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
        },
        {
            desc: "Live and on-demand classes hosted in VR environments. ",
            img: <svg aria-hidden="true" fill='#1CD44C' height={41} width={41} className="e-font-icon-svg e-fas-vr-cardboard" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h160.22c25.19 0 48.03-14.77 58.36-37.74l27.74-61.64C286.21 331.08 302.35 320 320 320s33.79 11.08 41.68 28.62l27.74 61.64C399.75 433.23 422.6 448 447.78 448H608c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM160 304c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm320 0c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64z"></path></svg>
        },
    ]

    const automated = [
        {
            desc: "Seamless fee collection.",
            img: <svg aria-hidden="true" fill='#1CD44C' height={41} width={41} className="e-font-icon-svg e-fas-check " viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
        },
        {
            desc: "Exam scheduling",
            img: <svg aria-hidden="true" fill='#1CD44C' height={41} width={41} className="e-font-icon-svg e-fas-newspaper" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"></path></svg>
        },
        {
            desc: "Parent-teacher communications",
            img: <svg aria-hidden="true" fill='#1CD44C' height={41} width={41} className="e-font-icon-svg e-fas-child" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"></path></svg>
        },
        {
            desc: "No Manual Edits Required.",
            img: <svg aria-hidden="true" fill='#1CD44C' height={41} width={41} className="e-font-icon-svg e-fas-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path></svg>
        },
    ]

    return (
        <div>
            <div className='max-w-[1140px] mx-auto  py-6 px-5 grid lg:grid-cols-2 gap-10  '>
               <div>
                 <h2 className='text-[32px] font-semibold tracking-[2.9px] text-center mb-5'>Core Features</h2>
                <div>
                    {
                        coreFeatures.map((item, index) => { 
                            return (
                                <div key={index} className='flex gap-5 items-center mt-3'>
                                        <span className='min-w-[41px] min-h-[41px]'>
                                            {item.img}
                                        </span>
                                    
                                    <p className='text-[18px] font-normal poppins leading-[2]' style={{wordSpacing:"2px"}}>{item.desc}</p>
                                </div>
                            )
                         })
                    }
                </div>
               </div>
               <div>
                 <h2 className='text-[32px] font-semibold tracking-[2.9px] text-center mb-5'>Automated Workflows</h2>
                <div>
                    {
                        automated.map((item, index) => { 
                            return (
                                <div key={index} className='flex gap-5 items-center mt-3'>
                                        <span className='min-w-[41px] min-h-[41px]'>
                                            {item.img}
                                        </span>
                                    
                                    <p className='text-[18px] font-normal poppins ' style={{wordSpacing:"2px"}}>{item.desc}</p>
                                </div>
                            )
                         })
                    }
                </div>
               </div>
            </div>

            <div className='bg-black py-5 '>
               <div className='max-w-[1100px] mx-auto px-5 flex flex-wrap sm:gap-10 items-center justify-center '>
                 <div className='block relative min-h-[150px] sm:min-h-[210px] min-w-[200px] sm:min-w-auto md:min-w-[180px] max-w-[220px] flex-1'>
                    <Image src="/feaetures/img1.png" fill alt='' className='object-contain'/>
                </div>
                 <div className='block relative min-h-[150px] sm:min-h-[210px] min-w-[200px] sm:min-w-auto md:min-w-[180px] max-w-[220px] flex-1'>
                    <Image src="/feaetures/img2.png" fill alt='' className='object-contain'/>
                </div>
                 <div className='block relative min-h-[150px] sm:min-h-[210px] min-w-[200px] sm:min-w-auto md:min-w-[180px] max-w-[220px] flex-1'>
                    <Image src="/feaetures/img3.png" fill alt='' className='object-contain'/>
                </div>
               <h5 className='text-white poppins text-[22px] font-normal lg:max-w-[400px]'>Ilmversity is accelerated at GrowthX Accelerator which is part of Microsoft for startups Middle East Ilmversity won an award from Microsoft in Abu Dhabi where it participated with many companies from several countries</h5>
               </div>
            </div>

            <div className='bg-[#1CD44C] px-5 py-1 '>
                <p className='text-[26px] sm:text-[33px] font-semibold capitalize tracking-[2.4px] text-white text-center'>Ready to see Ilmversity in action?</p>
            </div>
        </div>
    )
}

export default Features
