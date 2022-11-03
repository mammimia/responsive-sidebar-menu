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
        <box-icon name="chevron-left"></box-icon>
      </span>

      <img className="logo" src={logo} alt=""></img>
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default SidebarTop;
