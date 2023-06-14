import React from "react";
import "./App.scss";
import InputField from "./components/InputField";
const App: React.FC = () => {
  return (
    <div className = "top-bar App" >
   <span className = "heading">Ridge XCTF</span>
   <InputField />
    </div>
   
  )
}

export default App;
