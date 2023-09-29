import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const onDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  const onchange = (task) => {
    setTasks(tasks.map(t => {
      if (t.id == task.id) {
        t.checked = task.checked;
        return t;
      } else {
        return t;
      }
    }))
  }
  return (
    <div className="App">
      <Header />
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} onDelete={onDelete} onChange={onchange} />
    </div>
  );
}

export default App;
