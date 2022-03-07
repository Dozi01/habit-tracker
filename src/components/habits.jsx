import React, { Component } from "react";
import Habit from "../components/habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "reading", count: 0 },
      { id: 2, name: "running", count: 0 },
      { id: 3, name: "movie", count: 0 },
    ],
  };
  handleIncrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    if (habits[index].count === 0) {
      return;
    }
    habits[index].count--;
    this.setState({ habits });
  };

  onDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    console.log({ habits });
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncrease={this.handleIncrease}
            handleDecrease={this.handleDecrease}
            onDelete={this.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
