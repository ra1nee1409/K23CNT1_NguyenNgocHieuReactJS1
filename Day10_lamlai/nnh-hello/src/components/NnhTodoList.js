import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/NnhTodoReducer";
import NnhAddTodo from "./NnhAddTodo";
import NnhTodoItem from "./NnhTodoItem";

function NnhTodoList() {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>Danh Sách Công Việc</h2>
            <NnhAddTodo dispatch={dispatch} />
            <ul>
                {todos.map(todo => (
                    <NnhTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}

export default NnhTodoList;