import "./TodoItem.css";
import React from "react";

function TodoItem({ todoItem, todoList, setTodoList }) {
  function checkhandler() {
    console.log("click");

    setTodoList(
      todoList.map((item) => {
        if (item.id === todoItem.id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      })
    );
  }

  return (
    <div
      className={`todo-container ${todoItem.completed ? "completed" : ""}`}
      onClick={checkhandler}
    >
      <input
        type="checkbox"
        checked={todoItem.completed}
        onChange={checkhandler}
      />
      <span style={{ marginLeft: "10px" }}>{todoItem.text}</span>
    </div>
  );
}

export default TodoItem;
