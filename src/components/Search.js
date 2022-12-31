import React from "react";

function Search({searchPokes, setSearchPokes}) {

  const handleChange = (e) => {
    setSearchPokes(e.target.value.toLowerCase());
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          type="text" 
          placeholder="Search"
          value={searchPokes}
          onChange={handleChange}
          className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
