import "./Form.css";
import React, { useState } from "react";

function Form({ todoList, setTodoList }) {
  const [todoItem, setTodoItem] = useState("");

  function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  function todoItemHandler(event) {
    setTodoItem(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setTodoList([
      { id: generateId(), text: todoItem, completed: false },
      ...todoList,
    ]);
    setTodoItem("");
  }

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <input
        id="item"
        className="form-input"
        type="text"
        onChange={todoItemHandler}
        value={todoItem}
        maxLength="40"
        required
      />
      <input className="btn" type="submit" value="+" />
    </form>
  );
}

export default Form;
