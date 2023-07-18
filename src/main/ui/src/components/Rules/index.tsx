import React, { useState } from 'react';
import { BooleanLiteral } from 'typescript';

function Rules() {
  const [showBanlist, setShowBanlist] = useState<boolean>(false);
  const [showCardpool, setShowCardpool] = useState<boolean>(false);
  const [showLegalSets, setShowLegalSets] = useState<boolean>(false);
  const [showRulebook, setShowRulebook] = useState<boolean>(false);
  const [showRuleDiffs, setShowRuleDiffs] = useState<boolean>(false);
  // some rule differences include: differences in mulligan, and no clan restriction in deckbuilding


  return (
    <div className="Rules">
      <div>
        <h2>Format Rules</h2>
      </div>

      <ul>
        <li>Banlist</li>
        <li>Cardpool</li>
        <li>Legal Sets</li>
        <li>Rulebook</li>
        <li>Rule Differences between Oldskool and Modern</li>
      </ul>

    </div>
  )
}
export default Rules;