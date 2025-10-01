"use client";
import React, { useState, useEffect } from "react";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogDescription,
} from "@/components/ui/alert-dialog"; 

import dialog from '../../assets/dialog.png'
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const AlertBox = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        // <AlertDialog open={open} onOpenChange={setOpen}>
        //     <AlertDialogTrigger asChild>
        //         <Button className="hidden">Open</Button>
        //     </AlertDialogTrigger>

        //     <AlertDialogContent className="bg-white w-[400px] ">
        //         <AlertDialogHeader>
        //             <AlertDialogDescription>
        //                 <div className="w-full flex justify-end items-center">
        //                     <div onClick={() => setOpen(false)} className="cursor-pointer border-[1.5px] w-[20px] rounded-sm h-[20px]  flex justify-center items-center">
        //                         <IoClose className="size-10" />
        //                     </div>
        //                 </div>
        //                 <div className="w-full flex justify-center items-center py-3">
        //                     <Image alt="adsad" className=" w-[95%] h-[350px]" src={dialog} />

        //                 </div>
        //                 <div className="poppins text-center text-zinc-700 text-[18px]">
        //                     Forbes spotlights Da1ilmverse’s groundbreaking fusion of immersive tech and AI-powered learning.
        //                     Read how we’re turning classrooms into smart, interactive environments.
        //                 </div>
        //                 <div className="w-full flex justify-center items-center mt-3">
        //                     <a target="_blank" href='https://www.forbes.com/sites/kolawolesamueladebayo/2025/06/27/how-ai-could-reshape-global-education---and-what-comes-after/' className="px-4 py-2 poppins text-[18px] text-[#1bd44c] border border-[#1bd44c] ">Read Forbes Article</a>

        //                 </div>
        //             </AlertDialogDescription>
        //         </AlertDialogHeader>

        //     </AlertDialogContent>
        // </AlertDialog>
        <AlertDialog  open={open} >

  <AlertDialogContent className='bg-white max-h-[90dvh] w-full !max-w-[400px] !rounded-none overflow-y-scroll '>
    <div className="relative ">
        <div onClick={() => setOpen(false)} className="absolute -top-3 -right-4 cursor-pointer border-[1.5px] w-[20px] rounded-sm h-[20px]  flex justify-center items-center">
                        <IoClose className="size-10 max-h-[18px]" />
                    </div>
    </div>
        <div className="w-full flex justify-center items-center pb-3">
                            <Image alt="adsad" className=" h-[350px]" src={dialog} />
        </div>
         
    <AlertDialogHeader>
      
      <AlertDialogDescription className='poppins text-[#54595F] text-[17px] text-center'>
        Forbes spotlights Da1ilmverse's groundbreaking fusion of immersive tech and AI-powered learning.<br/>
Read how we're turning classrooms into smart, interactive environments.
      </AlertDialogDescription>
      <Link  target="_blank" href='https://www.forbes.com/sites/kolawolesamueladebayo/2025/06/27/how-ai-could-reshape-global-education---and-what-comes-after/' 
      className="px-4 py-2 poppins text-[16px] text-[#1bd44c] border border-[#1bd44c] mx-auto mt-3 hover:bg-[#1bd44c] hover:text-white transition-all duration-200 ease-in-out">Read Forbes Article</Link>
    </AlertDialogHeader>
      
  </AlertDialogContent>
</AlertDialog>
    );
};

export default AlertBox;
