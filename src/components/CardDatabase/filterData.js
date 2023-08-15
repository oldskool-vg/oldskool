const grade = ["0", "1", "2", "3"];

const power = [3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000];

const shield = [0, 5000, 10000];

const clan = [
  "Royal Paladin",
  "Shadow Paladin",
  "Gold Paladin",
  "Oracle Think Tank",
  "Angel Feather",
  "Kagero",
  "Narukami",
  "Tachikaze",
  "Nubatama",
  "Bermuda Triangle",
  "Granblue",
  "Dark Irregulars",
  "Spike Brothers",
  "Pale Moon",
  "Great Nature",
  "Megacolony",
  "Nova Grappler",
  "Dimension Police",
]

const sets = [
  "Booster Set 1: Descent of the King of Knights",
  "Booster Set 2: Onslaught of Dragon Souls",
  "Booster Set 3: Demonic Lord Invasion",
  "Booster Set 4: Eclipse of Illusionary Shadows",
  "Booster Set 6: Breaker of Limits",
  "Booster Set 7: Rampage of the Beast King",
  "Trial Deck 1: Blaster Blade",
  "Trial Deck 2: Dragonic Overlord",
  "Trial Deck 3: Golden Mechanical Soldier",
  "Trial Deck 4: Maiden Princess of the Cherry Blossoms",
  "Trial Deck 5: Slash of Silver Wolf",
  "Trial Deck 6: Resonance of Thunder Dragon",
  "Extra Booster: Banquet of Divas",
  "Extra Booster: Cavalry of Black Steel",
]

const filterOptions = [
  {
    label: 'Grade',
    options: [
      { value: '0', label: 'Grade 0' },
      { value: '1', label: 'Grade 1' },
      { value: '2', label: 'Grade 2' },
      { value: '3', label: 'Grade 3' },
    ],
  },
  {
    label: 'Power',
    options: [
      { value: 3000, label: 'Power 3000' },
      { value: 4000, label: 'Power 4000' },
      { value: 5000, label: 'Power 5000' },
      { value: 6000, label: 'Power 6000' },
      { value: 7000, label: 'Power 7000' },
      { value: 8000, label: 'Power 8000' },
      { value: 9000, label: 'Power 9000' },
      { value: 10000, label: 'Power 10000' },
      { value: 11000, label: 'Power 11000' },
    ],
  },
  {
    label: 'Shield',
    options: [
      { value: 0, label: 'Shield 0' },
      { value: 5000, label: 'Shield 5000' },
      { value: 10000, label: 'Shield 10000' },
    ],
  },
  {
    label: 'Clan',
    options: [
      { value: 'Royal Paladin', label: 'Royal Paladin' },
      { value: 'Shadow Paladin', label: 'Shadow Paladin' },
      { value: 'Gold Paladin', label: 'Gold Paladin' },
      { value: 'Oracle Think Tank', label: 'Oracle Think Tank' },
      { value: 'Angel Feather', label: 'Angel Feather' },
      { value: 'Kagero', label: 'Kagero' },
      { value: 'Narukami', label: 'Narukami' },
      { value: 'Tachikaze', label: 'Tachikaze' },
      { value: 'Nubatama', label: 'Nubatama' },
      { value: 'Bermuda Triangle', label: 'Bermuda Triangle' },
      { value: 'Granblue', label: 'Granblue' },
      { value: 'Dark Irregulars', label: 'Dark Irregulars' },
      { value: 'Spike Brothers', label: 'Spike Brothers' },
      { value: 'Pale Moon', label: 'Pale Moon' },
      { value: 'Great Nature', label: 'Great Nature' },
      { value: 'Megacolony', label: 'Megacolony' },
      { value: 'Nova Grappler', label: 'Nova Grappler' },
      { value: 'Dimension Police', label: 'Dimension Police' },
    ],
  },
  {
    label: 'Sets',
    options: [
      { value: 'Booster Set 1: Descent of the King of Knights', label: 'Booster Set 1: Descent of the King of Knights' },
      { value: 'Booster Set 2: Onslaught of Dragon Souls', label: 'Booster Set 2: Onslaught of Dragon Souls' },
      { value: 'Booster Set 3: Demonic Lord Invasion', label: 'Booster Set 3: Demonic Lord Invasion' },
      { value: 'Booster Set 4: Eclipse of Illusionary Shadows', label: 'Booster Set 4: Eclipse of Illusionary Shadows' },
      { value: 'Booster Set 6: Breaker of Limits', label: 'Booster Set 6: Breaker of Limits' },
      { value: 'Booster Set 7: Rampage of the Beast King', label: 'Booster Set 7: Rampage of the Beast King' },
      { value: 'Trial Deck 1: Blaster Blade', label: 'Trial Deck 1: Blaster Blade' },
      { value: 'Trial Deck 2: Dragonic Overlord', label: 'Trial Deck 2: Dragonic Overlord' },
      { value: 'Trial Deck 3: Golden Mechanical Soldier', label: 'Trial Deck 3: Golden Mechanical Soldier' },
      { value: 'Trial Deck 4: Maiden Princess of the Cherry Blossoms', label: 'Trial Deck 4: Maiden Princess of the Cherry Blossoms' },
      { value: 'Trial Deck 5: Slash of Silver Wolf', label: 'Trial Deck 5: Slash of Silver Wolf' },
      { value: 'Trial Deck 6: Resonance of Thunder Dragon', label: 'Trial Deck 6: Resonance of Thunder Dragon' },
      { value: 'Extra Booster: Banquet of Divas', label: 'Extra Booster: Banquet of Divas' },
      { value: 'Extra Booster: Cavalry of Black Steel', label: 'Extra Booster: Cavalry of Black Steel' },
    ],
  },
];

export default filterOptions