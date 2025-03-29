import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Welcome from './pages/Welcome';
import CyberpunkNavbar from './components/CyberpunkNavbar';
import './App.css';

function FallingCode() {
  useEffect(() => {
    const chars = "!@#$%^&*()_+=-<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const container = document.querySelector('.falling-code');

    function createFallingChar() {
      const char = document.createElement('span');
      char.classList.add('char');
      char.innerText = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + "vw";
      char.style.animationDuration = Math.random() * 3 + 2 + "s";
      char.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
      char.style.opacity = Math.random() * 0.7 + 0.3;
      container.appendChild(char);

      setTimeout(() => {
        char.remove();
      }, 5000);
    }

    const interval = setInterval(createFallingChar, 100);
    return () => clearInterval(interval);
  }, []);

  return <div className="falling-code"></div>;
}

function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <div className="app-container cyberpunk">
      <FallingCode />
      {showNavbar && <CyberpunkNavbar />}
      <div className="fall-down">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
