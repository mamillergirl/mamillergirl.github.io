import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ source, alt, title, type, description, repository, link }) => {
  return (
    <div className="flex justify-center mb-10">
      <div 
      className="sm:grid sm:grid-cols-2 sm:grid-rows-1 flex flex-col sm:w-[75%]"
      >
        {source !== "" &&
        <div className='relative mb-10 group pl-4'>
          <img className="rounded-2xl w-full h-auto object-cover" src={source} alt={alt}/>
         <div className="absolute inset-0 rounded-2xl z-10 hidden group-hover:flex lg:hidden justify-center bg-black bg-opacity-80 ">
          
         {link !=="" &&
            <a
              className="text-white mt-[25%] text-[20px] font-extrabold pr-4 hover:text-accentColor flex"
              href={link}
            >
              <FontAwesomeIcon icon={faExternalLink}/>
              <p className='pl-2 text-[16px]'>Visit Website</p>
            </a>}
            <a
              className="text-white mt-[25%] text-[20px] font-extrabold hover:text-accentColor flex "
              href={repository}
            >
              <FontAwesomeIcon icon={faGithub} />
              <p className='pl-2 text-[16px]'>View Repository</p>
            </a>

          </div> 
        </div>
        }
        <div className='flex flex-col justify-between p-4'>
          <div className="">
            <h2 className="text-white text-[16px] font-extrabold">{type}</h2>
            <h1 className="text-white text-[25px] font-extrabold">{title}</h1>
            <p className="text-white  opacity-70  text-[16px]">{description}</p>
          </div>
          <div className="mt-2 flex justify-center sm:justify-start sm:hidden">
            {link !=="" &&
            <a
              className="text-white text-[20px] font-extrabold pr-4 hover:text-accentColor"
              href={link}
            >
              <FontAwesomeIcon icon={faExternalLink} />
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
