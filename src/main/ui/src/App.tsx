import React, { useState } from 'react';
import HomePage from './components/Home';
import About from './components/About';
import CardDatabase from './components/CardDatabase';
import Rules from './components/Rules';

function App() {
  // const [search, setSearch] = useState<string>('')
  const [siteState, setSiteState] = useState<string>('Home');

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header-title'>Oldskool Vanguard</h1>
      </header>

      {/* <>
        <HomePage />
      </> */}

    </div>
  );
}

export default App;
