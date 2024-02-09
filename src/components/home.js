import "../App.css";
import { Header } from "./header";
import { Footer } from "./footer";
import marisa_image from "../marisa_miller.png";
import resume from "../marisa_miller_resume_updated.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,

} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="homeContent">
        <div className="leftSection">
          <div className="personalPicture">
            <img src={marisa_image} alt="Marisa Miller" />
          </div>
        </div>
        <div className="rightSection">
          <h3>Hi there! I'm </h3>
          <h2 className="title">Marisa Miller</h2>
          <p>
            A senior software engineering student with a minor in web
            development. I'm excited about combining my academic knowledge with
            practical skills to create innovative experiences.
          </p>
          <div className="buttons">
            <div className="topButtons">
              <a className="button" href="https://github.com/mamillergirl">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className="button" href="https://www.linkedin.com/in/marisa-miller/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="button" href={resume}>
                <FontAwesomeIcon icon={faFileAlt} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { Home };
