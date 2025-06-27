import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>To-Do List</h1>
        <div className="input-group">
          <input
            type="text"
            value={input}
            placeholder="Enter a task..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
