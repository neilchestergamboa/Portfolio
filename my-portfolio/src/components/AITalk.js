import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './AITalk.css';

function AITalk() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "Initializing System...",
    "Awakening Consciousness...",
    "Calibrating Senses...",
    "Entering the Neon Grid...",
    "Preparing for Data Transfer...",
    "Welcome, Runner. The datastream awaits.",
    "Immerse yourself in the constructs below.",
    "Your journey begins now."
  ];

  useEffect(() => {
    if (currentIndex >= messages.length) return;

    const typeText = (message, callback) => {
      setText(''); // Clear the previous message
      setIsTyping(true);
      let index = 0;

      const typeChar = () => {
        if (index < message.length) {
          setText(message.slice(0, index + 1)); // Ensure the first letter is displayed
          index++;
          setTimeout(typeChar, 80); // Adjust typing speed
        } else {
          setIsTyping(false);
          callback && callback();
        }
      };

      typeChar();
    };

    const playMessages = () => {
      // Fade in the text
      gsap.to(".ai-text", { opacity: 1, duration: 0.5 });

      // Type the message
      typeText(messages[currentIndex], () => {
        // After typing finishes, wait before fading out
        setTimeout(() => {
          // Fade out the text
          gsap.to(".ai-text", { opacity: 0, duration: 0.5, onComplete: () => {
            // Move to the next message after complete fade-out
            setCurrentIndex((prev) => prev + 1);
          }});
        }, 1500); // Pause before the next message
      });
    };

    playMessages();
  }, [currentIndex]);

  return (
    <div className="ai-container">
      <p className="ai-text">{text}</p>
    </div>
  );
}

export default AITalk;
