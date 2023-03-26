import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';
import Footer from './components/Footer';
import React, { useState,useEffect  } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';


function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }
  const onDelete = (todo)=>{
    // console.log('Delete',todo)
    // cant work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1)
    settodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    // console.log('I am adding this todo', title,desc)
    let sno;
    if(todos.length===0){
     sno = 0;
    }
    else{
     sno = todos[todos.length-1].sno + 1
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodos([...todos,mytodo]);
    // console.log(mytodo) 
  }
  const [todos, settodos] = useState(
 initTodo)

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos)); 
  },[todos])

  return (
    <>
    <Router>
    <Header />

    <Switch>
          <Route exact path="/" render={()=>{
            return( 
              <>
                <Addtodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

  


    <Footer />
    </Router>
    </>
  );
}

export default App;
