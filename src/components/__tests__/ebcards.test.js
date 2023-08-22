const axios = require('axios');
const { EB2 } = require('../CardDatabase/Cardnames/EBCards/EB2');
const { EB3 } = require('../CardDatabase/Cardnames/EBCards/EB3');

const fetchCard = async (cardname) => {
  return await axios.get('http://localhost:8080/cards/' + cardname)
    .catch(err => {
      console.log(cardname);
    })
}

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
