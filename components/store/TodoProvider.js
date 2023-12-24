import { useEffect, useState } from "react";
import TodoContext from "./todo-context";

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get-todos");
      const data = response.json();
      setTodos(data.result);
    };
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
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      const newTodo = {
        ...todoData,
        id: data.todo.insertedId,
        completed: false,
      };
      console.log(newTodo);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (err) {
      console.log("error adding todo", err);
    }
  };
  
  const removeTodoHandler = async (id) => {
    try {
      console.log(id);
      await fetch("/api/delete-todo", {
        method: "DELETE",
        body: JSON.stringify({ id: id.toString() }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Update local state after successful removal
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      setCompletedTodos((prevCompleted) =>
        prevCompleted.filter((todo) => todo.id !== id)
      );
    } catch (err) {
      console.log("error removing todo", err);
    }
  };

  const completeTodoHandler = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    setCompletedTodos((prevCompleted) => [...prevCompleted, completedTodo]);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    console.log("completed");
  };

  const contextValue = {
    todos: todos,
    completedTodos: completedTodos,
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