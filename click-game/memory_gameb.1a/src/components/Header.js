import React from "react";

import "../styles/Header.css";

const Header = () => (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Memory Click with React</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li></li>
      </ul>
    </div>
  </nav>
);

export default Header;