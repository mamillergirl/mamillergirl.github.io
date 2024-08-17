import React from 'react';
import Skill from './skill';
import typescript from '../images/svgs/typescript.svg';
import javascript from '../images/svgs/javascript.svg';
import csharp from '../images/svgs/csharp.svg';
import react from '../images/svgs/react.svg';
import css from '../images/svgs/css.svg';
import html from '../images/svgs/html.svg';
import git from '../images/svgs/git.svg';
import nextjs from '../images/svgs/nextjs.svg';
import svelte from '../images/svgs/svelte.svg';
import php from '../images/svgs/php.png';
import firebase from '../images/svgs/firebase.svg';
import figma from '../images/svgs/figma.svg';
import angular from '../images/svgs/angular.svg';
import node from '../images/svgs/node.svg';
import python from '../images/svgs/python.svg';
import mongo from '../images/svgs/mongo.png';
import sql from '../images/svgs/sql.png';
const Skills = () => {
  return (
    <div id="skills" className="mt-20 flex flex-col items-center justify-center w-full">
      <h2 className="mt-4 text-center text-white text-[24px] font-semibold">Experience with</h2>
      <div className="mt-4 flex justify-evenly mb-4 flex-wrap w-[70%] sm:w-[60%] ">
        <Skill source={typescript} alt="typescript" description="Applied TypeScript proficiently during internship for robust, typed JavaScript development." />
        <Skill source={javascript} alt="javascript" description="Acquired foundational JavaScript knowledge from a frontend courses, solidified through extensive practical personal and professional application.s" />
        <Skill source={csharp} alt="c#" description="Acquired C# skills in school for game development, later utilized professionally in API development." />
        <Skill source={git} alt="git" description="Employed Git for version control across many projects, integrating with GitHub and Azure for collaboration and deployment." />
        <Skill source={python} alt="python" description="Started with Python as my first language, initially for simple projects, later leveraging Pandas for data science tasks." />
        <Skill source={sql} alt="sql" description="Acquired SQL proficiency in database design courses, experienced in constructing relational databases using MySQL, Oracle PL/SQL and PostreSQL." />
        <Skill source={nextjs} alt="nextjs" description=" Utilized Next.js alongside Prisma to develop full-stack projects, seamlessly integrating frontend and API functionalities." />
        <Skill source={react} alt="react" description="Self-taught React enthusiast; honed expertise via personal projects, transitioning to professional utilization." />
        <Skill source={node} alt="node" description="Learned Node.js in backend development and web services classes, employing Express; applied for personal REST APIs." />
        <Skill source={mongo} alt="mongo" description="Gained MongoDB expertise in web service class, exploring non-relational database concepts." />
        <Skill source={html} alt="html" description="Initially acquired HTML5 basics in school; furthered through personal endeavors and professional applications." />
        <Skill source={css} alt="css" description="Initially acquired CSS3, SASS, and Tailwind basics in school; furthered through personal endeavors and professional applications." />
        <Skill source={svelte} alt="svelte" description="Learned and employed Svelte for various web frontend projects." />
        <Skill source={php} alt="php" description="Studied PHP in a backend web class, utilized PHPMyAdmin for database management." />
        <Skill source={firebase} alt="firebase" description="Self-taught Firebase for personal projects, focusing on non-relational database design—an initial exposure to non-relational databases." />
        <Skill source={figma} alt="figma" description="Utilized Figma to design and prototype projects and in a user experience design and research class." />
        <Skill source={angular} alt="angular" description="Self-taught Angular to make web apps." />

      </div>
    </div>
  );
}

export default Skills;
