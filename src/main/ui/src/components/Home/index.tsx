import { useCard } from '../../App';

function HomePage() {
  const { card } = useCard();

  return (
    <div>
      <img src={card} alt="Card Of The Day"/>

      <div className="disclaimerContainer">
        <p className="legalDisclaimer">©bushiroad All Rights Reserved.</p>
      </div>
    </div>
  )
}
export default HomePage;