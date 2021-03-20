import React from "react";
import placeholderImage from "../images/music_placeholder.png";
import './searchListItem.css'

function SearchListItem({ data }) {
  return (
    <div className="list-item-container">
      <div>
        <img src={placeholderImage} alt="placeholder search" />
      </div>
      <div className="list-item-info">
        <p className="list-item-title">{data.title}</p>
        <em className="list-item-desc">{data.supplement_information[0]}</em>
        <p className="list-item-desc">{data.description[0].replace(/<[^>]+>/g, "")}</p>
        <p className="list-item-vocals">&#9654; Play vocal</p>
        <p className="list-item-lyrics">Lyrics(PDF)</p>
      </div>
    </div>
  );
}

export default SearchListItem;
