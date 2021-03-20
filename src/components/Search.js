import React from "react";
import './search.css'

function Search() {
  return (
    <div className="search-container">
      <label className="search-label" htmlFor="search">
        Search
        <input placeholder="Search box" className="search-input" type="text" id="search" name="search" />
      </label>
      <button className="search-button">Search</button>
    </div>
  );
}

export default Search;
