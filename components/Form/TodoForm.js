import { useRef } from "react";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
  const titleRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const todoData = {
      title: titleRef.current.value,
    };
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

      // You can handle success here if needed
      const data = await response.json()
      console.log(data)

    } catch (error) {
      console.error("Error adding todo:", error);
    }

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