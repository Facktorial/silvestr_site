import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import city from './noir.svg';
import discord from './discord.svg';
import damien from './damien_post.svg';
import './App.css';
// @ts-ignore
//import ReactRain from 'react-rain-animation';
// import all the styles
//import "react-rain-animation/lib/style.css";
import MyRain from './MyRain';

function App() {
  // useEffect(() => {
  //   const nbDrop = 458;

  //   function randRange(minNum: number, maxNum: number) {
  //     return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  //   }

  //   function createRain() {
  //     const rainSection = document.querySelector('.rain');
  //     for (let i = 1; i < nbDrop; i++) {
  //       const dropLeft = randRange(0, window.innerWidth);
  //       const dropTop = randRange(-1000, window.innerHeight);
  //       const drop = document.createElement('div');
  //       drop.classList.add('drop');
  //       drop.id = `drop${i}`;
  //       drop.style.left = `${dropLeft}px`;
  //       drop.style.top = `${dropTop}px`;
  //       rainSection?.appendChild(drop);
  //     }
  //   }

  //   createRain();
  //   
  //   // Recreate rain on window resize
  //   window.addEventListener('resize', createRain);

  //   return () => {
  //     window.removeEventListener('resize', createRain);
  //   };
  // }, []);

  // <ReactRain numDrops="547"/>

  const discordUrl = "https://discord.gg/VCMT36qn";
  const textik = "Karel je na stopě konci roku, který se mu snaží uniknout. Rok se žene do neznáma. Neznámo se žene na Karla.";
  const event_name = "Silvestr s Karlem Sedláčkem 2024";
  const event_place = "Chata v horách";
  const event_date = "27.12.-1.1.";
  const urlPrihlaska = "https://forms.gle/Cr4npvXEFJRfSu3p8";

  return (
    <div className="App">
      <MyRain 
        numDrops={400} 
        zIndex={-1} 
        size={1} 
        color="#FFFF00" 
        velocity={1}
      />
      <MyRain 
        numDrops={547} 
        zIndex={1000} 
        size={2} 
        color="rgba(255, 255, 255, 0.7)"
        velocity={2}
      />
      <header className="App-header">
        <h1  className="event-name">{event_name}</h1>
        <p className="event-date">{event_date}</p>
        <p className="event-date">{event_place}</p>

        <p className="text">{textik}</p>
        <div>
          <a href={urlPrihlaska} className="App-link">Info v přihlášce</a>
        </div>
        <a href={discordUrl} target="_blank" rel="noopener noreferrer">
          <img src={discord} className="Discord" alt="discord" />
        </a>
      </header>
    </div>
  );
}

export default App;
