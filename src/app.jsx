import React, { Component } from "react";
import "./app.css";
import NavBar from "./components/navbar";
import Habits from "./components/habits";

class App extends Component {
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
    this.setState({ habits: habits });
    // key 와 value 가 같을 때 생략 가능.
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
    this.setState({ habits });
  };

  onAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  onReset = () => {
    const habits = [...this.state.habits];
    habits.map((habit) => (habit.count = 0));
    this.setState(habits);
  };

  render() {
    return (
      <>
        <NavBar
          habitNum={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          onDelete={this.onDelete}
          onAdd={this.onAdd}
          onReset={this.onReset}
        />
      </>
    );
  }
}

export default App;
