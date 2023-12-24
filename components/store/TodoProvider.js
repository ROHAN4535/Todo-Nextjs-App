import { useState } from "react";
import TodoContext from "./todo-context";

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodoHandler = (todoData) => {
    const newTodo = { ...todoData, id: new Date().getTime(), completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log(newTodo)
  };
  const removeTodoHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    setCompletedTodos((prevCompleted) => prevCompleted.filter((todo) => todo.id !== id));
    console.log('removed from provider');
  };

  const completeTodoHandler = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    setCompletedTodos((prevCompleted) => [...prevCompleted, completedTodo]);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    console.log('completed');
  };

  const contextValue = {
    todos: todos,
    completedTodos:completedTodos,
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