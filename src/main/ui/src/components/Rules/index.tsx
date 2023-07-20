import React, { useState } from 'react';
import Banlist from './Banlist';
// import Cardpool from './Cardpool';
import LegalSets from './LegalSets';
import RuleDifferences from './RuleDifferences';

interface RulesProps {
  updateState: (newState: string) => void;
}

const Rules: React.FC<RulesProps> = ({updateState}) => {
  const switchToCardDB = () => {
    updateState('CardDatabase');
  }

  const [showBanlist, setShowBanlist] = useState<boolean>(false);
  let banlistDetails = null;
  if (showBanlist === true) {
    banlistDetails = <Banlist />
  } else {
    banlistDetails = null;
  }

  const [showLegalSets, setShowLegalSets] = useState<boolean>(false);
  let legalSetDetails = null;
  if (showLegalSets === true) {
    legalSetDetails = <LegalSets />
  } else {
    legalSetDetails = null;
  }

  const [showRulebook, setShowRulebook] = useState<boolean>(false);

  const [showRuleDiffs, setShowRuleDiffs] = useState<boolean>(false);
  let ruleDiffDetails = null;
  if (showRuleDiffs === true) {
    ruleDiffDetails = <RuleDifferences />
  } else {
    ruleDiffDetails = null;
  }


  return (
    <div className="Rules">
      <div>
        <h2>Format Rules</h2>
      </div>
      <ul>
        <li>
          <button onClick={(e) => setShowBanlist(!showBanlist)}>Banlist</button>
        </li>
        <div>{banlistDetails}</div>

        <li>
          <button onClick={() => switchToCardDB()}>Cardpool</button>
        </li>

        <li>
          <button onClick={(e) => setShowLegalSets(!showLegalSets)}>Legal Sets</button>
        </li>
        <div>{legalSetDetails}</div>

        <li>
          <button>Rulebook</button>
        </li>

        <li>
          <button onClick={(e) => setShowRuleDiffs(!showRuleDiffs)}>Rule Differences between Oldskool and Modern</button>
        </li>
        <div>{ruleDiffDetails}</div>

      </ul>
    </div>
  )
}
export default Rules;