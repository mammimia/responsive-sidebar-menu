import React from "react";

const SidebarFooter = ({ loggedInUser }) => {
  const { image, name, role } = loggedInUser;
  return (
    <div className="sidebar-footer">
      <a href="#" className="account">
        <i className="bx bx-user" />
      </a>
      <div className="user">
        <div className="user-profile hide-on-shrink">
          <img src={image} alt="" />
          <div className="user-info">
            <h3>{name}</h3>
            <h5>{role}</h5>
          </div>
        </div>
        <a href="#" className="logout">
          <i className="bx bx-log-out" />
        </a>
      </div>
    </div>
  );
};

export default SidebarFooter;
