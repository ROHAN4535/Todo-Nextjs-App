import { useEffect, useState } from "react";
import classes from "./TodoList.module.css";

const TodoList = () => {
  // const searchParams = useSearchParams();
  // const todosFilter = searchParams.get("todos");

  // let filterTodos = todoCtx.todos;
  // if (todosFilter === "completed") {
  //   filterTodos = filterTodos.filter((todo) => todo.completed);
  // }
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("/api/get-todos");
        if (!response.ok) {
          throw new Error("Failed to fetch todos.");
        }

        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const completedTodo = async (id) => {
    console.log("Completing Todo ID:", id);
    try {
      const response = await fetch(`/api/complete-todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "completed" }),
      });
      if (!response.ok) {
        throw new Error("Failed to update todo status.");
      }

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, status: "completed" } : todo
        )
      );
    } catch (err) {
      console.log("Error updating todo status:", err);
    }
  };

  const deleteHandler = async (id) => {
    const res = await fetch(`/api/delete-todo/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete todo.");
    }
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
  };

  return (
    <ul className={classes.list}>
      {todos.map((todo) => (
        <li key={todo._id}>
          <div
            className={`${classes["circle-icon"]} ${
              todo.status === "completed" ? classes.completed : ""
            }`}
            onClick={() => {
              completedTodo(todo._id);
            }}
          />
          <label htmlFor={`todo-${todo._id}`}>{todo.title}</label>
          <button
            className={classes.btn}
            onClick={() => {
              deleteHandler(todo._id);
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