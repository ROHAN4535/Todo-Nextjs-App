import { useContext } from "react";
import TodoContext from "../store/todo-context";
import classes from "./TodoList.module.css";

const TodoList = ({ todos, todosFilter }) => {
  const todoCtx = useContext(TodoContext);
  // const searchParams = useSearchParams();
  // const todosFilter = searchParams.get("todos");

  // let filterTodos = todoCtx.todos;
  // if (todosFilter === "completed") {
  //   filterTodos = filterTodos.filter((todo) => todo.completed);
  // }

  const filterTodos =
  todosFilter === "completed" ? todoCtx.completedTodos : todos;

  return (
    <ul className={classes.list}>
      {console.log(filterTodos)}
      {filterTodos &&
        filterTodos.map((todo) => (
          <li key={todo.id}>
            {todosFilter !== "completed" && (
              <div
                className={`${classes["circle-icon"]} ${
                  todo.completed ? classes.completed : ""
                }`}
                onClick={() => todoCtx.completeTodo(todo.id)}
              />
            )}
            <label
              htmlFor={`todo-${todo.id}`}
              className={todo.completed ? classes.completed : ""}
            >
              {todo.title}
            </label>
            <button
              className={classes.btn}
              onClick={() => todoCtx.removeTodo(todo.id)}
            >
              Remove Task
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;