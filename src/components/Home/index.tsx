import { useCard } from '../../App';
import bg from '../assets/cray-bg.jpg';

function HomePage() {
  const { card } = useCard();

  return (
    <div className="homeContainer">
      <div className="home">
        {
        card ?
          (
            <div className="COTDContainer">
              <div className="COTDHeader">
                <h1>Card Of The Day: { card.name }</h1>
              </div>
              <div className="COTD">
                <div className="cardContainer">
                  <img src={card.imageurlen} alt="Card Of The Day"/>
                </div>
                <div className="COTDInfo">
                  <div>
                    <p>Name: { card.name }</p>
                    <p>Grade: { card.grade }</p>
                    <p>Power: { card.power }</p>
                    <p>Shield: { card.shield }</p>
                    <p>Flavor Text: { card.flavor }</p>
                    <p>Effect: { card.effect }</p>
                    <p>Clan: { card.clan }</p>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="COTDContainer">
              <h1>Loading Card Of The Day...</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default HomePage;