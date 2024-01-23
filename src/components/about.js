import '../App.css';
import aboutPicture from '../about_picture.png'
import {Header} from './header'
import { Footer } from './footer';


function About() {
  return (
    <div>
      <Header/>
      <div className='about'>
      <div className='image'>
        <img className="aboutPicture" src={aboutPicture} alt="Marisa Miller" />
        </div>
      <div className='summary'>
     
        <div>
          <h2 className='title'>About Me</h2>
        </div>
        <div>
          <p>
          Hello, I'm Marisa Miller, a senior software engineering student at BYU-Idaho pursuing a minor in Web Design and Development with a passion for creating digital solutions and making a positive impact on the world.

During my high school years, I wore many hats - from being a dedicated section leader in the school band to being an enthusiastic member of the local symphony. In the classroom, I found myself drawn to mathematics and enjoyed tutoring fellow students, sharing my love for problem-solving.

My dedication and commitment to academics earned me the  "Student of the Month" award and a scholarship from my community's Rotary Club during my senior year. I proudly graduated as the salutatorian of my class in 2021, driven by my insatiable curiosity and thirst for knowledge. </p>


<p>In 2021, I took my first steps into the world of software engineering, writing my very first line of code. This newfound passion became a calling, as I discovered the joy of turning ideas into tangible solutions. I realized that I could leverage my problem-solving skills I had grown over the years to create software that I am proud of.

Now, as I prepare to graduate, I'm excited to embark on the next chapter of my journey. I aspire to become a software engineer or a full-stack developer, where I can continue to learn, grow, and innovate.

Throughout my academic journey, I've had the privilege of working on diverse group projects, honing my skills in web development and mobile app creation. Additionally, I gained valuable experience as a software development intern at Clinisys, where I contributed to the development of a healthcare laboratory analytics web application, working on both the UI and API components.

Beyond the world of coding, my interests are as diverse as my experiences. </p> <p> I'm passionate about health, intrigued by the universal language of music, and captivated by the worlds that open up through reading. These interests not only enrich my life but also inspire me to create software solutions that enhance the human experience.

Thank you for visiting my portfolio. I'm excited to connect with like-minded individuals and organizations who share my passion for technology and innovation. Let's work together to turn ideas into reality and shape a brighter future!

          </p>
        </div>
        <div>
       
        </div>
        <h2>Contact</h2>
        <h4>Email: <span className='bold'>mamillergirl@gmail.com</span></h4>
      </div>

      
      </div>
      <Footer/>
    </div>
  );
}

export {About};
