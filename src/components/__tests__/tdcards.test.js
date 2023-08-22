const axios = require('axios');
const { TD1 } = require('../CardDatabase/Cardnames/TDCards/TD1');
const { TD2 } = require('../CardDatabase/Cardnames/TDCards/TD2');
const { TD3 } = require('../CardDatabase/Cardnames/TDCards/TD3');
const { TD4 } = require('../CardDatabase/Cardnames/TDCards/TD4');
const { TD5 } = require('../CardDatabase/Cardnames/TDCards/TD5');
const { TD6 } = require('../CardDatabase/Cardnames/TDCards/TD6');

const fetchCard = async (cardname) => {
  return await axios.get('http://localhost:8080/cards/' + cardname)
    .catch(err => {
      console.log(cardname);
    })
}

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
