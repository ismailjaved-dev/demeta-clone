import React from 'react'

const Continents = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] pt-10 md:pt-16 lg:pt-20 pb-20 md:pb-32 lg:pb-40 flex flex-col gap-4 md:gap-4 text-center">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[5px] md:tracking-[10px] [word-spacing:8px] md:[word-spacing:15px] font-medium leading-snug md:leading-[45px]">
          Explore the Five Continents
        </h2>
        
        <h3 className="text-lg sm:text-xl md:text-[28px] text-[#39fe1f] tracking-[1px] sm:tracking-[2px] md:tracking-[3.5px] [word-spacing:2px] md:[word-spacing:3px] font-medium leading-relaxed md:leading-[45px]">
          One Immersive World, Five Unique Zones 
        </h3>
        
        <p className="poppins text-sm sm:text-base md:text-lg leading-relaxed sm:leading-[28px] md:leading-[35px] tracking-[0.5px] sm:tracking-[0.8px] md:tracking-[1px] [word-spacing:6px] sm:[word-spacing:10px] md:[word-spacing:15px]">
          DaMeta1 is more than just a platform, it is a comprehensive immersive world. 
          Designed for innovators, learners, entrepreneurs, and creators. 
          Each continent offers a unique and interactive experience, powered by AI, VR, Blockchain, and RealTech.
        </p>
      </div>
    </div>
  )
}

export default Continents
