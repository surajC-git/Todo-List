import React, { useState } from 'react'

const Addtodo = (props) => {
    const [title,settitle] = useState('')
    const [desc,setdesc] = useState('')
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description cannot be blank')
        }
        else{
            props.addTodo(title,desc);
           settitle('');
           setdesc('');
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit} className='my-2'>
                <div className="my-2 form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="my-2 form-control" id="title" aria-describedby="emailHelp" placeholder="Add Title" />
                </div>
                <div className="my-2 form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" onChange={(e)=>{setdesc(e.target.value)}} value={desc} className="my-2 form-control" id="desc" placeholder="Add Description" />
                </div>
                
                <button type="submit" className="my-2 btn-sm btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default Addtodo
