import React, { useState } from 'react';

const Skill = ({ source, alt, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute bottom-full w-[200px] font-[16px] left-1/2 transform -translate-x-1/2 bg-white text-black p-2 z-10 rounded-md">
          {description}
        </div>
      )}
      <img className="p-2 w-[60px]" src={source} alt={alt} />
    </div>
  );
}

export default Skill;
