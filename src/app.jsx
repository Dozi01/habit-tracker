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
    text: "",
  };
  handleIncrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
    // key 와 value 가 같다.
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

  onReset = () => {
    const habits = [...this.state.habits];
    habits.map((habit) => (habit.count = 0));
    this.setState(habits);
  };

  handleChange = (e) => {
    console.log(e);
    this.setState({
      text: e.target.value,
    });
  };

  onAdd = () => {
    const habits = [...this.state.habits];
    const habit = [{ id: 4, name: `${this.state.text}`, count: 0 }];
    this.setState({ habits: habits.concat(habit) });
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <NavBar habits={this.state.habits} />
        <input onChange={this.handleChange} type="text" id="name" name="name" />
        <span>{this.state.text}</span>
        <button onClick={this.onAdd}>Add</button>
        <Habits
          habits={this.state.habits}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          onDelete={this.onDelete}
        />
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default App;
