import React  from "react";
import logo from "../../assets/image/logo.svg";
import "./Navbar.scss";
import Navlist from "./Navlist";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__nav  container">
        <nav>
          <img src={logo} alt="logo" />
          <ul className="nav_list">
            <Navlist />
          </ul>
        </nav>
        <div className="nav_languages">
          <button className="ru">RU</button>
          <button className="en">EN</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
