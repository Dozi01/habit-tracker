import React, { Component } from "react";

class Habit extends Component {
  state = {
    counter: 0,
  };

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrease = () => {
    if (this.state.counter === 0) return;
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    const { habit } = this.props;

    return (
      <li className="habit">
        <span className="habit-name">{habit}</span>
        <span className="habit-count">{this.state.counter}</span>
        <button
          onClick={this.handleIncrease}
          className="habit-button habbit-increase"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          onClick={this.handleDecrease}
          className="habit-button habbit-decrease"
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habbit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
