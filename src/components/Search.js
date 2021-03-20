import React from "react";
import "./search.css";

function Search({ search, onSearchChange, onSearchSubmit }) {
  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchSubmit();
    }
  };

  return (
    <div className="search-container">
      <label className="search-label" htmlFor="search">
        Search
        <input
          value={search}
          onChange={onSearchChange}
          onKeyDown={onSearchKeyDown}
          placeholder="Search box"
          className="search-input"
          type="text"
          id="search"
          name="search"
        />
      </label>
      <button onClick={onSearchSubmit} className="search-button">
        Search
      </button>
    </div>
  );
}

export default Search;
