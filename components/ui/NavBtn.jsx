import Link from "next/link";
import React from "react";

const NavBtn = ({ url, text, defaulBtn = false }) => {
  return (
    <Link
      href={url}
      className={`group relative inline-block overflow-hidden rounded-full px-[20px] py-2 font-semibold text-sm transition-all duration-300 ease-in-out ${
        defaulBtn
          ? "bg-white text-black"
          : "bg-transparent text-white hover:bg-[#95cc43]"
      }`}
    >
      <span className="relative flex h-[37px] items-center justify-center overflow-hidden">
        <span className="exo text-xl font-normal leading-[37.5px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {text}
        </span>

        <span className="exo text-xl font-normal leading-[37.5px] absolute left-0 w-full text-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {text}
        </span>
      </span>
    </Link>
  );
};

export default NavBtn;
