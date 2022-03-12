import React from "react";
import styles from "./navbar.module.css";

function NavBar(props) {
  return (
    <header>
      <h1 className="navbar-title">Habit Tracker</h1>
      <span className="navbar-totalcount">{props.habitNum}</span>
    </header>
  );
}

export default NavBar;
