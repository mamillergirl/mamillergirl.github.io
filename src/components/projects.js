import "../App.css";
import { Header } from "./header";
import { Footer } from "./footer";
import cookboost from "../cookboost.png";
import supersaver from "../supersaver.png";
import iride from "../iride.png";
import webscraper from "../webscraper.png";
import flickfavs from "../flick-favs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <>
      <Header />

      <div className="projects">
        <div className="project">
          <img src={supersaver} alt="rexburg supersaver screenshot" />
          <div className="info">
            <h2>Rexburg SuperSaver Web App | 3rd Place Hackathon Win </h2>
            <p className="description">
              I led a hackathon project that resulted in a React-based platform
              designed for residents in our college town to access and save data
              from local grocery stores. As the originator of the concept, I
              handled the frontend development, serving as both the project
              manager and a proactive team member, overseeing task delegation
              and project planning. Taking charge of the app's design in Figma,
              I ensured its usability and visual appeal.
            </p>
            <p className="description">
              The web application utilized web scraping to aggregate and
              showcase exclusive deals and discounts from nearby grocery stores.
              This platform aimed to simplify the process for shoppers, offering
              a centralized space to explore, save and access money-saving
              opportunities within their community.{" "}
            </p>
            <div>
              <a
                className="link button"
                href="https://mamillergirl.github.io/rexburg-super-saver-ui-/"
              >
                <FontAwesomeIcon icon={faPlayCircle} />
              </a>

              <a
                className="link button"
                href="https://github.com/mamillergirl/RexburgSuperSaver"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={iride} alt="iride screenshot" />
          <div className="info">
            <h2>I-Ride | Rideboard Mobile App </h2>
            <p className="description">
              Our class project aimed to simplify the process of carpooling for
              students by creating a dedicated ride board app, addressing the
              shortcomings of using Facebook for such purposes. Recognizing the
              confusion and complexity of navigating Facebook for carpooling,
              especially in an area lacking alternative options, our team
              developed a user-friendly platform.{" "}
            </p>
            <p className="description">
              As a team member, my contributions included establishing the
              database infrastructure with Firebase Firestore and working on the
              frontend of the app with React Native. The app was created to make
              a more efficient way to organize rides and share transportation,
              offering a simpler and more tailored solution compared to the
              challenges posed by using Facebook for this purpose.{" "}
            </p>
            <div>
              <a
                className="link button"
                href="https://github.com/HuairaNimrod/I-ride"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="info">
            <h2>TaskMaster REST API</h2>
            <p className="description">
              Developed a comprehensive Task Master application utilizing a
              Node.js Express API seamlessly integrated with MongoDB,
              facilitating efficient CRUD operations for task, user, and team
              management while integrating Google OAuth for secure
              authentication. Completed within a web services class.{" "}
            </p>
            <div>
              <a
                className="link button"
                href="https://taskmaster-oq75.onrender.com/api-docs/"
              >
                <FontAwesomeIcon icon={faPlayCircle} />
              </a>
              <a
                className="link button"
                href="https://github.com/mamillergirl/taskmaster/"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="info">
            <h2>Book REST API</h2>
            <p className="description">
              Implemented a Node.js Express API integrated with MongoDB,
              enabling seamless CRUD operations for managing books and authors.
              Developed as part of a web services class, this project showcases
              proficiency in backend development and database management for
              scalable web applications.{" "}
            </p>
            <div>
              <a
                className="link button"
                href="https://cse341-books.onrender.com/api-docs/"
              >
                <FontAwesomeIcon icon={faPlayCircle} />
              </a>
              <a
                className="link button"
                href="https://github.com/mamillergirl/cse341-books"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={cookboost} alt="cook boost screenshot" />
          <div className="info">
            <h2>Cookboost | Recipe Manager Web App</h2>
            <p className="description">
              Cookboost marks my debut project in React - a web application
              designed to gather user-input ingredients and generate
              corresponding recipe cards. Leveraging the Edamam Recipe Search
              API, it retrieves recipes based on user-provided ingredients and
              incorporates features like saving recipes using Local Storage.
            </p>
            <div>
              <a
                className="link button"
                href="https://mamillergirl.github.io/cookboost/"
              >
                <FontAwesomeIcon icon={faPlayCircle} />
              </a>
              <a
                className="link button"
                href="https://github.com/mamillergirl/cookboost"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={webscraper} alt="webscraper" />
          <div className="info">
            <h2>Realty Web Scraper App</h2>
            <p className="description">
              I contributed to a web scraping platform developed in data science
              society in collaboration with Sotheby's Realty, aimed at ensuring
              consistency in property prices across various online platforms.
            </p>
            <div>
              <a
                className="link button"
                href="https://github.com/BYUIDSS/DSS_F22_InternationalRealty"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={flickfavs} alt="flick fav screenshot" />
          <div className="info">
            <h2>Flick Favs | Movie Web App </h2>
            <p className="description">
              Our team, comprised of five individuals, collaborated on
              developing a Movie Explorer Web App using Svelte, Vite, local
              storage, and Supabase. As the project manager, I oversaw task
              planning and execution while actively contributing to the
              development process. Leveraging the Open Movie Database (OMDb)
              API, our app empowers users to explore, save favorites, and curate
              watchlists, showcasing our dedication to creating an immersive and
              user-friendly movie exploration platform.
            </p>
            <div>
              <a
                className="link button"
                href="https://github.com/mamillergirl/flick-favs"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export { Projects };
