/*import {tasks} from './tasks'
import {useState} from 'react'
console.log(tasks)
function TaskList() {
  const [tasks, settasks] = useState([])
  return (
    <div>TaskList</div>
  )
}

export default TaskList */


/* import {tasks} from './tasks';
import {useState} from "react";
console.log(tasks);
function TaskList() {
  const [tasks, setTasks] = useState([])
  if (tasks.length === 0) {return <h1>No hay tareas aun</h1>}
  return (
    <div>{tasks.map((task)=> (<div> Tarea</div>
  ))}
</div>);}

export default TaskList */


import {tasks as data} from './tasks';
import {useState, useEffect} from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data)},[])
  if (tasks.length === 0) {return <h1>No hay tareas aun</h1>}
  return (
    <div>{tasks.map((task)=> (<div key={task.id}> <h1>{task.title}</h1>
    <p>{task.description}</p></div>
  ))}
</div>);}

export default TaskList