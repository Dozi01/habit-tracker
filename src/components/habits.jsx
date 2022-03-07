import React, { useState } from "react";
import Habit from "../components/habit";

function Habits() {
  const [habit, setHabit] = useState([
    { habit: "reading" },
    { habit: "runnding" },
    { habit: "movie" },
  ]);

  return (
    <div>
      {habit.map((hab) => (
        <Habit key={hab} habit={hab.habit} />
      ))}
    </div>
  );
}

export default Habits;
