import React,{useState} from 'react';
import useList from '../hooks/useList';
const   TaskList = () => {
  const task=useList([]);
  const [newTask, setNewTask] = useState('');
   const handleSubmit=(event)=>{
    event.preventDefault();
    task.push(newTask)
    setNewTask('')
   };
   const handleInputChange=(event)=>{
    setNewTask(event.target.value)
   }
   const clearAll=(e)=>{
    e.preventDefault();
    task(null)
   }

  return (
        <div>
            <h1>
                Task List
            </h1>
            <form onSubmit={handleSubmit}>
              <input value={setNewTask}onChange={handleInputChange} placeholder='new task'type='text'/>
               <button type='submit'>Create Task</button>
            </form>
            <button onClick={clearAll}>clear</button>
            {task.isEmpty()?(<p>Task list empty</p>):
            (<ul>
                {task.value.map((task,index)=>(<li key={index}>{<input onClick={()=>task.remove(index)}checked={false} type='checkbox'/>}{task}</li>))}
            </ul>)
            }
        </div>
    );
}

export default TaskList;
