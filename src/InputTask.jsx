import React, { useEffect, useState } from 'react'

function InputTask({addTodo, inpTask}) {
  var [task,setTask]= useState('');
  
   useEffect(()=>{
    setTask(inpTask);
   },[inpTask]);


  const fun = () =>{
    addTodo(task)
    setTask("");
    
    
  }
  return (  
    <div>
<input type="text"  className='h-12 w-80 mt-10 ml-60 rounded-sm text-black font-black' 
onChange={(e)=>{

  setTask(e.target.value);

}} value={task}/>
<button onClick={fun} className='bg-blue-600 w-24 text-white rounded-sm font-black h-12'>Add Task</button>
<h1>{inpTask}</h1>
</div>
      )
}

export default InputTask