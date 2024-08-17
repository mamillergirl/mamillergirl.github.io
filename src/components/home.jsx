import portrait from '../images/portrait.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from '../files/marisa-miller-resume-next.pdf';
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
  return (
    <div id="home" className="mt-24 flex flex-col items-center justify-center bg-homeColor">
    
      <img className="w-[80vw] h-[80vw] sm:w-[15vw] sm:h-[15vw] object-cover rounded-full border-accentColor border-4 border-opacity-10" src={portrait} alt="Marisa Miller" />
      <h2 className="mt-4 text-white text-[55px] font-extrabold ">
        Hi! I'm <span className="text-accentColor">Marisa</span></h2>
      <p className="ml-5 sm:ml-20 sm:w-1/2 mt-4 text-white opacity-70  text-[16px]">I'm a recent graduate in software engineering with a minor in web development. I'm passionate about building full-stack projects and eager to apply my academic knowledge to create innovative experiences.</p>

      <div className="flex justify-evenly mb-4 mt-10 text-center ">
        <a className="text-accentColor text-2xl mr-5" href="https://github.com/mamillergirl">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="text-accentColor text-2xl mr-5" href="https://www.linkedin.com/in/mamillergirl/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="text-accentColor text-2xl" href={resume}>
          <FontAwesomeIcon icon={faFileAlt} />
        </a>
    </div>
    </div>
  );
}
