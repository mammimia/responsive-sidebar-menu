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
      <i class="bx bx-search" />
      <input className="hide-on-shrink" type="text" placeholder="Quick Search..." />
    </div>
  );
};

export default Search;
