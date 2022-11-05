import { useState } from "react";
import "./Sidebar.css";
import SidebarTop from "./SidebarTop";
import Search from "./SidebarSearch";
import Links from "./Links";
import SidebarFooter from "./SidebarFooter";
import ReactTooltip from "react-tooltip";

const Sidebar = ({ logo, title, menuItems, shortcutItems, loggedInUser }) => {
  const [isShrinked, setIsShrinked] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  const commonProps = { isShrinked: isShrinked, setIsShrinked: setIsShrinked };
  const commonLinkProps = { ...commonProps, activeItem: activeItem, setActiveItem: setActiveItem };

  return (
    <nav className={`sidebar${isShrinked ? " shrinked" : ""}`}>
      <SidebarTop logo={logo} title={title} {...commonProps} />
      <Search {...commonProps} />
      <Links menuItems={menuItems} {...commonLinkProps} />
      <h4 className="hide-on-shrink">Shortcuts</h4>
      <Links menuItems={shortcutItems} {...commonLinkProps} />
      <SidebarFooter loggedInUser={loggedInUser} />
      {isShrinked && <ReactTooltip className="sidebar-link-tooltip" effect="solid" place="right" />}
    </nav>
  );
};

export default Sidebar;
