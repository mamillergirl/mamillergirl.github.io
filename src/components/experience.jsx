import React from 'react';

const Experience = ({title, time, degree, description }) => {

  return (
    <div className="flex flex-col mb-5  ml-5 w-full ">

            
      <div className="flex flex-col sm:flex-row justify-between lg:py-5">
        <div>
        <h1 className="text-white text-[20px] font-bol max-w-[90%] ">{title}</h1>
        <h3 className="text-white text-[18px]">{degree}</h3>
        </div>
        <p className="text-white opacity-70 text-[16px] sm:mr-50">{time}</p>
      </div>
      

      <p className="text-white opacity-70 text-[16px] w-[95%]">{description}</p>

    </div>
  );
}

export default Experience;
