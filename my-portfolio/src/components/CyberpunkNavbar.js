import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './CyberpunkNavbar.css';

function CyberpunkNavbar() {
  const navigate = useNavigate(); // Hook to navigate

  useEffect(() => {
    const radioBtnGroups = document.querySelectorAll('.radio-btn-group');
    new RadioButtonEffect(radioBtnGroups);
  }, []);

  class RadioButtonEffect {
    constructor(radioBtnGroups) {
      this.previousRadioBtn = null;

      radioBtnGroups.forEach((group) => {
        const radioBtn = group.querySelector("input[type='radio']");
        const nodes = this.getNodes(radioBtn);

        radioBtn.addEventListener('change', () => {
          if (this.previousRadioBtn && this.previousRadioBtn !== radioBtn) {
            this.changeEffect(this.getNodes(this.previousRadioBtn), false);
          }

          this.changeEffect(nodes, true);
          this.previousRadioBtn = radioBtn;

          // 🚀 Navigate to the corresponding route
          const targetPage = radioBtn.id.replace('input-', '');
          navigate(`/${targetPage}`);
        });
      });
    }

    getNodes = (radioBtn) => {
      const container = radioBtn.closest('.radio-btn-group');
      return gsap.utils.shuffle(Array.from(container.querySelectorAll('rect')));
    };

    changeEffect(nodes, isChecked) {
      gsap.to(nodes, {
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)',
        x: isChecked ? '100%' : '-100%',
        stagger: 0.01,
        overwrite: true,
      });

      gsap.fromTo(
        nodes,
        { fill: '#0c79f7' },
        { fill: '#76b3fa', duration: 0.1, ease: 'elastic.out(1, 0.3)', repeat: -1 }
      );

      if (isChecked) {
        const randomNodes = nodes.slice(0, 5);
        gsap.to(randomNodes, {
          duration: 0.7,
          ease: 'elastic.out(1, 0.1)',
          x: '100%',
          stagger: 0.1,
          repeatDelay: 1.5,
          repeat: -1,
        });
      }
    }
  }

  return (
    <div className="cyberpunk-navbar">
      {['home', 'about', 'projects', 'skills', 'resume', 'contact'].map((page) => (
        <div className="radio-btn-group" key={page}>
          <input type="radio" name="stagger-radio-group" id={`input-${page}`} />
          <label htmlFor={`input-${page}`}>
            <span>{page.charAt(0).toUpperCase() + page.slice(1)}</span>
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <g className="left">
                {Array.from({ length: 25 }).map((_, i) => (
                  <rect key={i} x="-100%" y={i * 2} width="100%" height="2" />
                ))}
              </g>
            </svg>
          </label>
        </div>
      ))}
    </div>
  );
}

export default CyberpunkNavbar;
