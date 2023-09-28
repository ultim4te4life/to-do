import React, { useState } from "react";
import "./App.css"; // Import your CSS file

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const addTask = () => {
    if (inputTask.trim() !== "") {
      setTasks([...tasks, { text: inputTask, status: "todo" }]);
      setInputTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const todoTasks = tasks.filter((task) => task.status === "todo");

  const updateStatus = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list">
        <div className="task-column">
          <h2>To Do</h2>
          <ul>
            {todoTasks.length}
            {tasks.map((task, index) => {
              if (task.status === "todo") {
                return (
                  <li key={index}>
                    {task.text}
                    <div>
                      <button onClick={() => updateStatus(index, "inprogress")}>
                        Start
                      </button>
                      <button onClick={() => removeTask(index)}>Delete</button>
                    </div>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div className="task-column">
          <h2>In Progress</h2>
          <ul>
            {tasks.map((task, index) => {
              if (task.status === "inprogress") {
                return (
                  <li key={index}>
                    {task.text}
                    <div>
                      <button onClick={() => updateStatus(index, "done")}>
                        Complete
                      </button>
                    </div>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div className="task-column">
          <h2>Done</h2>
          <ul>
            {tasks.map((task, index) => {
              if (task.status === "done") {
                return (
                  <li key={index}>
                    {task.text}
                    <div>
                      <button onClick={() => removeTask(index)}>Delete</button>
                    </div>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
