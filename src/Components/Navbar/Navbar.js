import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useUserDataContext } from "../../utils/Context/ContextManager";

export default function Navbar() {
  const context = useUserDataContext();

  return (
    <div className="navbar">
      <NavLink exact to="/" activeClassName="selected" className="navbar__item">
        Fetch user
      </NavLink>
      {context.userName && (
        <NavLink
          to="/:userName"
          activeClassName="selected"
          className="navbar__item"
        >
          Repositories
        </NavLink>
      )}
    </div>
  );
}
