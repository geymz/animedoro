import { useState, useEffect } from "react";

const STORAGE_KEY = 'animedoro-tasks';

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY);
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (e) {
      console.error("Local Storage'dan görev yüklenirken hata oluştu:", e);
      return [];
    }
  });

  const [task, setTask] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error("Local Storage'a görev kaydedilirken hata oluştu:", e);
    }
  }, [tasks]); 

  function addTask() {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  }

  function removeTask(indexToRemove) {
    const newTasks = tasks.filter((_, i) => i !== indexToRemove);
    setTasks(newTasks);
  }

  return (
    <div className="todo-list-card">
      <h3>Tasks 📝</h3>
      <div className="input-group">
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          placeholder="New Task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="tasks-list">
        {tasks.map((t, i) => (
          <li key={i}>
            <span className="task-text">{t}</span> 
            <button className="delete-btn" onClick={() => removeTask(i)}><i className="bi bi-trash"></i></button>
          </li>
        ))}
        {tasks.length === 0 && <li className="empty-message">You don't have any tasks yet!</li>}
      </ul>
    </div>
  );
}

export default TodoList;