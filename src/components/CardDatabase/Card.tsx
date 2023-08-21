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
              <div className='cardModalAttribute'>
                <p className='cardModalAttributeTitle'>Grade:&nbsp;</p>
                <p>{card.grade}</p>
              </div>
              <div className='cardModalAttribute'>
                <p className='cardModalAttributeTitle'>Power:&nbsp;</p>
                <p>{card.power}</p>
              </div>
              <div className='cardModalAttribute'>
                <p className='cardModalAttributeTitle'>Shield:&nbsp;</p>
                <p>{card.shield}</p>
              </div>
              <div className='cardModalAttribute'>
                <p className='cardModalAttributeTitle'>Skill:&nbsp;</p>
                <p>{card.skill}</p>
              </div>
              <div className='cardModalAttribute'>
                <p className='cardModalAttributeTitle'>Flavor:&nbsp;</p>
                <p>{card.flavor}</p>
              </div>
              <div className='cardModalAttribute'>
                <p className='cardModalAttributeTitle'>Effect:&nbsp;</p>
                <p>{card.effect}</p>
              </div>
              <div className='cardModalAttribute'>
                <p className='cardModalAttributeTitle'>Clan:&nbsp;</p>
                <p>{card.clan}</p>
              </div>
              <div className='cardModalAttribute'>
                <p className='cardModalAttributeTitle'>Race:&nbsp;</p>
                <p>{card.race}</p>
              </div>
              <div className='cardModalSets'>
                <p className='cardModalAttributeTitle'>Sets:&nbsp;</p>
                <p>{card.sets.map((set, idx) => (
                  <React.Fragment key={set+idx}>
                  - {set}
                  <br />
                </React.Fragment>
                ))}
                </p>
              </div>
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