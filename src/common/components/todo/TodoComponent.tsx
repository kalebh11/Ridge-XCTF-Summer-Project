import { useEffect, useState, FC } from "react";
import { Todo } from "../../../model";
import SingleTodo from "./SingleTodo";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../App";
const addTodo = async (todo: Todo) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const TodoList: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchPost = async () => {
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData: any[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      newData.map((item) => {
        setTodos((prevArray) => [...prevArray, item.todo]);
      });

      console.log(todos, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
      addTodo({ id: Date.now(), todo, isDone: false });
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
