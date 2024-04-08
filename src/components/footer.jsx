import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <footer id="contact" className="flex flex-col justify-between align-middle bg-headerColor w-full">
      <h1 className="w-1/3 sm:ml-[25%] mt-5  text-white text-[24px]  text-extrabold p-4">Contact</h1>
      <p className="sm:w-[55%] sm:ml-[25%] text-white text-[16px] p-4">Recent college graduate with a passion for Full Stack Software Engineering. Eager to apply newly acquired skills in designing and implementing dynamic web solutions. Proficient in both front-end and back-end technologies, ready to contribute to innovative projects and continue learning and growing in the field.</p>
      <div className="mt-5  sm:ml-[25%] flex text-white p-4 ">
      <a className="text-white text-[16px] mb-2" href="mailto:mamillergirl@gmail.com">  <FontAwesomeIcon icon={faEnvelope} /> mamillergirl@gmail.com</a>

      </div>
      <div className="ml-5 sm:ml-[25%] flex mb-4 ">
      <a className="text-white text-2xl pr-4" href="https://github.com/mamillergirl">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className="text-white text-2xl" href="https://www.linkedin.com/in/mamillergirl/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
    </footer>
  );
}
