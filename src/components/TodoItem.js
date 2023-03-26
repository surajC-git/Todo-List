import React from 'react'

const TodoItem = ({todo,onDelete}) => {
 
  return (
    <>
    <div>
      <h3>{todo.title}</h3>
      <h5>{todo.desc}</h5>
      <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <hr />
    </>
  )
}

export default TodoItem
