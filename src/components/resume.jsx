import Experience from "./experience";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from '../files/marisa-miller-resume.pdf';

import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

export default function Resume() {
  return (
    <div id="resume" className="mt-24  mb-10 flex flex-col items-center justify-center bg-homeColor">
      <h2 className="my-4 text-center text-accentColor text-[35px] font-extrabold">Resume</h2>
      <div className="sm:w-[80%]">
      <h3 className="my-2 ml-4 text-white text-[28px] font-extrabold">Education</h3>
      <Experience title="Brigham Young University - Idaho" time="Sept 2021 - April 2024" degree="B.S. Software Engineering with a Minor in Web Development" description="Recent graduate with a GPA of 4.0. Participated in extracurricular activities and societies, including the BYUI Hackathon where I secured third place in Fall 2023. Completed coursework in data structures, web services, full-stack development, database design and development, and calculus II."/>  
      <h3 className="mt-20 ml-4 text-white text-[28px] font-extrabold">Experience</h3>  
      <Experience title="Associate Software Engineer at Clinisys" time="Jul 2024 - Present"  description="Contribute to the development and testing of a laboratory management web solution, ensuring compliance with industry standards and enhancing user-centric workflows within an Agile team environment."/>  
      <Experience title="Software Development Intern at Clinisys" time="Jun 2023 - Aug 2023" description="Contributed to the development and testing of a laboratory analytics web platform, enhancing the UI using React, and playing a role in developing the ASP.NET REST API. Collaborated with a global scrum team to deliver impactful solutions. Conducted strategic research to inform product development decisions and shape the future direction of the platform." />
      <a className="ml-4 text-white text-2xl text-center" href={resume}>
        <FontAwesomeIcon icon={faFileAlt} />
        <span className="ml-2 mb-1 text-white text-[16px]">Check out my full resume</span>
     </a>
     </div>
    </div>
  );
}
