import React from "react";
import "../style/header.css";
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <a className="nav-a" href="#projects">
          Projects
        </a>

        <h1 className="title" href="index.html">
          Carl Leandersson
          <br />
          Projects
        </h1>
      </nav>
    );
  }
}

export default Header;
