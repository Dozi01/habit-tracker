import React, { Component } from "react";

class Habit extends Component {
  handleIncrease = () => {
    this.props.handleIncrease(this.props.habit);
  };
  handleDecrease = () => {
    this.props.handleDecrease(this.props.habit);
  };
  onDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habbit-increase"
          onClick={this.handleIncrease}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habbit-decrease"
          onClick={this.handleDecrease}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habbit-delete" onClick={this.onDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
