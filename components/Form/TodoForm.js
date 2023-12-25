import { useContext, useRef } from "react";
import classes from "./TodoForm.module.css";
import TodoContext from "../store/todo-context";

const TodoForm = () => {
  const titleRef = useRef();

  const todoCtx = useContext(TodoContext);

  const submitHandler = async (event) => {
    event.preventDefault();

    const todoData = {
      title: titleRef.current.value,
      status: "incomplete",
    };
    
    todoCtx.addTodo(todoData);

    titleRef.current.value = "";
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