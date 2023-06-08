import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {

  return (
    <>
      <Header/>
      <TaskList/>
      <div>
        <p>Tienes 2 tareas pendientes</p>
        <button>Limpiar todo</button>
      </div>
    </>
  )
}

export default App
