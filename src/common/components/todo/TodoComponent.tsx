import { useEffect, useState, FC } from "react";
import SingleTodo from "./SingleTodo";
import { Todo, fetchAllTodos, saveTodo } from "../../todo.modal";
export const TodoList: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    fetchAllTodos().then((todos: Todo[]) => {
      setTodos(todos);
    });
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      let newTodo: Todo = new Todo();
      newTodo.todo = todo;
      newTodo.isDone = false;
      setTodo("");
      let result = await saveTodo(newTodo);
      setTodos([...todos, result]);
    }
  };

  return (
    <div className="todo">
      <div className="flex-fixed">
        <span className="todo-header"> Todo</span>
      </div>
      <div className="flex-fixed h-auto">
        <form className="input" onSubmit={handleAdd}>
          <input
            type="input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task"
            className="inputBox"
          />
          <div className="relative-container">
            <button className="todo-button" type="submit">
              {" "}
              Go
            </button>
          </div>
        </form>
      </div>
      <div className="flex-container h-100">
        <div className="container">
          <div className="scroll">
            {todos.map((todo) => (
              <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
