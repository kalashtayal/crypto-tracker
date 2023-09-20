import React from 'react';
import "./style.css";
import SearchIcon from '@mui/icons-material/Search';

function Search( {search , onSearchChange}) {
  return (
    <div className='search-flex'>
     <SearchIcon/>
        <input placeholder='Search' type='text'
           className='search-input'
           value={search}
           onChange={(e)=>onSearchChange(e)}
        />
    </div>
  )
}

export default Search;