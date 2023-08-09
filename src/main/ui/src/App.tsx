import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">Oldskool Vanguard</h1>

          <div className="Navigation">
            <a href={'/'} className="yellow-button">Home</a>
            <a href={'/about'} className="yellow-button">About</a>
            <a href={'/cards'} className="red-button">Card Database</a>
            <a href={'/rules'} className="yellow-button">Rules</a>
          </div>
        </div>
      </header>

      <div className="RenderMeBro">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
