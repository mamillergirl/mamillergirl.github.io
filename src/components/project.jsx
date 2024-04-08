import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ source, alt, title, type, description, repository, link }) => {
  return (
    <div className="flex justify-center  sm:ml-60 mb-10">
      <div className="flex flex-col sm:flex-row">
        {source !== "" &&
        <img className="rounded-2xl p-2 w-[90%] ml-5 sm:w-[40%] h-auto object-cover" src={source} alt={alt}/>}
        <div className='flex flex-col justify-between p-4'>
          <div className="">
            <h2 className="text-white text-[16px] font-extrabold">{type}</h2>
            <h1 className="text-white text-[25px] font-extrabold">{title}</h1>
            <p className="text-white  opacity-70  text-[16px] sm:w-[60%]">{description}</p>
          </div>
          <div className="mt-2 flex justify-center sm:justify-start">
            {link !="" &&
            <a
              className="text-white text-[20px] font-extrabold pr-4 hover:text-accentColor"
              href={link}
            >
              <FontAwesomeIcon icon={faPlayCircle} />
            </a>}
            <a
              className="text-white text-[20px] font-extrabold hover:text-accentColor"
              href={repository}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
