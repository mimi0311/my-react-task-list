import {useState, useEffect} from 'react';
import useTaskManager from '../hooks/useTaskManager';
import Task from './Task';
import './Task.css'

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask, updateTaskStatus } = useTaskManager();
  const [taskName, setTaskName] = useState('');
  const [pendingTasks, setPendingTasks] = useState(0);
  const [taskDescription, setTaskDescription] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    setPendingTasks(tasks.filter((task) => !task.status).length)}, [tasks])

  const handleTaskStatusChange = (index) => updateTaskStatus(index)

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      if (taskName.trim().length <= 3) {
        setIsFormValid(false);
        return;
      }
      createTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  const handleDeleteTask = (index) => deleteTask(index)

  const handleUpdateTask = (index, updateName) => updateTask(index, {name: updateName})

  const handleInputChange = (e) => setTaskName(e.target.value)

  const handleDescriptionChange = (e) => setTaskDescription(e.target.value)

  const handleClearAll = () =>{
    const completedTaskIndexes = tasks.reduce((indexes, task, index) => {
      if(task.status)
        indexes.push(index)
      return indexes
    }, [])
    completedTaskIndexes.reverse().forEach((index) => {
      deleteTask(index)
    })
  }

  return (
    <>
      <form className="task-form" onSubmit={ addTask }>
        <input 
          type="text" 
          placeholder='Add new task'
          value={ taskName }
          onChange={ handleInputChange }
          />
          {!isFormValid && <span className="error" role="alert">The task must have more than 3 characters</span>}
          <textarea
            placeholder='Description (optional)'
            value={ taskDescription }
            onChange={ handleDescriptionChange }
          />
          <button>Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={ index }>
            <Task 
              name={task.name} 
              description={task.description}
              status={task.status}
              onStatusChange={() => handleTaskStatusChange(index)}
              onDelete={()=> handleDeleteTask(index)}
              onUpdate={(updatedName) => handleUpdateTask(index, updatedName)}
            />
          </li>
        ))}
      </ul>
      <>
          <p className='tasks-pending'> You have { pendingTasks } pending tasks. </p>
      </>
      <div className='clear-container'>
          <button onClick={handleClearAll}> Clean completed tasks </button>
      </div>
    </>
  )
}

export default TaskList