import React, { useState } from "react";
import { Todo } from "../../model";
import SingleTodo from "./SingleTodo";

const TodoList: React.FC = () => {

    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    };

    return (
        <div className="todo">
            <div className="flex-fixed">
                <h2> Todo</h2>
            </div>
            <div className="flex-fixed h-auto">
                <form className="input" onSubmit={handleAdd}>
                    <input type="input" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter a task" className='inputBox' />
                    <div className="relative-container">
                        <button className="todo-button" type="submit"> Go</button>
                    </div>
                </form>
            </div>
            <div className="flex-container h-100">
                <div className="container">
                    <div className="scroll">
                        {todos.map((todo) => (
                            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
