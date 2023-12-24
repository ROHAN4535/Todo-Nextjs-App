import TodoForm from "../components/Form/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import TodoContext from "../components/store/todo-context";
import Head from "next/head";
import { Fragment, useContext } from "react";

//1) add task 2) complete task 3) delete task 4) show the complete task
const HomePage = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <Fragment>
      <Head>
        <title>Todo App</title>
        <meta
          name="description"
          content="Add your daily task which you want to do."
        />
      </Head>

      <TodoForm />
      <TodoList />
    </Fragment>
  );
};

export default HomePage;