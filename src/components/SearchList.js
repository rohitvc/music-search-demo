import React from "react";
import SearchListItem from "./SearchListItem";
import './searchList.css'

function SearchList({ apiData = [] }) {
  return (
    <div className="search-list-container">
      {apiData.map((listItem, index) => (
        <SearchListItem key={index} data={listItem}></SearchListItem>
      ))}
    </div>
  );
}

export default SearchList;
