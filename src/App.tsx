import React, { useEffect } from 'react';
import logo from './logo.svg';
import city from './noir.svg';
import discord from './discord.svg';
import damien from './damien_post.svg';
import './App.css';

function App() {
  useEffect(() => {
    const nbDrop = 458;

    function randRange(minNum: number, maxNum: number) {
      return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    }

    function createRain() {
      const rainSection = document.querySelector('.rain');
      for (let i = 1; i < nbDrop; i++) {
        const dropLeft = randRange(0, window.innerWidth);
        const dropTop = randRange(-1000, window.innerHeight);
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.id = `drop${i}`;
        drop.style.left = `${dropLeft}px`;
        drop.style.top = `${dropTop}px`;
        rainSection?.appendChild(drop);
      }
    }

    createRain();
    
    // Recreate rain on window resize
    window.addEventListener('resize', createRain);

    // Cleanup
    return () => {
      window.removeEventListener('resize', createRain);
    };
  }, []);

  // <img src={logo} className="App-logo" alt="logo" />
  // <p>
  //   Edit <code>src/App.tsx</code> and save to reload.
  // </p>
  // <a
  //   className="App-link"
  //   href="https://reactjs.org"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   Learn React
  // </a>

  const discordUrl = "https://discord.gg/VCMT36qn"

  return (
    <div className="App">
      <div className="rain"></div>
      <header className="App-header">
        <h1  className="event-name">Silvestr s Karlem Sedláčkem 2024</h1>
        <p className="event-date">27.12.-1.1.</p>
        <p className="event-date">Chata v horách</p>

        <p className="text">
          Karel je na stopě konci roku, který se mu snaží uniknout. Neznámo se žene na Karla.
        </p>
        <div>
          <a href="#" className="App-link">Info v přihlášce</a>
        </div>
        <a href={discordUrl} target="_blank" rel="noopener noreferrer">
          <img src={discord} className="Discord" alt="discord" />
        </a>
        <img src={damien} className="Damien" alt="damien" />
      </header>
    </div>
  );
}

export default App;
