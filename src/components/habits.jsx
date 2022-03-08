import React, { Component } from "react";
import Habit from "../components/habit";

class Habits extends Component {
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncrease={this.props.handleIncrease}
            handleDecrease={this.props.handleDecrease}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
