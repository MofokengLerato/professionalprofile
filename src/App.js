import {HashRouter, Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProjectDetails from './pages/pagedetails';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </AnimatePresence>
  );
}

function App() {
  return (

    <HashRouter>
      <Navbar />
      <AnimatedRoutes />
    </HashRouter>
  );
}

export default App;
