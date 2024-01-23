import '../App.css';
import {Header} from './header'
import { Footer } from './footer';
import marisa_image from '../marisa_miller.png';
import resume from '../marisa_miller_resume_updated.pdf'

function Home() {
  return (
    <div className="Home">
      <Header/>
      <div className='homeContent'>
      <div className='leftSection'>
        <div className='personalPicture'>
            <img src={marisa_image} alt='Marisa Miller'/>
        </div>
      </div>
      <div className='rightSection'>
          <h3>Hi there! I'm </h3>
          <h2 className='title'>Marisa Miller</h2>
          <p>A senior software engineering student with a minor in web development. I'm excited about combining my academic knowledge with practical skills to create innovative experiences.</p>
          <div className='buttons'>
          <div className='topButtons'>
            <p><a className="button" href='https://www.linkedin.com/in/mamillergirl'>View LinkedIn</a></p>
            <p><a className="button" href='https://github.com/mamillergirl'>View GitHub</a></p>
          </div>
          <div className='bottomButton'>
            <p><a className="button" href={resume} >View Resume</a></p>
          </div>
          </div>
        </div>
        
      </div>
     <Footer/>
    </div>
  );
}

export {Home} ;
