export const IconData = ({ text, iconUrl, style }) => (
  <div
    className="absolute flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 z-20 spin-counter"
    style={style}
  >
    {/* The main circular element with a gradient border effect */}
    <div className="w-[192px] h-[192px] rounded-full p-[3px]  shadow-2xl overflow-hidden">
      {/* Inner black circle for content */}
      <div className="w-full h-full rounded-full bg-black outline-4 outline-white flex items-center justify-center p-[18px]">
        {/* Placeholder for the icon image */}
        <img
          src={iconUrl}
          alt={text}
          className="object-contain "
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/000000/ffffff?text=Icon"; }} // Fallback
        />
      </div>
    </div>
    {/* Text label below the circle */}
   
  </div>
);