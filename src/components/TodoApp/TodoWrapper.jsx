import React, { useState } from 'react'
import TodoForm from "./TodoForm"
import TodoList from './TodoList'
import toast,{Toaster} from 'react-hot-toast'


const TodoWrapper = () => {
    const [todos,setTodos]=useState("");
    const [allTodos,setAllTodos]= useState([]);

    

    const addTodo = (e) =>{
        e.preventDefault();
        setAllTodos([...allTodos,{id:Date.now(),text:todos}])
        toast.success("Todo Added")
        setTodos("")
    
    }

    const deleteTodo = (id) =>{
      const FilterTodos = allTodos.filter((item)=>item.id!=id)
      setAllTodos(FilterTodos)
      toast('Good Job!', {
        icon: '😀',
      });
    } 

    const editTodo = (id) =>{
     let editArray= allTodos.filter((item)=>item.id==id)
     setTodos(editArray[0].text);
     //delete todos after edit render
     const FilterTodos = allTodos.filter((item)=>item.id!=id)
      setAllTodos(FilterTodos)
    }

  return (
    <div className='bg-gray-900 h-[90vh] p-5 overflow-x-hidden '>
      <div>
        <Toaster/>
      </div>
        <div className='flex items-center place-content-center'>
        <TodoForm todos={todos} setTodos={setTodos} addTodo={addTodo}/>
        </div>
        <div className='w-[100vw] h-[1px] bg-gray-300 mt-5 mb-5'></div>
        <TodoList allTodos={allTodos} setAllTodos={setAllTodos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  )
}

export default TodoWrapper