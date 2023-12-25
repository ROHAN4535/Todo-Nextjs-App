import { useContext, useEffect, useState } from "react";
import classes from "./TodoList.module.css";
import TodoContext from "../store/todo-context";

const TodoList = ({ filterStatus }) => {
  const todoCtx = useContext(TodoContext);
  // const searchParams = useSearchParams();
  // const todosFilter = searchParams.get("todos");

  // let filterTodos = todoCtx.todos;
  // if (todosFilter === "completed") {
  //   filterTodos = filterTodos.filter((todo) => todo.completed);
  // }

  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const response = await fetch("/api/get-todos");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch todos.");
  //       }

  //       const data = await response.json();
  //       setTodos(data.todos);
  //     } catch (error) {
  //       console.error("Error fetching todos:", error);
  //     }
  //   };
  //   fetchTodos();
  // }, []);

  const filteredTodos = todoCtx.todos.filter((todo) =>
    filterStatus === "completed"
      ? todo.status === "completed"
      : todo.status !== "completed"
  );
  return (
    <ul className={classes.list}>
      {filteredTodos.map((todo) => (
        <li key={todo._id}>
          <div
            className={`${classes["circle-icon"]} ${
              todo.status === "completed" ? classes.completed : ""
            }`}
            onClick={() => {
              todoCtx.completeTodo(todo._id);
            }}
          />

          <label htmlFor={`todo-${todo._id}`}>{todo.title}</label>
          <button
            className={classes.btn}
            onClick={() => {
              todoCtx.removeTodo(todo._id);
            }}
          >
            Remove Task
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;