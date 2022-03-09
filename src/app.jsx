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
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits: habits });
    // key 와 value 가 같을 때 생략 가능.
  };

  handleDecrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : habit.count - 1 };
      }
      return item;
    });
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
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      } else {
        return habit;
      }
    });
    this.setState({ habits });
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
