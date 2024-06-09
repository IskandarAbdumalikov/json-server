import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="header__nav container">
          <div className="header__nav__logo">
            <h1>LOGO</h1>
          </div>
          <ul className="header__nav__list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
          <div className="header__nav__btns">
            <button>Admin</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
