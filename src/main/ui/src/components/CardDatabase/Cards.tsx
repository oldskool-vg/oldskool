import React, { useState, useEffect } from 'react';
import Card from './Card'
import { CardData } from '../../types';

const mockData: CardData[] = [
  {
    _id: "momsSpaghettiHotnReady",
    name: "Abyss Healer",
    grade: "0",
    cardType: "Trigger Unit",
    power: 5000,
    shield: 10000,
    skill: "Boost",
    flavor: "Not yet! I will not let you fall before we demolish the enemy!",
    effect: "(You may only have up to four cards with 'HEAL' in a deck.)",
    clan: "Shadow Paladin",
    race: "Angel",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/42-en.png",
    sets: ["Booster Set 4: Eclipse of Illusionary Shadows"],
    legality: "classic",
  },
  {
    _id: "loseUrselfInTheMusicTheMoment",
    name: "Armored Fairy, Shubiela",
    grade: "3",
    cardType: "",
    power: 10000,
    shield: 0,
    skill: "Twin Drive!!",
    flavor: "",
    effect: "[AUTO](VC/RC):[Soul Blast (3)] When this unit's attack hits, if you have a «Nova Grappler» vanguard, you may pay the cost. If you do, draw a card.[AUTO](VC): When this unit is boosted by a «Nova Grappler», this unit gets [Power]+3000 until end of that battle.",
    clan: "Nova Grappler",
    race: "Battleroid",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/375-en.png",
    sets: [
        "Booster Set 4: Eclipse of Illusionary Shadows",
        "Extra Booster: Infinite Phantom Legion"
    ],
    legality: "classic",
  },
  {
    _id: "catchTheseHands",
    name: "Flash Shield, Iseult",
    grade: "1",
    cardType: "",
    power: 6000,
    shield: 0,
    skill: "Boost",
    flavor: "",
    effect: "[CONT]:Sentinel (You may only have up to four cards with [CONT]:Sentinel in a deck.)[AUTO]:[Choose a «Royal Paladin» from your hand, and discard it] When this unit is placed on (GC), you may pay the cost. If you do, choose one of your «Royal Paladin» that is being attacked, and that unit cannot be hit until end of that battle.",
    clan: "Royal Paladin",
    race: "Human",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/3642-en.png",
    sets: [
                "G Comic Booster 1: Vanguard & Deletor",
                "Booster Set 1: Descent of the King of Knights"
    ],
    legality: "classic",
  },
  {
    _id: "momsSpaghettiHotnReady",
    name: "Abyss Healer",
    grade: "0",
    cardType: "Trigger Unit",
    power: 5000,
    shield: 10000,
    skill: "Boost",
    flavor: "Not yet! I will not let you fall before we demolish the enemy!",
    effect: "(You may only have up to four cards with 'HEAL' in a deck.)",
    clan: "Shadow Paladin",
    race: "Angel",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/42-en.png",
    sets: ["Booster Set 4: Eclipse of Illusionary Shadows"],
    legality: "classic",
  },
  {
    _id: "loseUrselfInTheMusicTheMoment",
    name: "Armored Fairy, Shubiela",
    grade: "3",
    cardType: "",
    power: 10000,
    shield: 0,
    skill: "Twin Drive!!",
    flavor: "",
    effect: "[AUTO](VC/RC):[Soul Blast (3)] When this unit's attack hits, if you have a «Nova Grappler» vanguard, you may pay the cost. If you do, draw a card.[AUTO](VC): When this unit is boosted by a «Nova Grappler», this unit gets [Power]+3000 until end of that battle.",
    clan: "Nova Grappler",
    race: "Battleroid",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/375-en.png",
    sets: [
        "Booster Set 4: Eclipse of Illusionary Shadows",
        "Extra Booster: Infinite Phantom Legion"
    ],
    legality: "classic",
  },
  {
    _id: "catchTheseHands",
    name: "Flash Shield, Iseult",
    grade: "1",
    cardType: "",
    power: 6000,
    shield: 0,
    skill: "Boost",
    flavor: "",
    effect: "[CONT]:Sentinel (You may only have up to four cards with [CONT]:Sentinel in a deck.)[AUTO]:[Choose a «Royal Paladin» from your hand, and discard it] When this unit is placed on (GC), you may pay the cost. If you do, choose one of your «Royal Paladin» that is being attacked, and that unit cannot be hit until end of that battle.",
    clan: "Royal Paladin",
    race: "Human",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/3642-en.png",
    sets: [
                "G Comic Booster 1: Vanguard & Deletor",
                "Booster Set 1: Descent of the King of Knights"
    ],
    legality: "classic",
  },
  {
    _id: "momsSpaghettiHotnReady",
    name: "Abyss Healer",
    grade: "0",
    cardType: "Trigger Unit",
    power: 5000,
    shield: 10000,
    skill: "Boost",
    flavor: "Not yet! I will not let you fall before we demolish the enemy!",
    effect: "(You may only have up to four cards with 'HEAL' in a deck.)",
    clan: "Shadow Paladin",
    race: "Angel",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/42-en.png",
    sets: ["Booster Set 4: Eclipse of Illusionary Shadows"],
    legality: "classic",
  },
  {
    _id: "loseUrselfInTheMusicTheMoment",
    name: "Armored Fairy, Shubiela",
    grade: "3",
    cardType: "",
    power: 10000,
    shield: 0,
    skill: "Twin Drive!!",
    flavor: "",
    effect: "[AUTO](VC/RC):[Soul Blast (3)] When this unit's attack hits, if you have a «Nova Grappler» vanguard, you may pay the cost. If you do, draw a card.[AUTO](VC): When this unit is boosted by a «Nova Grappler», this unit gets [Power]+3000 until end of that battle.",
    clan: "Nova Grappler",
    race: "Battleroid",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/375-en.png",
    sets: [
        "Booster Set 4: Eclipse of Illusionary Shadows",
        "Extra Booster: Infinite Phantom Legion"
    ],
    legality: "classic",
  },
  {
    _id: "catchTheseHands",
    name: "Flash Shield, Iseult",
    grade: "1",
    cardType: "",
    power: 6000,
    shield: 0,
    skill: "Boost",
    flavor: "",
    effect: "[CONT]:Sentinel (You may only have up to four cards with [CONT]:Sentinel in a deck.)[AUTO]:[Choose a «Royal Paladin» from your hand, and discard it] When this unit is placed on (GC), you may pay the cost. If you do, choose one of your «Royal Paladin» that is being attacked, and that unit cannot be hit until end of that battle.",
    clan: "Royal Paladin",
    race: "Human",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/3642-en.png",
    sets: [
                "G Comic Booster 1: Vanguard & Deletor",
                "Booster Set 1: Descent of the King of Knights"
    ],
    legality: "classic",
  },
  {
    _id: "momsSpaghettiHotnReady",
    name: "Abyss Healer",
    grade: "0",
    cardType: "Trigger Unit",
    power: 5000,
    shield: 10000,
    skill: "Boost",
    flavor: "Not yet! I will not let you fall before we demolish the enemy!",
    effect: "(You may only have up to four cards with 'HEAL' in a deck.)",
    clan: "Shadow Paladin",
    race: "Angel",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/42-en.png",
    sets: ["Booster Set 4: Eclipse of Illusionary Shadows"],
    legality: "classic",
  },
  {
    _id: "loseUrselfInTheMusicTheMoment",
    name: "Armored Fairy, Shubiela",
    grade: "3",
    cardType: "",
    power: 10000,
    shield: 0,
    skill: "Twin Drive!!",
    flavor: "",
    effect: "[AUTO](VC/RC):[Soul Blast (3)] When this unit's attack hits, if you have a «Nova Grappler» vanguard, you may pay the cost. If you do, draw a card.[AUTO](VC): When this unit is boosted by a «Nova Grappler», this unit gets [Power]+3000 until end of that battle.",
    clan: "Nova Grappler",
    race: "Battleroid",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/375-en.png",
    sets: [
        "Booster Set 4: Eclipse of Illusionary Shadows",
        "Extra Booster: Infinite Phantom Legion"
    ],
    legality: "classic",
  },
  {
    _id: "catchTheseHands",
    name: "Flash Shield, Iseult",
    grade: "1",
    cardType: "",
    power: 6000,
    shield: 0,
    skill: "Boost",
    flavor: "",
    effect: "[CONT]:Sentinel (You may only have up to four cards with [CONT]:Sentinel in a deck.)[AUTO]:[Choose a «Royal Paladin» from your hand, and discard it] When this unit is placed on (GC), you may pay the cost. If you do, choose one of your «Royal Paladin» that is being attacked, and that unit cannot be hit until end of that battle.",
    clan: "Royal Paladin",
    race: "Human",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/3642-en.png",
    sets: [
                "G Comic Booster 1: Vanguard & Deletor",
                "Booster Set 1: Descent of the King of Knights"
    ],
    legality: "classic",
  },
  {
    _id: "momsSpaghettiHotnReady",
    name: "Abyss Healer",
    grade: "0",
    cardType: "Trigger Unit",
    power: 5000,
    shield: 10000,
    skill: "Boost",
    flavor: "Not yet! I will not let you fall before we demolish the enemy!",
    effect: "(You may only have up to four cards with 'HEAL' in a deck.)",
    clan: "Shadow Paladin",
    race: "Angel",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/42-en.png",
    sets: ["Booster Set 4: Eclipse of Illusionary Shadows"],
    legality: "classic",
  },
  {
    _id: "loseUrselfInTheMusicTheMoment",
    name: "Armored Fairy, Shubiela",
    grade: "3",
    cardType: "",
    power: 10000,
    shield: 0,
    skill: "Twin Drive!!",
    flavor: "",
    effect: "[AUTO](VC/RC):[Soul Blast (3)] When this unit's attack hits, if you have a «Nova Grappler» vanguard, you may pay the cost. If you do, draw a card.[AUTO](VC): When this unit is boosted by a «Nova Grappler», this unit gets [Power]+3000 until end of that battle.",
    clan: "Nova Grappler",
    race: "Battleroid",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/375-en.png",
    sets: [
        "Booster Set 4: Eclipse of Illusionary Shadows",
        "Extra Booster: Infinite Phantom Legion"
    ],
    legality: "classic",
  },
  {
    _id: "catchTheseHands",
    name: "Flash Shield, Iseult",
    grade: "1",
    cardType: "",
    power: 6000,
    shield: 0,
    skill: "Boost",
    flavor: "",
    effect: "[CONT]:Sentinel (You may only have up to four cards with [CONT]:Sentinel in a deck.)[AUTO]:[Choose a «Royal Paladin» from your hand, and discard it] When this unit is placed on (GC), you may pay the cost. If you do, choose one of your «Royal Paladin» that is being attacked, and that unit cannot be hit until end of that battle.",
    clan: "Royal Paladin",
    race: "Human",
    image: "https://cfv-card-images.s3.us-east-2.amazonaws.com/3642-en.png",
    sets: [
                "G Comic Booster 1: Vanguard & Deletor",
                "Booster Set 1: Descent of the King of Knights"
    ],
    legality: "classic",
  }
]

type CardsProps = {
  search: string;
};

const Cards: React.FC<CardsProps> = ({ search }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardData[]>([]);

  useEffect(() => {
    if (search === '') {
      setFilteredCards(cards);
    } else {
      const filtered = cards.filter((card) => (
        card.name.toLowerCase().includes(search)
      ))
      setFilteredCards(filtered)
    }
  }, [search])

  useEffect(() => {
    setCards(mockData);
    setFilteredCards(mockData)
  }, []);


  return (
    <div className='cards'>
      {filteredCards.map((card, idx) =>
        (
          <Card key={`${card._id}${idx}`} card={card}/>
        )
      )}
    </div>
  )
}

export default Cards