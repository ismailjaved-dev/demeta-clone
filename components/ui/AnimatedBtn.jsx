import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AnimatedBtn = () => {
  return (
    <button className="group relative overflow-hidden rounded-full border-2 border-transparent bg-transparent px-4 py-3 font-semibold text-white transition-all duration-300 ease-in-out">
      <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#95cc43] to-[#6ddb77]">
        <span className="flex h-full w-full rounded-full bg-transparent group-hover:bg-[#95cc43]" />
      </span>

      <span className="relative z-10 flex items-center justify-center gap-4">
        <span className="relative flex w-6 h-6 overflow-hidden">
          <FaArrowRight className="absolute left-0 top-0 h-6 w-6 transition-transform duration-300 ease-in-out group-hover:-translate-x-6" />
        </span>

        <span className="font-medium text-lg leading-[24px] whitespace-nowrap">
          Explore DaMeta1
        </span>

        <span className="relative flex w-6 h-6 overflow-hidden">
          <FaArrowRight className="absolute right-0 top-0 h-6 w-6 translate-x-6 transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
        </span>
      </span>
    </button>
  );
};

export default AnimatedBtn;
