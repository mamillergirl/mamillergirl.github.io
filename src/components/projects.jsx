import React, { useState } from 'react';
import Project from './project';
import supersaver from '../images/projects/supersaver.png';
import foodDiaryApp from '../images/projects/food-diary-app.png';
import iride from '../images/projects/iride.png';
import plums from '../images/projects/plums.png';
import cookboost from '../images/projects/cookboost.png';
import webscraper from '../images/projects/webscraper.png';
import flickfavs from '../images/projects/flick-favs.png';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div id="projects" className="mt-20 flex flex-col items-center justify-center w-full">
      <h2 className="mt-4 text-center text-accentColor text-[35px] font-extrabold">Projects</h2>
      <div className="mt-4 flex flex-col items-center">
        <Project source={supersaver} alt="Supersaver" type="Web App" title="Rexburg Supersaver" description="Led a React-based hackathon project, winning 3rd place, to facilitate access to local grocery deals. Managed frontend development, project planning, and design using Figma. Utilized web scraping to aggregate exclusive discounts, simplifying the shopping experience." repository={'https://github.com/mamillergirl/RexburgSuperSaver'} link={'https://mamillergirl.github.io/rexburg-super-saver-ui-demo/'} />
        <Project source={foodDiaryApp} alt="Food Diary App" type="Mobile App" title="Food Diary App" description="The Food Diary App, developed as my senior project, is a cross-platform tool for tracking food intake and symptoms. Built with React Native, it offers logging of meals and symptoms and insights on food intake providing users with informationt to make better food choices. It utilizes Firebase for secure data storage and authentication, and integrates with the Edamam API for valuable food information." repository="https://github.com/mamillergirl/food-diary-app" />
        {showAllProjects &&
          <>
            <Project source={iride} alt="iride" title="Iride" type="Mobile App" description="Our class project aimed to simplify carpooling for students by creating a dedicated ride board app, replacing the complexity of using Facebook. I contributed to establishing the database infrastructure with Firebase Firestore and developing the frontend with React Native." repository="https://github.com/HuairaNimrod/I-ride" link="" />
            <Project source={plums} alt="Plums" type="Full-Stack Web App" title="PLUMS" description="Developed with a partner for a full-stack class, our Next.js, Prisma, and PostgreSQL app is a personal learning management system. Users can upload topics, attachments, and notes, streamlining their learning experience." repository="https://github.com/lingarner/plums" link="https://plums-orpin.vercel.app/" />
            <Project source={cookboost} alt="CookBoost" type="Web App" title="CookBoost" description="Cookboost marks my debut project in React - a web application designed to gather user-input ingredients and generate corresponding recipe cards. Leveraging the Edamam Recipe Search API, it retrieves recipes based on user-provided ingredients and incorporates features like saving recipes using Local Storage." link="https://mamillergirl.github.io/cookboost/" repository="https://github.com/mamillergirl/cookboost" />
            <Project source={webscraper} alt="Realty Web Scraper App" title="Realty Web Scraper App" type="Web App" description="I contributed to a web scraping platform developed in data science society in collaboration with Sotheby's Realty, aimed at ensuring consistency in property prices across various online platforms." repository="https://github.com/BYUIDSS/DSS_F22_InternationalRealty" link="" />
            <Project source={flickfavs} alt="Flick Favs" title="Flick Favs" type="Web App" description="Our team built a Movie Explorer Web App with Svelte, Vite, local storage, and Supabase. As project manager, I led task planning and contributed to development. Using the OMDb API, our app allows users to explore, save favorites, and curate watchlists for a seamless movie exploration experience." link="" repository="https://github.com/mamillergirl/flick-favs" />
          </>
        }
        <button onClick={toggleShowAllProjects} className="text-white bg-accentColor font-bold py-2 px-4 rounded">
          {showAllProjects ? 'Show Less' : 'Show All Projects'}
        </button>
      </div>
    </div>
  );
}

export default Projects;
