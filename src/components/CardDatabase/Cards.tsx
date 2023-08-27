import React, { useState, useEffect } from 'react';
import Card from './Card'
import { CardData } from '../../types';
import axios from 'axios';

type CardsProps = {
  search: string;
  filters: any[];
  filterTypes: string[];
};

const Cards: React.FC<CardsProps> = ({ search, filters, filterTypes }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]);
  const [currentModal, setCurrentModal] = useState('');

  useEffect(() => {
    if (search === '' && !filters.length) {
      setFilteredCards(cards);
    } else {
      let filtered = cards.filter((card) => (
        card.name.toLowerCase().includes(search)
      ))
      if (filterTypes.includes('Grade')) {
        filtered = filtered.filter((card) => (
          filters.includes(card.grade)
        ))
      }
      if (filterTypes.includes('Power')) {
        filtered = filtered.filter((card) => (
          filters.includes(card.power)
        ))
      }
      if (filterTypes.includes('Shield')) {
        filtered = filtered.filter((card) => (
          filters.includes(card.shield)
        ))
      }
      if (filterTypes.includes('Clan')) {
        filtered = filtered.filter((card) => (
          filters.includes(card.clan)
        ))
      }
      if (filterTypes.includes('Sets')) {
        filtered = filtered.filter((card) => (
          card.sets.some((set) => filters.includes(set))
        ));
      }
      setFilteredCards(filtered)
    }
  }, [search, filters])

  useEffect(() => {
    const url = process.env.REACT_APP_API_KEY + '/cards'

    axios.get<CardData[]>(url)
      .then((res) => {
        setCards(res.data);
        setFilteredCards(res.data);
        console.log(res.data)
      })
      .catch(err => {
        console.error('Error getting card data', err)
      })
  }, []);

  return (
    <div className='cards'>
      {filteredCards.map((card, idx) =>
        (
          <Card key={`${card._id}${idx}`} card={card} currentModal={currentModal} setCurrentModal={setCurrentModal}/>
        )
      )}
    </div>
  )
}

export default Cards