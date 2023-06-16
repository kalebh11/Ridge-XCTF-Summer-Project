import React from "react";

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void;
}
const TodoInput = ({todo, setTodo, handleAdd}: Props) =>
{
   
 return(
    <form className = "input" onSubmit = {handleAdd}>
        <input 
        type = "input" 
        value = {todo} 
        onChange = {(e) => setTodo(e.target.value)} 
        placeholder = "Enter a task"
        className = 'inputBox'/>
        <div className="relative-container">
            <button className = "todo-button" type = "submit"> Go</button>
        </div>
    </form>
 )

}

export default TodoInput;