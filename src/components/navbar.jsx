import React from "react";
import styles from "./navbar.module.css";

class NavBar extends React.Component {
  render() {
    const habitsNum = this.props.habits.length;

    return (
      <div>
        <h1>Habit Tracker</h1>
        <span>total : {habitsNum}</span>
      </div>
    );
  }
}

export default NavBar;
