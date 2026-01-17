import React from "react";
import Skill from "./skill";
import typescript from "../images/svgs/typescript.svg";
import javascript from "../images/svgs/javascript.svg";
import csharp from "../images/svgs/csharp.svg";
import react from "../images/svgs/react.svg";
import css from "../images/svgs/css.svg";
import html from "../images/svgs/html.svg";
import git from "../images/svgs/git.svg";
import nextjs from "../images/svgs/nextjs.svg";
import svelte from "../images/svgs/svelte.svg";
import php from "../images/svgs/php.png";
import firebase from "../images/svgs/firebase.svg";
import figma from "../images/svgs/figma.svg";
import angular from "../images/svgs/angular.svg";
import node from "../images/svgs/node.svg";
import python from "../images/svgs/python.svg";
import mongo from "../images/svgs/mongo.png";
import sql from "../images/svgs/sql.png";
const Skills = () => {
  return (
    <div
      id="skills"
      className="mt-20 flex flex-col items-center justify-center w-full"
    >
      <h2 className="mt-4 text-center text-white text-[24px] font-semibold">
        Technical Skills
      </h2>
      <div className="mt-4 flex justify-evenly mb-4 flex-wrap w-[70%] sm:w-[60%] ">
        <Skill
          source={react}
          alt="react"
          description="Professional React and React Native experience, including modernizing legacy frontends and building scalable UI components."
        />
        <Skill
          source={typescript}
          alt="typescript"
          description="Proficient in TypeScript for building robust, strongly typed React applications."
        />
        <Skill
          source={javascript}
          alt="javascript"
          description="Strong JavaScript foundation, applied extensively in both professional and personal full-stack projects."
        />
        <Skill
          source={html}
          alt="html"
          description="Proficient in HTML5 for building semantic and accessible web interfaces."
        />
        <Skill
          source={css}
          alt="css"
          description="Skilled in CSS3, SASS, and Tailwind for responsive and visually consistent designs."
        />
        <Skill
          source={csharp}
          alt="c#"
          description="Experienced in C# for developing RESTful APIs and backend services in ASP.NET Core."
        />
        <Skill
          source={sql}
          alt="sql"
          description="Proficient in relational databases using Oracle PL/SQL, MySQL, and PostgreSQL, supporting backend workflows."
        />
        <Skill
          source={node}
          alt="node"
          description="Developed backend services with Node.js and Express for personal projects and API experimentation."
        />
        <Skill
          source={nextjs}
          alt="nextjs"
          description="Built full-stack projects with Next.js, integrating frontend and backend functionality with modern tooling."
        />
        <Skill
          source={mongo}
          alt="mongo"
          description="Experienced with MongoDB for non-relational database design and web service integration."
        />
        <Skill
          source={git}
          alt="git"
          description="Skilled in Git version control, collaborating via GitHub and Azure DevOps across professional projects."
        />
        <Skill
          source={figma}
          alt="figma"
          description="Collaborated with UX teams using Figma for prototyping, UI design, and user research."
        />
        <Skill
          source={firebase}
          alt="firebase"
          description="Implemented Firebase for personal projects, focusing on authentication and non-relational data storage."
        />
        <Skill
          source={angular}
          alt="angular"
          description="Self-taught Angular for developing interactive web applications and personal projects."
        />
        <Skill
          source={svelte}
          alt="svelte"
          description="Built frontend web projects using Svelte for interactive UI development."
        />
        <Skill
          source={php}
          alt="php"
          description="Applied PHP in backend web projects and database management with PHPMyAdmin."
        />
      </div>
    </div>
  );
};

export default Skills;
