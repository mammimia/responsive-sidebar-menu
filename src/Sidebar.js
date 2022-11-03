import Logo from "./assets/logo.png";
import "./Sidebar.css";
import "boxicons";

const Sidebar = () => {
  return (
    <nav>
      <div className="sidebar-top">
        <span className="shrink-btn">
          <box-icon name="chevron-left"></box-icon>
        </span>

        <img className="logo" src={Logo} alt=""></img>
        <h3>Aqumex</h3>
      </div>
    </nav>
  );
};

export default Sidebar;
