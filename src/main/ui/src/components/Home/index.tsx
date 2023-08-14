import { useCard } from '../../App';

function HomePage() {
  const { card } = useCard();

  return (
    <div className="home">
      {
      card ?
        (
          <div className="COTDContainer">
            <h1>Card Of The Day:</h1>
            <div className="COTD">
              <img src={card.imageurlen} alt="Card Of The Day"/>
              <div className="COTDInfo">
                <div>
                  <p>Name: { card.name }</p>
                  <p>Grade: { card.grade }</p>
                  <p>Power: { card.power }</p>
                  <p>Shield: { card.shield }</p>
                  <p>Effect: { card.effect }</p>
                  <p>Flavor Text: { card.flavor }</p>
                  <p>Clan: { card.clan }</p>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div>
            <h1>Loading Card Of The Day...</h1>
          </div>
        )
      }
      <div className="disclaimerContainer">
        <p className="legalDisclaimer">©bushiroad All Rights Reserved.</p>
      </div>
    </div>
  )
}
export default HomePage;