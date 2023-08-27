import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardData } from './types';
import { Outlet, useOutletContext } from 'react-router-dom';
import Discord from './components/Discord';
import { allCards } from './components/CardDatabase/Cardnames/allCards';

type CardOfTheDay = { card: CardData };

const App: React.FC = () => {
  const [card, setCard] = useState<CardOfTheDay>();

  const cardOfTheDay = () => {
    // Extract month, day, and year from the date string
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();
    // const [month, day, year] = date.split('/').map(Number);

    // Perform some operations to create a hash
    const hashValue = ((year + month + day) * 137 + 73) % 703;

    // Map the hash value to the desired range [0, 702]
    const mappedHash = hashValue % 703;

    return allCards[mappedHash];
  }


  useEffect(() => {
    const todaysCard = cardOfTheDay().name;

    const url = process.env.REACT_APP_API_KEY + '/cards/' + todaysCard;
    console.log('url is', url);

    axios.get(url)
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