import React, { useState } from 'react';
import Cards from './Cards';

function CardSearch() {
  const [search, setSearch] = useState('');

  return (
    <>
      <input className='search-bar' placeholder='Search!' onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
      <div className='parent-cards'>
        <Cards search={search}/>
      </div>
    </>
  )
}
export default CardSearch;