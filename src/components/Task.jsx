import React from 'react'
import './task.css'

function Task({ name, status }) {

  return (
    <div className='container'>
      <p className={`tareas ${status ? 'tareas-con-linea' : 'tareas-sin-linea'}`}>{name} </p>     
    </div>
  )
}

export default Task