import React, { useEffect, useState } from "react";
import "./dropdown.css";

function Dropdown() {
  const [dropdownState, toggleDropdown] = useState(false);
  const [dropdownValues, setDropdownValue] = useState({
    all: false,
    title: false,
    description: false,
    keyword: false,
  });

  useEffect(() => {
    const checkAllDropdownValues = () => {
      return Object.entries(dropdownValues)
        .filter((value) => value[0] !== "all")
        .every((value) => value[1] === true);
    };
    window.onclick = function () {
      toggleDropdown(false);
    };

    if (checkAllDropdownValues()) {
      if (!dropdownValues.all) {
        setDropdownValue({
          ...dropdownValues,
          all: true,
        });
      }
    } else {
      if (dropdownValues.all) {
        setDropdownValue({
          ...dropdownValues,
          all: false,
        });
      }
    }
  }, [dropdownValues]);

  const handleDropdownChange = ({ target }) => {
    if (target.name === "all") {
      setDropdownValue({
        ...Object.entries(dropdownValues).reduce((acc, entry) => {
          return { ...acc, [entry[0]]: target.checked ? true : false };
        }, {}),
      });
      return;
    }

    setDropdownValue({
      ...dropdownValues,
      [target.name]: target.checked,
    });
  };

  const selectedLabel = () => {}

  return (
    <div className="dropdown" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => toggleDropdown(!dropdownState)}
        className="dropdown-toggle-button"
      >
        Search locations
      </button>
      {dropdownState && (
        <ul className="dropdown-list">
          <li className="list-item">
            <label className="list-item-label" htmlFor="all">
              ALL
              <input
                className="list-item-input"
                type="checkbox"
                id="all"
                name="all"
                checked={dropdownValues.all}
                onChange={handleDropdownChange}
              />
              <span className="checkbox"></span>
            </label>
          </li>
          <li className="list-item">
            <label className="list-item-label" htmlFor="title">
              TITLE
              <input
                className="list-item-input"
                type="checkbox"
                id="title"
                name="title"
                checked={dropdownValues.title}
                onChange={handleDropdownChange}
              />
              <span className="checkbox"></span>
            </label>
          </li>
          <li className="list-item">
            <label className="list-item-label" htmlFor="description">
              DESCRIPTION
              <input
                className="list-item-input"
                type="checkbox"
                id="description"
                name="description"
                checked={dropdownValues.description}
                onChange={handleDropdownChange}
              />
              <span className="checkbox"></span>
            </label>
          </li>
          <li className="list-item">
            <label className="list-item-label" htmlFor="keyword">
              KEYWORD
              <input
                className="list-item-input"
                type="checkbox"
                id="keyword"
                name="keyword"
                checked={dropdownValues.keyword}
                onChange={handleDropdownChange}
              />
              <span className="checkbox"></span>
            </label>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
