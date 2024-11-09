import React from 'react'

const TodoForm = ({todos,setTodos,addTodo}) => {
  return (
    <div className='flex flex-col shadow-sm shadow-white w-[70vw] md:w-[25vw] h-[15vh] md:h-[20vh] items-center place-content-around bg-green-200 rounded-md'>
        <h1 className='font-bold'>Add Your Task Buddy</h1>
        <div className='flex   place-content-center w-[100%]'>
            <input type="text" value={todos} onChange={(e)=>setTodos(e.target.value)} className='shadow-md w-[70%] border-none outline-none' />
            <button onClick={addTodo} className='text-center bg-gray-900 text-white p-1 cursor-pointer '>ADD</button>
        </div>

    </div>
  )
}

export default TodoForm