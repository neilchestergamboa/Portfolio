import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const chars = "!@#$%^&*()_+=-<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const container = document.querySelector('.falling-code');

    function createFallingChar() {
      const char = document.createElement('span');
      char.classList.add('char');
      char.innerText = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + "vw";
      char.style.animationDuration = Math.random() * 3 + 2 + "s";
      container.appendChild(char);

      setTimeout(() => {
        char.remove();
      }, 5000);
    }

    const interval = setInterval(createFallingChar, 100);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="welcome-container">
      <div className="falling-code"></div>
      <div className="glitch">Welcome</div>
      <div className="message">Welcome to Neil's Portfolio</div>
      <button onClick={handleClick} className="btn">Enter</button>
    </div>
  );
};

export default Welcome;
