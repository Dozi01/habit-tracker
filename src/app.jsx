import React, { useState } from "react";
import "./app.css";
import NavBar from "./components/navbar";
import Habits from "./components/habits";
import Habit from "./components/habit";

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "reading", count: 0 },
    { id: 2, name: "running", count: 0 },
    { id: 3, name: "movie", count: 0 },
  ]);

  const handleIncrease = (habit) => {
    const newHabits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(newHabits);
    // key 와 value 가 같을 때 생략 가능.
  };

  const handleDecrease = (habit) => {
    const newHabits = habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : habit.count - 1 };
      }
      return item;
    });
    setHabits(newHabits);
  };

  const onDelete = (habit) => {
    const newHabits = habits.filter((item) => item.id !== habit.id);
    setHabits(newHabits);
  };

  const onAdd = (name) => {
    const newHabits = [...habits, { id: Date.now(), name, count: 0 }];
    setHabits(newHabits);
  };

  const onReset = () => {
    const newHabits = habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      } else {
        return habit;
      }
    });
    setHabits(newHabits);
  };
  console.log(habits);
  return (
    <div>
      <NavBar habitNum={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    </div>
  );
};

export default App;
