const axios = require('axios');
const { promoCards } = require('../CardDatabase/Cardnames/PromoCards');
const { TD1 } = require('../CardDatabase/Cardnames/TDCards/TD1');
const { TD2 } = require('../CardDatabase/Cardnames/TDCards/TD2');
const { TD3 } = require('../CardDatabase/Cardnames/TDCards/TD3');
const { TD4 } = require('../CardDatabase/Cardnames/TDCards/TD4');
const { TD5 } = require('../CardDatabase/Cardnames/TDCards/TD5');
const { TD6 } = require('../CardDatabase/Cardnames/TDCards/TD6');


const fetchAll = async () => {
  return await axios.get('http://localhost:8080/cards');
}
const fetchCard = async (cardname) => {
  return await axios.get('http://localhost:8080/cards/' + cardname);
}


describe('The database should contain the correct number of card entries total', () => {
  test ('number of card entries', async () => {
    return fetchAll().then(response => {
      expect(response.data.length).toBe(750);
    })
  });
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
  })
  test('TD2', async () => {
    let results = [];
    for (const card of TD2) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(16);
  })
  test('TD3', async () => {
    let results = [];
    for (const card of TD3) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(15);
  })
  test('TD4', async () => {
    let results = [];
    for (const card of TD4) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(15);
  })
  test('TD5', async () => {
    let results = [];
    for (const card of TD5) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(18);
  })
  test('TD6', async () => {
    let results = [];
    for (const card of TD6) {
      await fetchCard(card).then(response => {
        results.push(response.data);
      })
    }
    expect(results.length).toBe(18);
  })
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
  })
})