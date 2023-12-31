import { useState } from 'react';
import Banlist from './Banlist';
import LegalSets from './LegalSets';
import Rulebook from './Rulebook';
import RuleDifferences from './RuleDifferences';
import { useSpring, animated } from "react-spring";
import banner1 from '../assets/banner1.jpg';

function Rules() {

  const [showBanlist, setShowBanlist] = useState<boolean>(false);
  const openBanlist = useSpring({
    from: { maxHeight: 25 },
    to: { maxHeight: showBanlist ? 1000 : 25 },
    config: { duration: 300 }
  })

  const [showLegalSets, setShowLegalSets] = useState<boolean>(false);
  const openLegalSets = useSpring({
    from: { maxHeight: 25 },
    to: { maxHeight: showLegalSets ? 1500 : 25 },
    config: { duration: 300 }
  })

  const [showRulebook, setShowRulebook] = useState<boolean>(false);
  const openRulebook = useSpring({
    from: { maxHeight: 25 },
    to: { maxHeight: showRulebook ? 1000 : 25 },
    config: { duration: 300 }
  })

  const [showRuleDiffs, setShowRuleDiffs] = useState<boolean>(false);
  const openRuleDiffs = useSpring({
    from: { maxHeight: 25 },
    to: { maxHeight: showRuleDiffs ? 1000 : 25 },
    config: { duration: 300 }
  })


  return (
    <div className="rules">
      <img src={banner1} className="bannerByItself" alt="banner2" />
      <animated.div className="accordion-item" style={openBanlist}>
        <div className="accordion-header" onClick={() => setShowBanlist(!showBanlist)}>
          <h2>Banlist</h2>
          <h2>{showBanlist ? ' - ' : '+'}</h2>
        </div>
        <Banlist />
      </animated.div>

      <a href={'/cards'} className="go-to-cardpool">
        <h2>Card Pool</h2>
        <h2>⧉</h2>
      </a>

      <animated.div className="accordion-item" style={openLegalSets}>
        <div className="accordion-header" onClick={() => setShowLegalSets(!showLegalSets)}>
          <h2>Legal Sets</h2>
          <h2>{showLegalSets ? ' - ' : '+'}</h2>
        </div>
        <LegalSets />
      </animated.div>

      <animated.div className="accordion-item" style={openRulebook}>
        <div className="accordion-header" onClick={() => setShowRulebook(!showRulebook)}>
          <h2>Rulebook</h2>
          <h2>{showRulebook ? ' - ' : '+'}</h2>
        </div>
        <Rulebook />
      </animated.div>

      <animated.div className="accordion-item" style={openRuleDiffs}>
        <div className="accordion-header" onClick={() => setShowRuleDiffs(!showRuleDiffs)}>
          <h2>Rule Differences between Oldskool and Modern</h2>
          <h2>{showRuleDiffs ? ' - ' : '+'}</h2>
        </div>
        <RuleDifferences />
      </animated.div>

      <div className="disclaimerContainer">
        <p className="legalDisclaimer">©bushiroad All Rights Reserved.</p>
      </div>
    </div>
  )
}
export default Rules;