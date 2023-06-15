import React from "react";
import "./App.scss";
import InputField from "./components/InputField";
import TodoInput from "./components/TodoInput";


const App: React.FC = () => {
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
           <TodoInput/>
        </div>
        

      </div>
    </div>
  )
}

export default App;
