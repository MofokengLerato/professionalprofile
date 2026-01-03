import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from 'src/pages/home';
import About from 'src/pages/about';
import Projects from 'src/pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
