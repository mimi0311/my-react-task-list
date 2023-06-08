import React from 'react';
import Task from './Task';
import { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([
    {name: "Tarea 1", status: true},
    {name: "Tarea 2", status: false},
  ]);

  return (
    <>
      <div>
        <input type="text" placeholder='Agregar nueva Tarea'/>
        <button>+</button>
      </div>
      <ul>
      {tasks.map((task) => (
        <li><Task name={task.name} status={task.status}/></li>
      ))}
      </ul>
    </>
  )
}

export default TaskList