import { useState } from "react";
import Logo from "./assets/logo.png";
import "./Sidebar.css";
import "boxicons";

const Sidebar = () => {
  const [isShrinked, setIsShrinked] = useState(false);

  return (
    <nav className={isShrinked ? "shrinked" : ""}>
      <div className="sidebar-top">
        <span
          className="shrink-btn"
          onClick={() => {
            setIsShrinked(!isShrinked);
          }}
        >
          <box-icon name="chevron-left"></box-icon>
        </span>

        <img className="logo" src={Logo} alt=""></img>
        <h3 className="title">Aqumex</h3>
      </div>
    </nav>
  );
};

export default Sidebar;
