import React from "react";
import LinkItem from "./LinkItem";

const Links = ({ menuItems }) => {
  return (
    <div className="sidebar-links">
      <ul>
        {menuItems.map((item) => (
          <LinkItem title={item.title} icon={item.icon} />
        ))}
      </ul>
    </div>
  );
};

export default Links;
