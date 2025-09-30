import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AnimatedBtn = () => {
  return (
    <button className="group relative w-fit overflow-hidden rounded-full border-2 border-transparent bg-transparent px-4 py-3 font-semibold text-white transition-all duration-300 ease-in-out">
      <span className="absolute inset-0 rounded-full p-[2px] bg-[#f14f44] cursor-pointer">
        <span className="flex h-full w-full rounded-full bg-transparent " />
      </span>

      <span className="relative z-10 flex items-center justify-center gap-4">
        <span className="relative flex w-6 h-6 overflow-hidden ">
          <span className="absolute left-0 top-0 h-3 w-3 mt-[5px] rounded-full transition-transform duration-300 ease-in-out group-hover:-translate-x-6 bg-white"></span>
          {/* <FaArrowRight className="" /> */}
        </span>

        <span className="font-medium text-[16px] leading-[24px] whitespace-nowrap exo">
     Send a message
        </span>

        <span className="relative flex w-6 h-6 overflow-hidden">
          <span className="absolute right-0 top-0 h-3 w-3 mt-[5px] rounded-full translate-x-6 transition-transform duration-300 ease-in-out group-hover:translate-x-0 bg-white" ></span>
        </span>
      </span>
    </button>
  );
};

export default AnimatedBtn;
