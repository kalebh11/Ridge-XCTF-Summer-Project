import React from "react";


const TodoInput = () =>{
 return(
    <div className = "todo">
        <input type = "input" placeholder = "Enter a task"
        className = 'inputBox'/>
        <button className = "input_submit" type = "submit"> Go</button>
    </div>
 )

}

export default TodoInput;