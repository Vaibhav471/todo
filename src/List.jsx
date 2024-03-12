import React from 'react'

function List(props) {
  return (
    
            <div className=' flex'>
               <li className=' list-none ml-60 mt-4 p-4 bg-zinc-600 w-80' 
               onDoubleClick={()=>{
                props.deleteTask(props.index)
               }}
               onClick={()=>props.forInpTask(props.item)
              }
               > {props.item} 
               <span>               <button className='ml-32 p-2 rounded-md bg-red-600 '
               onClick={props.deleteTask.bind(props.index)}
               >X</button></span>  

               </li>
               </div>
            
       
  )
}

export default List