const axios = require('axios');
const { promoCards } = require('../CardDatabase/Cardnames/PromoCards');

const fetchCard = async (cardname) => {
  return await axios.get('http://localhost:8080/cards/' + cardname)
    .catch(err => {
      console.log(cardname);
    })
}

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