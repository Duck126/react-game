import React from "react";
import "../styles/Header.css";

const Header = () => (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Memory Click with React</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
);

export default Header;