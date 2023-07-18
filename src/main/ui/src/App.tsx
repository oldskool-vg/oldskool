import React, { useState } from 'react';
import HomePage from './components/Home';
import About from './components/About';
import CardDatabase from './components/CardDatabase';
import Rules from './components/Rules';

function App() {
  const [siteState, setSiteState] = useState<string>('HomePage');

  let componentToRender = null;
  if (siteState === 'HomePage') {
    componentToRender = <HomePage />;
  } else if (siteState === 'About') {
    componentToRender = <About />;
  } else if (siteState === 'CardDatabase') {
    componentToRender = <CardDatabase />;
  } else if (siteState === 'Rules') {
    componentToRender = <Rules />;
  } else {
    componentToRender = <div className="Oopsie">Oops! Something wrong happened.</div>
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Oldskool Vanguard</h1>

        <div className="Navigation">
          <button className="NavButton" onClick={(e) => {setSiteState('HomePage')}} >Home</button>
          <button className="NavButton" onClick={(e) => {setSiteState('About')}}>About</button>
          <button className="NavButton" onClick={(e) => {setSiteState('CardDatabase')}}>Card Database</button>
          <button className="NavButton" onClick={(e) => {setSiteState('Rules')}}>Rules</button>
        </div>
      </header>

      <div className="RenderMeBro">
        {componentToRender}
      </div>
    </div>
  );
}

export default App;
