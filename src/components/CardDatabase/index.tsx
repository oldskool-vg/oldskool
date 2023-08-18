import React, { useState } from 'react';
import Cards from './Cards';
import Select from 'react-select';
import filterOptions from './filterData';

function CardSearch() {
  const [search, setSearch] = useState<string>('');
  const [filters, setFilters] = useState<any[]>([]);
  const [filterTypes, setFilterTypes] = useState<string[]>([])

  const filterHandler = (selectedOptions: any) => {
    if (selectedOptions) {
      const selectedValues = selectedOptions.map((option: any) => option.value)
      setFilters(selectedValues)
      const selectedTypes = selectedOptions.map((option: any) => {
        for (const filterOption of filterOptions) {
          for (const filterOptionValue of filterOption.options) {
            if (filterOptionValue.value === option.value) {
              return filterOption.label;
            }
          }
        }
        return '';
      });
      setFilterTypes(selectedTypes);
    }
  }

  return (
    <>
      <div className='search'>
        <input className='search-bar' placeholder='Search!' onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
        <Select className='search-filter' placeholder='Select filters...' options={filterOptions} isMulti closeMenuOnSelect={false} onChange={(e) => filterHandler(e)}/>
      </div>
      <div className='parent-cards'>
        <Cards search={search} filters={filters} filterTypes={filterTypes}/>
      </div>
    </>
  )
}
export default CardSearch;