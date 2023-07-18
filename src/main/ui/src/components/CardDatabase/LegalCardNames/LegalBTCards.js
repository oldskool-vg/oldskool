const legalBTCards = [
  'King of Knights, Alfred', // set 1 start
  'Blaster Blade',
  'Barcgal',
  'Dragonic Overlord',
  'Embodiment of Victory, Aleph',
  'CEO Amaterasu',
  'Battle Sister, Cocoa',
  'Asura Kaiser',
  'Demon Slaying Knight, Lohengrin',
  'Solitary Knight, Gancelot',
  'Flash Shield, Iseult',
  'Future Knight, Llew',
  'Vortex Dragon',
  'Dragon Knight, Aleph',
  'Wyvern Guard, Barri',
  'Lizard Soldier, Conroe',
  'Maiden of Libra',
  'Battle Sister, Mocha',
  'Battle Sister, Chocolat',
  'Juggernaut Maximum',
  'Knight of Silence, Gallatin',
  'Dragon Knight, Nehalem',
  'Wyvern Strike, Tejas',
  'Embodiment of Spear, Tahr',
  'Oracle Guardian, Apollon',
  'Oracle Guardian, Wiseman',
  'Lozenge Magus',
  'Mr. Invincible',
  'Brutal Jack',
  'King of Sword',
  'Queen of Heart',
  'Battleraizer',
  'Tyrant, Deathrex',
  'Assault Dragon, Blightops',
  'Stealth Dragon, Voidmaster',
  'Demon Eater',
  'Monster Frank',
  'Commodore Blueblood',
  'Hell Spider',
  'Bloody Hercules',
  'Covenant Knight, Randolf',
  'Little Sage, Marron',
  'Lake Maiden, Lien',
  'Wingal',
  'Weapons Dealer, Govannon',
  'Flogal',
  'Yggdrasil Maiden, Elaine',
  'Embodiment of Armor, Bahr',
  'Dragon Monk, Gojo',
  'Wyvern Strike, Jarran',
  'Dragon Dancer, Monica',
  'Lizard Soldier, Ganlu',
  'Dragon Monk, Genjo',
  'Oracle Guardian, Gemini',
  'Weather Girl, Milk',
  'Oracle Guardian, Nike',
  'Dream Eater',
  'Miracle Kid',
  'Hungry Dumpty',
  'Tough Boy',
  "Screamin' and Dancin' Announcer, Shout",
  'Clay-doll Mechanic',
  'Shining Lady',
  'Lucky Girl',
  'Ring Girl, Clara',
  'Sonic Noa',
  'Ironclad Dragon, Shieldon',
  'Stealth Beast, Chigasumi',
  'Stealth Dragon, Dreadmaster',
  'Stealth Beast, Hagakure',
  'Blue Dust',
  'Nightmare Baby',
  'Rock the Wall',
  'Highspeed, Brakki',
  'Wonder Boy',
  'Redshoe, Milly',
  'Dandy Guy, Romario',
  'Guiding Zombie',
  'Karma Queen',
  'Madame Mirage',
  'Sky Diver', // set 2 start
  'Spirit Exceed',
  'Ruin Shade',
  'Soul Saver Dragon',
  'Blazing Flare Dragon',
  'Seal Dragon, Blockade',
  'Scarlet Witch, CoCo',
  'Lion Heat',
  'General Seifried',
  'Cheer Girl, Marilyn',
  'King of Demonic Seas, Basskirk',
  'Witch Doctor of the Abyss, Negromarl',
  'Captain Nightmist',
  'Gust Jinn',
  'Young Pegasus Knight',
  'Chain-attack Sutherland',
  'Silent Tom',
  'Magician Girl, Kirara',
  'Twin Blader',
  'Top Idol, Flores',
  'Unite Attacker',
  'Treasured, Black Panther',
  'Dudley Dan',
  'Mecha Trainer',
  'Dancing Cutlass',
  'Chappie the Ghostie',
  'Gigantech Charger',
  'Great Sage, Barron',
  'High Dog Breeder, Akane',
  'Pongal',
  'Blazing Core Dragon',
  'Demonic Dragon Mage, Kimnara',
  'Luck Bird',
  'Winged Dragon, Skyptero',
  'Dragon Egg',
  'Top Idol, Aqua',
  'Bermuda Triangle Cadet, Caravel',
  'Master Fraude',
  'Scientist Monkey Rue',
  'Geograph Giant',
  'Panzer Gale',
  'Devil Summoner',
  'Cyclone Blitz',
  'Spike Brothers Assault Squad',
  'Sonic Breaker',
  'Cheerful Lynx',
  'Cheer Girl, Tiara',
  'Silence Joker',
  'Skeleton Swordsman',
  'Samurai Spirit',
  'Evil Shade',
  'Knight Spirit',
  'Skeleton Lookout',
  'Rick the Ghostie',
  'Rough Seas Banshee',
  'Knight of Truth, Gordon',
  'Soul Guiding Elf',
  'Pixy Fife and Drum',
  'Margal',
  'Dragon Knight, Berger',
  'Iron Tail Dragon',
  'Follower, Reas',
  'Lizard Runner, Nafd',
  'Gattling Claw Dragon',
  'Security Guardian',
  'One Who Gazes at the Truth',
  'Emergency Alarmer',
  'Psychic Bird',
  'Chaos Dragon, Dinochaos',
  'Cannon Fire Dragon, Cannon Gear',
  'NGM Prototype',
  'Cray Soldier',
  'Three Minutes',
  'Red Lightning',
  'Blazer Idols',
  'Lady Bomb',
  'Phantom Black',
  'Megacolony Battler A',
  'Silver Wolf',
  'Intelli-mouse',
  'Stil Vampir', // set 3 start
  'Demon World Marquis, Amon',
  'Nightmare Doll, Alice',
  'Ravenous Dragon, Gigarex',
  'Swordsman of the Explosive Flames, Palamedes',
  'Goddess of the Full Moon, Tsukuyomi',
  'Goddess of the Half Moon, Tsukuyomi',
  'Ultimate Lifeform, Cosmo Lord',
  'Edel Rose',
  'Gwynn the Ripper',
  'March Rabbit of Nightmareland',
  'Doreen the Thruster',
  'Dusk Illusionist, Robert',
  'Crimson Beast Tamer',
  'Mirror Demon',
  'Hades Hypnotist',
  'Archbird',
  'Knight of Godly Speed, Galahad',
  'Dual Axe Archdragon',
  'Super Dimensional Robo, Daiyusha',
  'Imprisoned Fallen Angel, Saraqael',
  'Werwolf Sieger',
  'Demon of Aspiration, Amon',
  'Alluring Succubus',
  'Vermillion Gatekeeper',
  'Barking Manticore',
  'Barking Cerberus',
  'Skull Juggler',
  'Midnight Bunny',
  'Turquoise Beast Tamer',
  'Hades Ringmaster',
  'Raging Dragon, Blastsaurus',
  'Ravenous Dragon, Megarex',
  'Savage Warrior',
  'Toypugal',
  'Drangal',
  'Oracle Guardian, Blue Eye',
  'Godhawk, Ichibyoshi',
  'Death Army Lady',
  'Death Army Guy',
  'Decadent Succubus',
  'Prisoner Beast',
  'Poet of Darkness, Amon',
  'Blitzritter',
  'Hades Puppet Master',
  'Cursed Doctor',
  'Dark Queen of Nightmareland',
  'Elephant Juggler',
  'Hungry Clown',
  'Dark Metal Bicorn',
  'Dynamite Juggler',
  'Spiral Master',
  'Candy Clown',
  'Rainbow Magician',
  'Vacuum Mammoth',
  'Savage Destroyer',
  'Raging Dragon, Sparksaurus',
  'Herbivorous Dragon, Brutosaurus',
  'Pack Dragon, Tinyrex',
  'Savage Shaman',
  'Black Cannon Tiger',
  'Knight of Tribulations, Galahad',
  'Gigantech Dozer',
  'Swordsman of the Blaze, Palamedes',
  'Knight of Quests, Galahad',
  'Borgal',
  'Alabaster Owl',
  'Secretary Angel',
  'Oracle Guardian, Red Eye',
  'Faithful Angel',
  'Goddess of the Crescent Moon, Tsukuyomi',
  'Battle Sister, Vanilla',
  'Victory Maker',
  'Flame Edge Dragon',
  'Dragon Dancer, Lourdes',
  'Blue Ray Dracokid',
  'Cannon Ball',
  'Masked Police, Grander',
  'Karenroid, Daisy',
  'Workerpod, Saturday',
  'Bloody Calf,',
  'Circle Magus',
  'Phantom Blaster Dragon', // set 4 start
  'Darkness Maiden, Macha',
  'Skull Witch, Nemain',
  'Enigman Storm',
  'Evil Armor General, Giraffa',
  'Amber Dragon, Eclipse',
  'Heatnail Salamander',
  'Stern Blaukluger',
  'Dark Metal Dragon',
  'Gururubau',
  'Dark Shield, Mac Lir',
  'Enigman Wave',
  'Cosmo Beak',
  'Diamond Ace',
  'Commander Laurel',
  'Elite Mutant, Giraffa',
  'Paralyze Madonna',
  'Amber Dragon, Dusk',
  'Blaukluger',
  'Fang of Light, Garmore',
  'Silver Spear Demon, Gusion',
  'Dark Mage, Badhabh Caar',
  'Knight of Darkness, Rugos',
  'Blaster Dark',
  'Fullbau',
  'Enigman Rain',
  'Twin Order',
  'Platinum Ace',
  'Cosmo Roar',
  'Enigman Flow',
  'Death Warden Ant Lion',
  'Violent Vesper',
  'Water Gang',
  'Gloom Flyman',
  'Larva Mutant, Giraffa',
  'Lizard Soldier, Raopia',
  'Amber Dragon, Dawn',
  'Armored Fairy, Shubiela',
  'Blaujunger',
  'Beast Knight, Garmore',
  'Demon World Castle, DonnerSchlag',
  'Demon World Castle, Fatalita',
  'Black Sage, Charon',
  'Witch of Nostrum, Arianrhod',
  'Doranbau',
  'Blaster Javelin',
  'Zappbau',
  'Grim Reaper',
  'Abyss Freezer',
  'Darkside Trumpeter',
  'Abyss Healer',
  'Enigman Shine',
  'Enigroid Comrade',
  'Enigman Ripple',
  'Glory Maker',
  'Justice Cobalt',
  'Army Penguin',
  'Cosmo Fang',
  'Justice Rose',
  'Ironcutter Beetle',
  'Tail Joe',
  'Pupa Mutant, Giraffa',
  'Stealth Millipede',
  'Sharp Nail Scorpio',
  'Raider Mantis',
  'Sonic Cicada',
  'Medical Battler, Ranpli',
  'Garnet Dragon, Flash',
  'Lava Arm Dragon',
  'Amber Dragon, Daylight',
  'Red Gem Carbuncle',
  'Flame Seed Salamander',
  'Eisenkugel',
  'Dancing Wolf',
  'Blaupanzer',
  'Toolkit Boy',
  'Fighting Battleship, Prometheus',
  'Grapple Mania',
  'Snogal',
  'Brugal',
  'Cursed Lancer',
  'Megacolony Battler B',
  'Circular Saw, Kiriel',   // set 6 starts
  'Battle Cupid, Nociel',
  'Ice Prison Necromancer, Cocytus',
  'Incandescent Lion, Blond Ezel',
  'Player of the Holy Bow, Viviane',
  'Dragonic Kaiser Vermillion',
  'Desert Gunner, Shiden',
  'Beast Deity, Azure Dragon',
  'Cosmo Healer, Ergodiel',
  'Core Memory, Armaros',
  'Love Machine Gun, Nociel',
  'Pure Keeper, Requiel',
  'Deadly Swordmaster',
  'Death Seeker, Thanatos',
  'Knight of Fury, Agravain',
  'Sleygal Dagger',
  'Halo Shield, Mark',
  'Vajra Emperor, Indra',
  'Dragonic Deathscythe',
  'Wyvern Guard, Guld',
  'Mobile Hospital, Feather Palace',
  'Drill Bullet, Geniel',
  'The Phoenix, Calamity Flame',
  'Gattling Shot, Barbiel',
  'Fate Healer, Ergodiel',
  'Miracle Feather Nurse',
  'Master Swordsman, Nightstorm',
  'Skeleton Demon World Knight',
  'Deadly Spirit',
  'Three Star Chef, Pietro',
  'Deadly Nightmare',
  'Knight of Superior Skills, Beaumains',
  'Mage of Calamity, Tripp',
  'Player of the Holy Axe, Nimue',
  'Crimson Lion Cub, Kyrph',
  'Riot General, Gyras',
  'Thunderstorm Dragoon',
  'Demonic Dragon Berserker, Garuda',
  'Desert Gunner, Raien',
  'Photon Bomber Wyvern',
  'Lizard Soldier, Saishin',
  'Beast Deity, White Tiger',
  'Pulse Wave, Adriel',
  'Million Ray Pegasus',
  'Iron Heart, Mastema',
  'Holy Zone, Penemue',
  'Burst Shot, Bethnael',
  'Thousand Ray Pegasus',
  'Heavenly Injector',
  'Lancet Shooter',
  'Carrier of the Life Water',
  'Clutch Rifle Angel',
  'Lightning Charger',
  'Thermometer Angel',
  'Rocket Dash Unicorn',
  'Bouquet Toss Messenger',
  'Aurora Ribbon Pigeon',
  'Critical Hit Angel',
  'Happy Bell, Nociel',
  'Sunny Smile Angel',
  'God-eating Zombie Shark',
  'Stormride Ghost Ship',
  'Undead Pirate of the Frigid Night',
  'Sea Navigator, Silver',
  'Skeleton Colossus',
  'Child Frank',
  'John the Ghostie',
  'Ripple Banshee',
  'Dragon Spirit',
  'Undead Pirate of the Cursed Rifle',
  'Captain Nightkid',
  'Skeleton Assault Troops Captain',
  'Ghoul Cannonball',
  'Hook-wielding Zombie',
  'Doctor Rouge',
  'Hades Steersman',
  'Gigantech Crusher',
  'Holy Mage, Manawydan',
  'Gigantech Commander',
  'Sacred Guardian Beast, Elephas',
  'Providence Strategist',
  'Knight of Elegant Skills, Gareth',
  'Waving Owl',
  'Little Battler, Tron',
  'Little Fighter, Cron',
  'Greeting Drummer',
  'Flame of Victory',
  'Breakthrough Dragon',
  'Hex Cannon Wyvern',
  'Dragon Monk, Ensei',
  'Red River Dragoon',
  'Stealth Fighter',
  'Lizard Soldier, Yowsh',
  'Spark Kid Dragoon',
  'Dragon Dancer, Catharina',
  'Malevolent Djinn',
  'Moai the Great',
  'Beast Deity, Black Tortoise',
  'Marvelous Hani',
  'Almighty Reporter',
  'Beast Deity, Scarlet Bird',
  'Red Card Dealer',
  'Greed Shade',
  'Coongal',
  'Battle Flag Knight, Laudine',
  'Satellitefall Dragon',
  'Dreadcharge Dragon',
  'Brightlance Dragoon',
  'Rising Phoenix',
  'Turboraizer',
  'Muscle Hercules',
  'Kungfu Kid, Bolta',
  'Cup Bowler',
  'School Hunter, Leo-pald', // set 7 starts
  'Guardian of Truth, Lox',
  'Binoculus Tiger',
  'Silver Thorn Dragon Tamer, Luquier',
  'Dark Lord of Abyss',
  'Emerald Witch, LaLa',
  "White Hare in the Moon's Shadow, Pellinore",
  'Chief Nurse, Shamsiel',
  'School Dominator, Apt',
  'Lamp Camel',
  'Monoculus Tiger',
  'Cable Sheep',
  'Sword Magician, Sarah',
  'Fire Breeze, Carrie',
  'Peek-a-boo',
  'Magician of Quantum Mechanics',
  'Blade Wing Reijy',
  'Emblem Master',
  'Yellow Bolt',
  'Listener of Truth, Dindrane',
  'Pencil Hero, Hammsuke',
  'Dumbbell Kangaroo',
  'Magnet Crocodile',
  'Law Official, Lox',
  'Pencil Squire, Hammsuke',
  'Thermometer Giraffe',
  'Tank Mouse',
  'Flask Marmoset',
  'Midnight Invader',
  'Dancing Princess of the Night Sky',
  "Bull's Eye, Mia",
  'Purple Trapezist',
  'Evil Eye Basilisk',
  'Hades Carriage of the Witching Hour',
  'Free Traveler',
  'Courting Succubus',
  'Sky Witch, NaNa',
  'Battle Sister, Glace',
  'Little Witch, LuLu',
  'Photon Archer, Griflet',
  'Lop Ear Shooter',
  'Spring Breeze Messenger',
  'Calculator Hippo',
  'Schoolbag Sea Lion',
  'Red Pencil Rhino',
  'Pencil Knight, Hammsuke',
  'Globe Armadillo',
  'Explosion Scientist, Bunta',
  'Multimeter Giraffe',
  'Canvas Koala',
  'Thumbtack Fighter, Resanori',
  'Tick Tock Flamingo',
  'Bringer of Knowledge, Lox',
  'Element Glider',
  'Failure Scientist, Ponkichi',
  'Feather Penguin',
  'Hula Hoop Capybara',
  'Acorn Master',
  'Schoolyard Prodigy, Lox',
  'Triangle Cobra',
  'Fortune-bringing Cat',
  'Alarm Chicken',
  'Eraser Alpaca',
  'Dictionary Goat',
  'Ruler Chameleon',
  'Nightmare Doll, Amy',
  'Dreamy Fortress',
  'See-saw Game Loser',
  'Drawing Dread',
  'Jumping Glenn',
  'Dreamy Ammonite',
  'See-saw Game Winner',
  'Pinky Piggy',
  'Girl Who Crossed the Gap',
  'Innocent Magician',
  'Flyer Flyer',
  'Cracker Musician',
  'Popcorn Boy',
  'Poison Juggler',
  'Demon Chariot of the Witching Hour',
  'Beast in Hand',
  'Cyber Beast',
  'Demon Bike of the Witching Hour',
  'Beautiful Harpuia',
  'Mirage Maker',
  'Rune Weaver',
  'Greedy Hand',
  'Devil in Shadow',
  'Mad Hatter of Nightmareland',
  'Hungry Egg of Nightmareland',
  'Cheshire Cat of Nightmareland',
  'Dark Knight of Nightmareland',
  'Battle Sister, Souffle',
  'Oracle Guardian, Shisa',
  'Moonsault Swallow',
  'Battle Sister, Eclair',
  'Master of Pain',
  'Disciple of Pain',
  'Speeder Hound',
  'Doctroid Megalos',
  'Doctroid Micros',
  'Hope Child, Turiel',
]