import React, { useState } from 'react';
import Cards from './components/Cards';

function App() {
  const [search, setSearch] = useState<string>('')

  return (
    <div className="App">
      <header className='header'>
        <h1 className='header-title'>Oldskool Vanguard</h1>
      </header>
      <input className='search-bar' placeholder='Search!' onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
      <div className='parent-cards'>
        <Cards search={search}/>
      </div>
    </div>
  );
}

export default App;
