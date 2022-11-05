import { useState } from "react";
import "./Sidebar.css";
import SidebarTop from "./SidebarTop";
import Search from "./Search";
import Links from "./Links";

const Sidebar = ({ logo, title, menuItems }) => {
  const [isShrinked, setIsShrinked] = useState(false);

  const commonProps = { isShrinked: isShrinked, setIsShrinked: setIsShrinked };

  return (
    <nav className={isShrinked ? "shrinked" : ""}>
      <SidebarTop logo={logo} title={title} {...commonProps} />
      <Search {...commonProps} />
      <Links menuItems={menuItems} />
    </nav>
  );
};

export default Sidebar;
