import React, { useState } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import "./header.css";

function Header({ apiData = [], setApiData }) {
  const [dropdownValues, setDropdownValue] = useState({
    all: false,
    title: false,
    description: false,
    keywords: false,
  });
  const [search, setSearchValue] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearchSubmit = () => {
    if (search === "") {
      setApiData(apiData);
      return;
    }
    const trueOptions = Object.entries(dropdownValues).reduce((acc, item) => {
      if (item[1] && item[0] !== "all") {
        return [...acc, item[0]];
      }
      return acc;
    }, []);
    const filteredData = apiData.filter((item) => {
      let itemToString = trueOptions.reduce((acc, field) => {
        if (typeof item[field] === "string") {
          return acc.concat(" " + item[field]);
        } else if (Array.isArray(item[field])) {
          return acc.concat(" " + item[field].join(" "));
        }
        return acc;
      }, "");
      return search.split(" ").some((word) => {
        if (word === "") {
          return false;
        }
        return itemToString
          .replace(/<[^>]+>/g, "")
          .toLowerCase()
          .includes(word.toLowerCase());
      });
    });
    setApiData(filteredData);
  };

  return (
    <div className="header-container">
      <Dropdown
        dropdownValues={dropdownValues}
        setDropdownValue={setDropdownValue}
      ></Dropdown>
      <Search
        search={search}
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
      ></Search>
    </div>
  );
}

export default Header;
