import { useState } from "react";
import "./Sidebar.css";
import "boxicons";
import SidebarTop from "./SidebarTop";
import Search from "./Search";

const Sidebar = ({ logo, title }) => {
  const [isShrinked, setIsShrinked] = useState(false);

  return (
    <nav className={isShrinked ? "shrinked" : ""}>
      <SidebarTop isShrinked={isShrinked} setIsShrinked={setIsShrinked} logo={logo} title={title} />
      <Search />
    </nav>
  );
};

export default Sidebar;
