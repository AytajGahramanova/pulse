import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="name">
            <h4>
              Pulse<span>.</span>
            </h4>
          </div>
          <div className="header-links">
            <NavLink
              to=""
              onClick={(goPage) => (goPage.isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={(goPage) => (goPage.isActive ? "active" : "")}
            >
              About us
            </NavLink>
            <NavLink
              to="/restaurant"
              onClick={(goPage) => (goPage.isActive ? "active" : "")}
            >
              Restaurant
            </NavLink>
            <NavLink
              to="/news"
              onClick={(goPage) => (goPage.isActive ? "active" : "")}
            >
              News
            </NavLink>
            <NavLink
              to="/contact"
              onClick={(goPage) => (goPage.isActive ? "active" : "'")}
            >
              Contact
            </NavLink>
          </div>
          <div className="reservation">
            <p>Reservations</p>
            <div className="res-phone">
              <i class="fa-solid fa-phone"></i>
              <span> 652-345 3222 11</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
