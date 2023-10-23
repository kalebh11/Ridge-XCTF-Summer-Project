import { FirestoreDataConverter, addDoc, collection, deleteDoc, doc, getDocs } from "@firebase/firestore";
import { db } from "./firebase";

export class Todo{
    id: string;
    todo: string;
    isDone: boolean;
}

export const todoConverter: FirestoreDataConverter<Todo> = {
    toFirestore: (todo: Todo) => {
        return {
        todo: todo.todo,
        isDone: todo.isDone
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        let todo = new Todo();
        todo.id = snapshot.id;
        todo.todo = data.todo;
        todo.isDone = data.isDone;
        return todo;
    },
};
const todoCollection = collection(db, "todos").withConverter(todoConverter);
export const fetchAllTodos = async () => {
    let querySnapshot = await getDocs(todoCollection);
    let todos: Todo[] = [];
    querySnapshot.docs.forEach((doc)=> {
        todos.push(doc.data());
    });
    return todos;
};
export const saveTodo = async (todo: Todo) => {
    try {
        const docRef = await addDoc(todoCollection, todo);
        console.log("Document written with ID: ", docRef.id);
        todo.id = docRef.id;
        return todo;
    } catch (error) {
        console.error("Error adding document: ", error);
    }
    return undefined;
};
export const deleteTodo = async (todoId: string) => {
    try {
        await deleteDoc(doc(todoCollection, todoId));
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}