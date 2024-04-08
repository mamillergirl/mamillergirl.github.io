import React from 'react';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Resume from './components/resume.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <main className="">
      <Header/>
      <Home/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Footer/>

    </main>
  );
}

export default App;
