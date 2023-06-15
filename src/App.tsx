import React, { useState } from "react";
import "./App.scss";
import InputField from "./components/InputField";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  
  const[todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo){
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
    setTodo("");
    }
  };
   
  console.log(todos)
  
  return (
    <div className="App">
      <div className="top-bar" >
        <div className="header">
          <h1>Ridge XCTF</h1>
        </div>

      </div>
      <div className="todo">
        <div className="side-bar">

          <h2> Todo</h2>
           <TodoInput todo = {todo} setTodo = {setTodo} handleAdd={handleAdd} />
           <TodoList todos={todos} setTodos = {setTodos}/>
        </div>
        

      </div>
    </div>
  )
}

export default App;
