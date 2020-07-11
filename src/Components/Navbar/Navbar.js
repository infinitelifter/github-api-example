import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useUserDataContext } from "../../utils/Context/ContextManager";

export default function Navbar() {
  const context = useUserDataContext();

  return (
    <div className="navbar">
      {context.userName && (
        <React.Fragment>
          <NavLink
            exact
            to="/"
            activeClassName="selected"
            className="navbar__item"
          >
            Fetch user
          </NavLink>

          <NavLink
            to={`/${context.userName}`}
            activeClassName="selected"
            className="navbar__item"
          >
            Repositories
          </NavLink>
        </React.Fragment>
      )}
    </div>
  );
}
