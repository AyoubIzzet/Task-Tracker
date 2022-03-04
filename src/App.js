import { useState } from "react"
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

const App = () => {
  const[showAddTask, setShowAddTask] = useState (false)
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: "doctors apointment",
        reminder: true,
        day: "Feb 5th at 2:30", 
    },
    {
        id: 2,
        text: "school meeting",
        reminder: true,
        day: "Feb 11th at 4:30",      
    }]) 


    //Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random()*1000)
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])



    }



   //delet Task
   const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !== id ))
   }

   //Toggle reminder
   const toggleReminder = (id) =>{
     setTasks(tasks.map((task) => task.id == id ?
     {...task, reminder: !task.reminder} : task))

   }


  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask ? <AddTask onAdd ={addTask}/> : ""}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks To Show"}

    </div>
  );
} 

export default App;
