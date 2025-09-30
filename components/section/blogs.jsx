import Link from 'next/link'
import React from 'react'

const Blogs = () => {

        const data = [
            {title:"Virtual Real Estate: A Smart Investment in the Digital Era",
            desc:"Real estate is taking grand new steps by going digital.",
            tag:"Business",
            img:"/blogs/img1.jpg",
            href:"virtual-real-estate-a-smart-investment-in-the-digital-era/"
            },
            {title:"5 Ways AI Is Changing the Game for Education and Business",
            desc:"With the advent of technology, Artificial Intelligence has come a",
            tag:"AI",
            img:"/blogs/img2.jpeg",
            href:"5-ways-ai-is-changing-the-game-for-education-and-business/"
            },
             {title:"The Future Is Virtual: Why the Metaverse Matters More Than Ever",
            desc:"What if your office, classroom, or shopping mall existed in",
            tag:"AI",
            img:"/blogs/img3.jpg",
            href:"the-future-is-virtual-why-the-metaverse-matters-more-than-ever/"
            }
        ]

  return (
    <div className='fluid-container px-5 py-10' id='blogs'>
      <h2 className="text-[28px] font-light tracking-[6.2px] capitalize text-center ">DaMeta1 Blogs</h2>
           <div className='max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
             {data.map((item, index)=>{
                return (
                    <div key={index} className='flex flex-col gap-5'>   
                        <div className='w-full h-[250px] relative rounded-2xl overflow-hidden group'>
                            <Link href={item.href}>
                            <div className='absolute w-full h-full bg-black/0 px-10 py-4 z-10 group-hover:bg-black/70 transition-all duration-300'>
                                 <span className='text-[20px] font- text-white font-sans opacity-0 group-hover:opacity-100 transition-all duration-300'>{item.tag}</span>
                            </div>
                            </Link>
                            <img src={item.img} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <Link href={`/${item.href}/`} className='no-underline'>
                        <h3 className='text-[23px] font-medium poppins tracking-tight capitalize hover:text-[#39C72C] transition-all duration-300'>{item.title}</h3> 
                        </Link>
                        <p className='text-[17px] font-normal poppins capitalize'>{item.desc}</p>
                        
                    </div>
                )
             })}
           </div>
    </div>
  )
}

export default Blogs
