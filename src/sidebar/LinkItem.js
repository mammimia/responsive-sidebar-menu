import React from "react";

const LinkItem = ({ icon, title }) => {
  return (
    <li>
      <a href="/">
        <div className="sidebar-link-icon">{icon}</div>
        <span className="sidebar-link-text">{title}</span>
      </a>
    </li>
  );
};

export default LinkItem;
