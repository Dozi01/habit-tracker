import React from "react";
import styles from "./navbar.module.css";

class NavBar extends React.Component {
  render() {
    // const totalCounts = this.props;
    return (
      <div>
        <h1>Habit Tracker</h1>
        <span className={styles.totalcounts}></span>
      </div>
    );
  }
}

export default NavBar;
