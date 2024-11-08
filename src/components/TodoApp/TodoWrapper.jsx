import React, { useState } from 'react'
import TodoForm from "./TodoForm"
import TodoList from './TodoList'

const TodoWrapper = () => {
    const [todos,setTodos]=useState("");
    const [allTodos,setAllTodos]= useState([]);

    const addTodo = (e) =>{
        e.preventDefault();
        setAllTodos([...allTodos,{id:Date.now(),text:todos}])
        setTodos("")
    
    }

    const deleteTodo = (e) =>{
        

    } 

  return (
    <div className='bg-gray-900 h-[90vh] p-5 '>
        <div className='flex items-center place-content-center'>
        <TodoForm todos={todos} setTodos={setTodos} addTodo={addTodo}/>

        </div>
        <TodoList allTodos={allTodos} setAllTodos={setAllTodos}/>
    </div>
  )
}

export default TodoWrapper