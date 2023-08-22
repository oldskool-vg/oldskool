const axios = require('axios');

const { BT1 } = require('../CardDatabase/Cardnames/BTCards/BT1');
const { BT2 } = require('../CardDatabase/Cardnames/BTCards/BT2');
const { BT3 } = require('../CardDatabase/Cardnames/BTCards/BT3');
const { BT4 } = require('../CardDatabase/Cardnames/BTCards/BT4');
const { BT6 } = require('../CardDatabase/Cardnames/BTCards/BT6');
const { BT7 } = require('../CardDatabase/Cardnames/BTCards/BT7');

const { EB2 } = require('../CardDatabase/Cardnames/EBCards/EB2');
const { EB3 } = require('../CardDatabase/Cardnames/EBCards/EB3');

const { TD1 } = require('../CardDatabase/Cardnames/TDCards/TD1');
const { TD2 } = require('../CardDatabase/Cardnames/TDCards/TD2');
const { TD3 } = require('../CardDatabase/Cardnames/TDCards/TD3');
const { TD4 } = require('../CardDatabase/Cardnames/TDCards/TD4');
const { TD5 } = require('../CardDatabase/Cardnames/TDCards/TD5');
const { TD6 } = require('../CardDatabase/Cardnames/TDCards/TD6');

const { promoCards } = require('../CardDatabase/Cardnames/PromoCards');


const fetchAll = async () => {
  return await axios.get('http://localhost:8080/cards');
}
const fetchCard = async (cardname) => {
  return await axios.get('http://localhost:8080/cards/' + cardname)
    .catch(err => {
      console.log(cardname);
    })
}


describe('The database should contain the correct number of card entries total', () => {
  test ('number of card entries', async () => {
    return fetchAll().then(response => {
      expect(response.data.length).toBe(703);
    })
  });
})


describe('The database should contain all main Booster Set cards', () => {
  test('BT1', async () => {
    let results = [];
    for (const card of BT1) {
      await fetchCard(card)
        .then(response => {
          results.push(response.data);
        })
    }
    expect(results.length).toBe(80);
  }, 100000)
  test('BT2', async () => {
    let results = [];
    for (const card of BT2) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(80);
  }, 100000)
  test('BT3', async () => {
    let results = [];
    for (const card of BT3) {
      await fetchCard(card)
        .then(response => {
          results.push(response.data);
        })
    }
    expect(results.length).toBe(82);
  }, 100000)
  test('BT4', async () => {
    let results = [];
    for (const card of BT4) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
      // .catch(err => {

      // })
    }
    expect(results.length).toBe(82);
  }, 100000)
  test('BT6', async () => {
    let results = [];
    for (const card of BT6) {
      await fetchCard(card)
        .then(response => {
          results.push(response.data);
        })
    }
    expect(results.length).toBe(113);
  }, 100000)
  test('BT7', async () => {
    let results = [];
    for (const card of BT7) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(102);
  }, 100000)
})

describe('The database should contain all correct Extra Booster cards', () => {
  test('EB2', async () => {
    let results = [];
    for (const card of EB2) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(35);
  }, 100000)
  test('EB3', async () => {
    let results = [];
    for (const card of EB3) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(47);
  }, 100000)
})

describe('The database should contain all correct Trial Deck cards', () => {
  test('TD1', async () => {
    let results = [];
    for (const card of TD1) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(16);
  }, 100000)
  test('TD2', async () => {
    let results = [];
    for (const card of TD2) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(16);
  }, 100000)
  test('TD3', async () => {
    let results = [];
    for (const card of TD3) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(15);
  }, 100000)
  test('TD4', async () => {
    let results = [];
    for (const card of TD4) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(15);
  }, 100000)
  test('TD5', async () => {
    let results = [];
    for (const card of TD5) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(18);
  }, 100000)
  test('TD6', async () => {
    let results = [];
    for (const card of TD6) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(18);
  }, 100000)
})

describe('The database should contain all correct promo cards', () => {
  test('Promos', async () => {
    let results = [];
    for (const card of promoCards) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(31);
  }, 100000)
})