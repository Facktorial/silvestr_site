import React, { useEffect } from 'react';
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
  const discordUrl = "https://discord.gg/VCMT36qn";
  const textik = "Karel je na stopě konci roku, který se mu snaží uniknout. Rok se žene do neznáma. Neznámo se žene na Karla.";
  const event_name = "Silvestr s Karlem Sedláčkem 2024";
  const event_place = "Chata v horách";
  const event_date = "27.12.-1.1.";
  const urlPrihlaska = "https://forms.gle/Cr4npvXEFJRfSu3p8";

  return (
    <div className="App">
      <header className="App-header">
        <h1  className="event-name">{event_name}</h1>
        <p className="event-date">{event_date}</p>
        <p className="event-date">{event_place}</p>

        <p className="text">{textik}</p>
        <div className="button-wrapper">
          <a href={urlPrihlaska} className="App-link">Info v přihlášce</a>
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
