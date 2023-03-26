import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let mystyle = {
    minHeight: '70vh',
  }
  return (
    <div className='container my-5' style={mystyle}>
      <h1 className='my-3'>Todo List</h1>
      {props.todos.length===0? 'No Todos to Display':
      props.todos.map((todo)=>{
        return (
        <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })}
      
    </div>
  )
}

export default Todos
