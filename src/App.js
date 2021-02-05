import React, { useState } from "react";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="container">
      <header className="header">
        <div>
          <span className="main-title">Tasks</span> List
        </div>
      </header>
      <div className="content">
        <Form
          style={{ marginBottom: "10px" }}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <div className="todo-list-container">
          {todoList.map((item) => {
            return (
              <TodoItem
                key={item.id}
                todoItem={item}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
        </div>
      </div>
      <div className="footer">
        <svg className="progress-bar-base">
          <rect
            style={{
              width: `${
                todoList.length
                  ? (todoList.filter((item) => item.completed).length /
                      todoList.length) *
                    100
                  : 0
              }%`,
            }}
            className="progress-bar"
            fill="#666afb"
          />
        </svg>
        <span className="counter">
          {todoList.filter((item) => item.completed).length} / {todoList.length}
        </span>
      </div>
    </div>
  );
}

export default App;
