import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Education from './components/education';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <About />
     <Skills />
     <Projects />
     <Education />
      </div>
  );
}

export default App;
