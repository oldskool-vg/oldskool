import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardData } from './types';
import { Outlet, useOutletContext } from 'react-router-dom';
import Discord from './components/Discord';

type CardOfTheDay = { card: CardData };

const App: React.FC = () => {
  const [card, setCard] = useState<CardOfTheDay>();

  useEffect(() => {
    axios.get('http://localhost:8080/cardoftheday')
      .then((res) => {
        setCard(res.data);
      })
      .catch((err) => {
        console.error('Error getting card data', err)
      })
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">Oldskool Vanguard</h1>

          <div className="Navigation">
            <a href={'/'} className="yellow-button">Home</a>
            <a href={'/about'} className="yellow-button">About</a>
            <a href={'/cards'} className="red-button">Card Database</a>
            <a href={'/rules'} className="yellow-button">Rules</a>
            <Discord />
          </div>
        </div>
      </header>

      <div className="RenderMeBro">
        <Outlet context={{ card }} />
      </div>
    </div>
  );
}
export default App;


export function useCard() {
  return useOutletContext<CardOfTheDay>();
}