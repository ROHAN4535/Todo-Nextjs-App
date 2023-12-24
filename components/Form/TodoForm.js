import { useContext, useRef } from "react";
import classes from "./TodoForm.module.css";
import TodoContext from "../store/todo-context";

const TodoForm = (props) => {
  const titleRef = useRef();
  const todoCtx = useContext(TodoContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      id: Math.random().toString(),
      title: titleRef.current.value,
    };
    todoCtx.addTodo(todoData);
    console.log(todoData, "data from component");
  };
  return (
    <section className={classes.sec}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Task Name</label>
          <input
            name="text"
            id="title"
            placeholder="description"
            ref={titleRef}
          />
        </div>
        <button className={classes.btn}>Add Task</button>
      </form>
    </section>
  );
};

export default TodoForm;