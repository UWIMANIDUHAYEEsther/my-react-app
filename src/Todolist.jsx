 

 import React, {useState} from 'react'

 function Todolist(){
    const [tasks,settasks]=useState(['Eat Breakfast','Take a shower','walk a dog'])
    const [newTask,setnewTask]=useState('')

    function handleInputChange(event){
    setnewTask(event.target.value)

    }
    function addTask(){
      if(newTask.trim()!==''){
         settasks(t=>[...t,newTask])
       setnewTask("")
      }
    }
    function deleteTask(index){
        const updatedTask=tasks.filter((_,i)=>i!==index)
        settasks(updatedTask)

    }
function moveTaskUp(index){
    if(index > 0){
        const updatedTask = [...tasks];

        const temp = updatedTask[index];

        updatedTask[index] = updatedTask[index - 1];

        updatedTask[index - 1] = temp;

        settasks(updatedTask);
    }
}
function moveTaskdown(index){
    if(index < tasks.length - 1){
        const updatedTask = [...tasks];

        const temp = updatedTask[index];

        updatedTask[index] = updatedTask[index + 1];

        updatedTask[index + 1] = temp;

        settasks(updatedTask);
    }
}
 return(
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input type='text' placeholder='Enter a task ...' value={newTask} onChange={handleInputChange}/>
             <button className='add-button' onClick={addTask}>Add</button>
             <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' 
                    onClick={()=>deleteTask(index)}>Delete</button>
                      <button className='up-button' 
                    onClick={()=>moveTaskUp(index)}>👆</button>
                      <button className='down-button' 
                    onClick={()=>moveTaskdown(index)}>👇</button>

                </li>)}
             </ol>

        </div>

    </div>
 )

 }
 export default Todolist