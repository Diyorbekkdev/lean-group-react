import React  from "react";
import logo from "../../assets/image/logo.svg";
import "./Navbar.scss";
import Navlist from "./Navlist";

const Navbar = () => {
  const openBar = ()=>{
    document.body.classList.toggle("open-bar")
  }
  return (
    <header className="header">
      <div className="header__nav  container">
        <nav>
          <img src={logo} alt="logo" />
          <ul className="nav_list">
            <Navlist />
            <label className="close" onClick={openBar}>
            <i class="fa-solid fa-x"></i>
            </label>
          </ul>
        </nav>
        <div className="nav_languages">
          <button className="ru">RU</button>
          <button className="en">EN</button>
          <label className="open" onClick={openBar}>
          <i class="fa-solid fa-bars"></i>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
