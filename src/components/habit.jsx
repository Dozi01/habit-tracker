import React, { memo } from "react";

const Habit = memo(({ habit, handleIncrease, handleDecrease, onDelete }) => {
  const onIncrease = () => {
    handleIncrease(habit);
  };
  const onDecrease = () => {
    handleDecrease(habit);
  };
  const handleDelete = () => {
    onDelete(habit);
  };
  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button className="habit-button habbit-increase" onClick={onIncrease}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habbit-decrease" onClick={onDecrease}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habbit-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;
