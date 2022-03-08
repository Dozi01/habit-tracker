import React, { Component } from "react";

class HabitAddForm extends Component {
  formRef = React.createRef();

  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //name 값이 있다면 전달.
    this.formRef.current.reset();
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
          id="name"
          name="name"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
