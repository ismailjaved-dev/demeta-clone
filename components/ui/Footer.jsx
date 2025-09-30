import React from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className="w-full bg-black h-auto lg:h-[500px] flex justify-center items-center py-10 lg:py-0">
                <div className="w-[90%] max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">

                    <div className="flex flex-col gap-3 items-start">
                        <Image alt="logo" src={logo} className="h-[120px] md:h-[150px] w-auto" />
                        <p className="poppins text-sm leading-[20px] text-zinc-300">
                            DaMeta1 is more than just a platform, it is a comprehensive immersive world. Designed for innovators, learners, entrepreneurs, and creators.
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-center text-left md:text-center">
                        <h1 className="text-zinc-100 text-[24px] md:text-[30px] font-extrabold">VISIT US</h1>
                        <p className="text-zinc-100 tracking-[1px] text-sm mt-2 text-[17px]">
                            Dubai Office Office 42, F02 <br /> al khabaisi, Dubai, UAE.
                        </p>
                        <p className="text-zinc-100 tracking-[2px] text-sm mt-6">
                            Our WhatsApp: <br /> +905347436297
                        </p>
                    </div>

                    <div className="flex flex-col items-start lg:items-center gap-5">
                        <h1 className="text-zinc-100 text-[20px] md:text-[23px] font-extrabold leading-[23px] text-center">
                            OUR SOCIAL <br /> MEDIA
                        </h1>
                        <div className="flex gap-3">
                            <Link href={"#"} className="bg-[#7fed71] p-2.5 rounded-md">
                                <FaFacebook className="text-black size-[28px]" />
                            </Link>
                            <Link href={"#"} className="bg-[#7fed71] p-2.5 rounded-md">
                                <IoLogoInstagram className="text-black size-[28px]" />
                            </Link>
                            <Link href={"#"} className="bg-[#7fed71] p-2.5 rounded-md">
                                <FaYoutube className="text-black size-[28px]" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 lg:col-span-3 xl:col-span-1">
                        <h1 className="text-zinc-100 text-[18px] md:text-[20px] font-extrabold">
                            JOIN THE JOURNEY
                        </h1>
                        <p className="poppins text-sm leading-[20px] text-zinc-300">
                            Get updates on special events and receive your first drink on us!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <input
                                type="email"
                                className="flex-1 outline-0 border-b border-white placeholder:text-zinc-500 poppins p-2 text-white text-sm bg-transparent"
                                placeholder="Email"
                            />
                            <button className="poppins text-zinc-100 uppercase text-sm cursor-pointer hover:text-red-700 border-b border-red-700 px-2">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full bg-white py-12"></div>
        </>
    )
}

export default Footer
