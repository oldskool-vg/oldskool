import React, { useState } from 'react';
import { CardData } from '../../types';

type CardProps = {
  card: CardData;
  currentModal: String;
  setCurrentModal:  React.Dispatch<React.SetStateAction<string>>;
};

const Card: React.FC<CardProps> = ({ card, currentModal, setCurrentModal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
    setCurrentModal(card.name)
  };

  const closeModal = () => {
    document.body.style.overflow = 'unset';
    setCurrentModal('');
    setModalOpen(false);
  };

  return (
    <div>
      <img src={card.imageurlen} alt={card.name} onClick={() => {currentModal === '' ? openModal() : closeModal()}} />
      {modalOpen && currentModal === card.name && (
        <div>
        <dialog className='cardModal' open>
          <div className='cardModalHeader'>
            <h2>{card.name}</h2>
            <button className='cardModalClose' onClick={closeModal}>x</button>
          </div>
          <div className='cardModalContent'>
            <div className='cardModalAttributes'>
              <p>Grade: {card.grade}</p>
              {/* <p>Card Type: {card.cardtype}</p> */}
              <p>Power: {card.power}</p>
              <p>Shield: {card.shield}</p>
              <p>Skill: {card.skill}</p>
              <p>Flavor: {card.flavor}</p>
              <p>Effect: {card.effect}</p>
              <p>Clan: {card.clan}</p>
              <p>Race: {card.race}</p>
              <p>Sets: {card.sets}</p>
              {/* <p>Legality: {card.legality}</p> */}
            </div>
            <div>
              <img className='cardModalImg' src={card.imageurlen} alt={card.name}/>
            </div>
          </div>
        </dialog>
        <div className='backdrop' onClick={closeModal}></div>
      </div>
      )}
    </div>
  );
};

export default Card;