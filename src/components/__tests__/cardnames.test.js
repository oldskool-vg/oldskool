import axios from 'axios';

const fetchData = () => {
  axios.get('http://localhost:8080/cards')
      .then((res) => {
        return res.data;
      })
      .catch(err => {
        console.error('Error getting card data', err)
      })
}

describe('the database should contain the correct number of card entries total', () => {
  test ('number of card entries', async () => {
    const cardData = await fetchData();
    expect(cardData.length).toBe(750);
  });
})