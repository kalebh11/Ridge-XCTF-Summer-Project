import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { db } from "../../App";
import {
  Firestore,
  QuerySnapshot,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (e: any, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const findTodoData = async (id: number) => {
    let todoFirestoreID;
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData: any[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData);
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].todo.id === id) {
          todoFirestoreID = newData[i].id;
        }
      }
    });
    return todoFirestoreID;
  };
  const deleteDocument = async (id: number) => {
    let todoTest: any = await findTodoData(id);
    console.log(todoTest);
    const docIdToDelete = todoTest; // Replace with the actual document ID you want to delete
    const docRef = doc(db, "todos", docIdToDelete);

    deleteDoc(docRef)
      .then(() => {
        console.log("Doc deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (id: number) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
    deleteDocument(id);
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="task" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="text edit"
        />
      ) : todo.isDone ? (
        <s className="text">{todo.todo}</s>
      ) : (
        <span className="text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={(e) => handleDone(e, todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
