import React, { PureComponent } from "react";
import styles from "./navbar.module.css";

class NavBar extends PureComponent {
  render() {
    return (
      <header>
        <h1 className="navbar-title">Habit Tracker</h1>
        <span className="navbar-totalcount">{this.props.habitNum}</span>
      </header>
    );
  }
}

export default NavBar;
