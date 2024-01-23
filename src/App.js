import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Skills } from './components/skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
