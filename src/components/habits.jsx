import React from "react";
import Habit from "../components/habit";
import HabitAddForm from "../components/habitAddFrom";

function Habits(props) {
  return (
    <div>
      <HabitAddForm onAdd={props.onAdd} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncrease={props.handleIncrease}
            handleDecrease={props.handleDecrease}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
      <button onClick={props.onReset}>Reset</button>
    </div>
  );
}

export default Habits;
