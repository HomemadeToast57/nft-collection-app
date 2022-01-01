import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="Crypto Punk Logo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchIcon" alt="" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, Item, or User..."
        />
      </div>

      <div className="headerItems">
        <a href=".">
          <p>Drops</p>
        </a>
        <a href=".">
          <p>Marketplace</p>
        </a>
        <a href=".">
          <p>Create</p>
        </a>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="Switch Theme" />
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
