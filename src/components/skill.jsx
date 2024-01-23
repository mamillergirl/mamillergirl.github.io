import React, { useState } from 'react';

const Skill = ({ name, imageUrl, description, experience }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div className='skill' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imageUrl} alt={name} />
      <h4>{name}</h4>
      {showDescription && (
        <div className='skillDescription'>
          <p>{description}</p>
          <p><strong>Experience:</strong> {experience}</p>
        </div>
      )}
    </div>
  );
};

export default Skill;
