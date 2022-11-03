import React from "react";

const Search = ({ isShrinked, setIsShrinked }) => {
  return (
    <div
      className="search"
      onClick={() => {
        if (isShrinked) {
          setIsShrinked(false);
        }
      }}
    >
      <box-icon name="search"></box-icon>
      <input className="hide-on-shrink" type="text" placeholder="Quick Search..." />
    </div>
  );
};

export default Search;
