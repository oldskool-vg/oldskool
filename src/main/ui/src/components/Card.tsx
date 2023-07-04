import React, { useState } from 'react';
import { CardData } from '../types';

type CardProps = {
  card: CardData;
};

const Card: React.FC<CardProps> = ({ card }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <img src={card.image} alt={card.name} onClick={openModal} />
      {modalOpen && (
        <dialog open>
          <div>
            <h2>{card.name}</h2>
            <p>Grade: {card.grade}</p>
            <p>Card Type: {card.cardType}</p>
            <p>Power: {card.power}</p>
            <p>Shield: {card.shield}</p>
            <p>Skill: {card.skill}</p>
            <p>Flavor: {card.flavor}</p>
            <p>Effect: {card.effect}</p>
            <p>Clan: {card.clan}</p>
            <p>Race: {card.race}</p>
            <p>Sets: {card.sets}</p>
            <p>Legality: {card.legality}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Card;