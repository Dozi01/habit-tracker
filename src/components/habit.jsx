import React from "react";

class Habit extends React.Component {
  state = {
    counter: 0,
  };
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Reading</h2>
        <span>{this.state.counter}</span>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        {/* <button onClick={} className={styles.button}>Delete</button> */}
      </div>
    );
  }
}

export default Habit;
