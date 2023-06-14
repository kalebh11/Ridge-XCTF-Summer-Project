import React from "react";
import "./App.scss";
import InputField from "./components/InputField";
const App: React.FC = () => {
  return (
    <form className = "top-bar" >
   <h1>Ridge XCTF</h1> 
   <InputField/>
    </form>
   
  )
}

export default App;
