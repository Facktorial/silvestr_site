import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import city from './noir.svg';
import discord from './discord.svg';
import discord2 from './discord2.svg';
import damien from './damien_post.svg';
import './App.css';
// @ts-ignore
//import ReactRain from 'react-rain-animation';
// import all the styles
//import "react-rain-animation/lib/style.css";
import MyRain from './MyRain';

function App() {
    const nbDrop = 858;

  const randRange = (minNum: number, maxNum: number) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };

  const createRain = useCallback(() => {
    const rainSection = document.querySelector('.rain');
    if (!rainSection) return;

    // Clear existing rain drops
    rainSection.innerHTML = '';

    for (let i = 1; i < nbDrop; i++) {
      const dropLeft = randRange(0, window.innerWidth);
      const dropTop = randRange(-1000, window.innerHeight);
      const drop = document.createElement('div');
      drop.classList.add('drop');
      drop.id = `drop${i}`;
      drop.style.left = `${dropLeft}px`;
      drop.style.top = `${dropTop}px`;
      rainSection.appendChild(drop);
    }
  }, [nbDrop]);

  useEffect(() => {
    createRain();
    
    // Debounce the resize event
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        createRain();
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [createRain]);

  const discordUrl = "https://discord.gg/VCMT36qn";
  const textik = "Karel je na stopě konci roku, který se mu snaží uniknout. Rok se žene do neznáma. Neznámo se žene na Karla.";
  const event_name = "Silvestr s Karlem Sedláčkem 2024";
  const event_place = "Chata v horách";
  const event_date = "27.12.-1.1.";
  const urlPrihlaska = "https://forms.gle/Cr4npvXEFJRfSu3p8";

  return (
    <div className="App">
      <div className="rain"></div>
      <header className="App-header">
        <h1  className="event-name">{event_name}</h1>
        <p className="event-date">{event_date}</p>
        <p className="event-date">{event_place}</p>

        <p className="text">{textik}</p>
        <div className="button-wrapper"style={{ position: 'relative', zIndex: 10 }}>
          <a href={urlPrihlaska} className="App-link" target="_blank" rel="noopener noreferrer">Info v přihlášce</a>
        </div>
        <div className="discord-box">
          <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="discord-link">
            <img src={discord} className="Discord" alt="discord" />
            <div className="overlay"></div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
