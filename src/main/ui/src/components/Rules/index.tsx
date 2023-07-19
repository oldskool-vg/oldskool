import React, { useState } from 'react';
import Banlist from './Banlist';
import Cardpool from './Cardpool';
import LegalSets from './LegalSets';
import RuleDifferences from './RuleDifferences';

function Rules() {
  const [showBanlist, setShowBanlist] = useState<boolean>(false);
  let banlistDetails = null;
  if (showBanlist === true) {
    banlistDetails = <Banlist />
  } else {
    banlistDetails = null;
  }

  const [showCardpool, setShowCardpool] = useState<boolean>(false);
  let cardpoolDetails = null;
  if (showCardpool === true) {
    cardpoolDetails = <Cardpool />
  } else {
    cardpoolDetails = null;
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
          <a href="#" onClick={(e) => setShowBanlist(!showBanlist)}>Banlist</a>
        </li>
        <div>{banlistDetails}</div>

        <li>
          <a href="#" onClick={(e) => setShowCardpool(!showCardpool)}>Cardpool</a>
        </li>
        <div>{cardpoolDetails}</div>

        <li>
          <a href="#" onClick={(e) => setShowLegalSets(!showLegalSets)}>Legal Sets</a>
        </li>
        <div>{legalSetDetails}</div>

        <li>
          <a href="#">Rulebook</a>
        </li>

        <li>
          <a href="#" onClick={(e) => setShowRuleDiffs(!showRuleDiffs)}>Rule Differences between Oldskool and Modern</a>
        </li>
        <div>{ruleDiffDetails}</div>

      </ul>
    </div>
  )
}
export default Rules;