import { useState } from "react";
import LinkItem from "./LinkItem";

const Links = ({ menuItems }) => {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <div className="sidebar-links">
      <ul>
        {menuItems.map((item) => (
          <LinkItem
            title={item.title}
            icon={item.icon}
            solidIcon={item.solidIcon}
            isActive={activeItem === item}
            setActive={() => setActiveItem(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Links;
