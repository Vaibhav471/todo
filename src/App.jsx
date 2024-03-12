import React, { useState } from 'react'
import InputTask from './InputTask'
import List from './List';

function App() {

  var [list,addTask]= useState([]);
  var [inpTask, alterInpTask]= useState('');

  var forInpTask=(inpVar)=>{
    alterInpTask(inpVar);
    console.log(inpVar,"hiii");
  }


  var addTodo = (newTask)=>{
    addTask([...list,newTask])
  }
  console.log(list)

  var deleteTask=(dtask)=>{
    //addTask(list.splice(i,1))
    var newList=[...list]
    newList.splice(dtask,1)
    addTask([...newList])
  }

  return (
    <div className='bg-zinc-900 h-screen w-full text-white pt-6'>
    <h1 className='ml-24 font-black text-4xl'>TODO LIST</h1>
    <InputTask addTodo={addTodo} inpTask={inpTask}/>

    
{
  list.map((Litem,i)=>{
    return(
      <List key={i} index={i} item={Litem} deleteTask={deleteTask} forInpTask={forInpTask}/>
    )
  })
}
    </div>

    )
}

export default App