import React, { Component } from "react";
import Habit from "../components/habit";
import HabitAddForm from "../components/habitAddFrom";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
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
        <button onClick={this.props.onReset}>Reset</button>
      </>
    );
  }
}

export default Habits;
