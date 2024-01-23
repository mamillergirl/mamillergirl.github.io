import '../App.css';
import {Header} from './header'
import { Footer } from './footer';
import Skill from './skill';

import react from '../logos/react.svg'
import typescript from '../logos/typescript.svg'
import angular from '../logos/angular.svg'
import csharp from '../logos/csharp.svg'
import figma from '../logos/figma.svg'
import firebase from '../logos/firebase.svg'
import git from '../logos/git.svg'
import javascript from '../logos/javascript.svg'
import mongodb from '../logos/mongodb.svg'
import node from '../logos/node.svg'
import php from '../logos/php.svg'
import python from '../logos/python.svg'
import reactNative from '../logos/react-native.svg'
import sql from '../logos/sql.svg'
import svelte from '../logos/svelte.svg'




function Skills() {
 
  return (
    <div className="skills">
      <Header/>
      <section id="skillsSection">
      <div className="container">
        <h2>Skills</h2>
        <section className='skillsSection'>
        <Skill
        name='TypeScript'
        imageUrl={typescript}
        description='Applied TypeScript proficiently during internship for robust, typed JavaScript development.'
        experience='Professional'
        />
         <Skill
        name='JavaScript'
        imageUrl={javascript}
        description='Acquired foundational JavaScript knowledge from a course, solidified through extensive practical application.'
        experience= 'Professional, Personal, Educational'
        />
        <Skill
          name='React JS'
          imageUrl=  {react}
          description='Self-taught React enthusiast; honed expertise via personal projects, transitioning to professional utilization.'
          experience= 'Professional, Personal'
        />
         <Skill
        name='C#'
        imageUrl={csharp}
        description='Acquired C# skills in school for game development, later utilized professionally in API development.'
        experience= 'Professional, Educational'
        />
        
        <Skill
        name='HTML5 + CSS3'
        imageUrl= "https://upload.wikimedia.org/wikipedia/commons/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg"
        description='Initially acquired HTML5+CSS3 basics in school; furthered through personal endeavors and professional applications.'
        experience='Professional, Educational, Personal'
        />
        <Skill
        name='Git'
        imageUrl={git}
        description='Employed Git for version control across many projects, integrating with GitHub and Azure for collaboration and deployment.'
        experience= 'Professional, Educational, Personal'
        />
        <Skill
        name='Node'
        imageUrl={node}
        description='Learned Node.js in backend development and web services classes, employing Express; applied for personal REST APIs.'
        experience= 'Educational, Personal'
        />
         <Skill
        name='SQL'
        imageUrl={sql}
        description='Acquired SQL proficiency in database design courses, experienced in constructing relational databases using MySQL.'
        experience='Educational'
        />
        <Skill
        name='MongoDB'
        imageUrl={mongodb}
        description='Gained MongoDB expertise in web service class, exploring non-relational database concepts.'
        experience= 'Educational, Personal'
        />
       
        <Skill
        name='Python'
        imageUrl={python}
        description='Started with Python as my first language, initially for simple projects, later leveraging Pandas for data science tasks.'
        experience='Educational'
        />
        <Skill
        name='Svelte'
        imageUrl={svelte}
        description='Learned and employed Svelte for various web frontend projects.'
        experience= 'Educational'
        />
         <Skill
        name='React Native'
        imageUrl={reactNative}
        description='Self-learned React Native, applied in various personal projects for practical experience.'
        experience= 'Personal'
        />
        <Skill
        name='PHP'
        imageUrl={php}
        description='Studied PHP in a backend web class, utilized PHPMyAdmin for database management.'
        experience= 'Educational'
        />
        <Skill
        name='Firebase'
        imageUrl={firebase}
        description='Self-taught Firebase for personal projects, focusing on non-relational database design—an initial exposure to non-relational databases.'
        experience= 'Personal'
        />
        <Skill
        name='Figma'
        imageUrl={figma}
        description='Utilized Figma for hackathon project design and in a user experience design and research class.'
        experience= 'Educational, Personal'
        />
       <Skill
        name='Angular'
        imageUrl={angular}
        description='Self taught Angular to make web apps.'
        experience='Personal'
        />
        
          
        </section>
      </div>
    </section>
     <Footer/>
    </div>
  );
}

export {Skills} ;
