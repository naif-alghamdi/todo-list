import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState([])
  const getInput = useRef()

  const handelTaskInput = () => {
    const newTask = getInput.current.value
    const addNewTask = {complated: false, task: newTask}
    setTask([...task, addNewTask])
  }

  const handelItemClick = (index) => {
    const updateTask = [...task]
    updateTask[index].complated = !updateTask[index].complated
    setTask(updateTask)
  }

  return (
    <div className="App">
      <h1>To Do list</h1>
      <div className='todo-contaner'>
        <ul>
          {task.map(({task, complated}, index) => {return <li className={complated ? "done" : "" } onClick={() => handelItemClick(index)} key={index}>{task}</li>})}
        </ul>
        <input ref={getInput}></input>
        <button onClick={handelTaskInput}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
