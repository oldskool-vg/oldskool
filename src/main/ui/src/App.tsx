import React, { useState } from 'react';
import HomePage from './components/Home';
import About from './components/About';
import CardDatabase from './components/CardDatabase';
import Rules from './components/Rules';

interface AppState {
  state: string;
}

const App: React.FC = () => {
  const [siteState, setSiteState] = useState<AppState>({
    state: 'HomePage',
  });

  const updateState = (newState: string) => {
    setSiteState({state: newState});
  }

  let componentToRender = null;
  if (siteState.state === 'HomePage') {
    componentToRender = <HomePage />;
  } else if (siteState.state === 'About') {
    componentToRender = <About />;
  } else if (siteState.state === 'CardDatabase') {
    componentToRender = <CardDatabase />;
  } else if (siteState.state === 'Rules') {
    componentToRender = <Rules updateState={updateState} />;
  } else {
    componentToRender = <div className="Oopsie">Oops! Something went wrong.</div>
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Oldskool Vanguard</h1>

        <div className="Navigation">
          <button className="NavButton" onClick={(e) => {updateState('HomePage')}} >Home</button>
          <button className="NavButton" onClick={(e) => {updateState('About')}}>About</button>
          <button className="NavButton" onClick={(e) => {updateState('CardDatabase')}}>Card Database</button>
          <button className="NavButton" onClick={(e) => {updateState('Rules')}}>Rules</button>
        </div>
      </header>

      <div className="RenderMeBro">
        {componentToRender}
      </div>
    </div>
  );
}

export default App;
