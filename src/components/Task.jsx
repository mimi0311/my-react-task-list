import {useState} from 'react'
import './task.css'

function Task({ name, status, onStatusChange, onDelete, onUpdate}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(name);

  const handleCheckboxChange = () => onStatusChange();
  
  const handleDelete = () => onDelete();

  const handleEditClick = () => setIsEditing(true);

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedTaskName(name)
  }

  const handleSaveClick = () => {
    if (updatedTaskName.trim() !== ''){
      onUpdate(updatedTaskName);
      setIsEditing(false);
    }
  }

  const handleInputChange = (e) => {
    setUpdatedTaskName(e.currentTarget.value);
  }

  return (
    <div className='container'>
      <input 
          type='checkbox'
          checked={ status }
          onChange={ handleCheckboxChange }
       />
       {isEditing ? (
        <input 
            type='text' 
            value={ updatedTaskName }
            onChange={ handleInputChange }
        />
       ) : (
        <p className={`taks ${status ? 'task-with-line' : ''}`}>{name} </p>     
       )}
       {isEditing ? (
        <>
            <button onClick={ handleSaveClick }> Save </button>
            <button onClick={ handleCancelClick }> Cancel </button>
        </>
       ):(
        <>
            <button onClick={ handleEditClick }> Edit </button>
            <button onClick={ handleDelete }> Delete </button>
        </>
       )}
    </div>
  )
}

export default Task