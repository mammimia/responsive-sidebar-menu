import React from "react";

const SidebarTop = ({ isShrinked, setIsShrinked, logo, title }) => {
  return (
    <div className="sidebar-top">
      <span
        className="shrink-btn"
        onClick={() => {
          setIsShrinked(!isShrinked);
        }}
      >
        <i class="bx bx-chevron-left" />
      </span>

      <img className="logo" src={logo} alt=""></img>
      <h3 className="hide-on-shrink">{title}</h3>
    </div>
  );
};

export default SidebarTop;
