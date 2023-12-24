import React from "react";

const TodoContext = React.createContext({
  todos: [],
  completedTodos: [],
  addTodo: () => {},
  removeTodo: () => {},
  completeTodo: () => {},
});

export default TodoContext;