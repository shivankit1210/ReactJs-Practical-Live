import React from 'react'

const TodoList = ({allTodos,deleteTodo}) => {
  return (
    <div className='flex  flex-col'>
     <h1 className='text-white font-semibold text-3xl'>To Do list</h1>
     <div className='flex gap-2 mt-2'>
     {
      allTodos.map((element)=>{
        let {id,text}=element;
        return(
          <div className=' w-[20vw] h-[20vh] bg-white rounded-md p-2 flex flex-col place-content-between'>
            <p className='text-black font-serif'>{text}</p>
            <div className=' flex w-[60%]  gap-x-5 '>
              <button className='bg-green-400 py-1 px-2 rounded-md font-semibold cursor-pointer hover:bg-green-600'>Edit</button>
              <button className='bg-red-600 py-1 px-2 rounded-md font-semibold cursor-pointer hover:bg-red-800' onClick={()=>deleteTodo(id)}>Delete</button>
            </div>

          </div>
          
        )
      })
     }

     </div>
     

    </div>
  )
}

export default TodoList