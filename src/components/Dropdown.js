import React, { useCallback, useEffect, useState } from "react";
import "./dropdown.css";

function Dropdown({ dropdownValues, setDropdownValue }) {
  const [dropdownState, toggleDropdown] = useState(false);
  const checkAllDropdownValues = useCallback(() => {
    return Object.entries(dropdownValues)
      .filter((value) => value[0] !== "all")
      .every((value) => value[1] === true);
  }, [dropdownValues]);

  useEffect(() => {
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
  }, [dropdownValues, setDropdownValue, checkAllDropdownValues]);

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

  const selectedLabel = () => {
    if (checkAllDropdownValues()) {
      return "All selected";
    }
    const count = Object.values(dropdownValues).reduce(
      (acc, value) => acc + value,
      0
    );
    if (count > 0) {
      return `${count} selected`;
    }
    return `Search options`;
  };

  return (
    <div className={`dropdown ${dropdownState ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => toggleDropdown(!dropdownState)}
        className="dropdown-toggle-button"
      >
        {selectedLabel()}
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
            <label className="list-item-label" htmlFor="keywords">
              KEYWORDS
              <input
                className="list-item-input"
                type="checkbox"
                id="keywords"
                name="keywords"
                checked={dropdownValues.keywords}
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
