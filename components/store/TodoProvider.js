import { useEffect, useState } from "react";
import TodoContext from "./todo-context";

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
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
  useEffect(() => {
    fetchData();
  }, []);

  const addTodoHandler = async (todoData) => {
    try {
      const response = await fetch("/api/new-todo", {
        method: "POST",
        body: JSON.stringify(todoData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add todo.");
      }

      const data = await response.json();
      setTodos((prevTodos) => [...prevTodos, todoData]);

    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const removeTodoHandler = async (id) => {
    const res = await fetch(`/api/delete-todo/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete todo.");
    }
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
  };

  const completeTodoHandler = async (id) => {
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

  const contextValue = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    completeTodo: completeTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;