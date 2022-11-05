import React from "react";

const LinkItem = ({ icon, title, solidIcon, isActive, setActive }) => {
  return (
    <li>
      <div className={isActive ? "active-tab" : ""}>
        <a href="#" className={isActive ? "active" : ""} onClick={setActive} data-tip={title}>
          <div className="sidebar-link-icon">
            {icon}
            {solidIcon}
          </div>
          <span className="sidebar-link-text hide-on-shrink">{title}</span>
        </a>
      </div>
    </li>
  );
};

export default LinkItem;
