import React from "react";

const TodoContext = React.createContext({
  todos: [],
  addTodo: (item) => {},
  removeTodo: (id) => {},
  completeTodo: (id) => {},
});

export default TodoContext;