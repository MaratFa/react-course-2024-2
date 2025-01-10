import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {

    if(newTask.trim() !== ''){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  function moveTaskUp(index) {

    if(index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]]
    }
  }

  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
              <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
          </li> 
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
