import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="nav">
      {" "}
      <p align="center">
        <img src={Logo} alt="Gif" />
        Henry - Weather app
      </p>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
