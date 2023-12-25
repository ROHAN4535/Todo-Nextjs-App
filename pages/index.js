import TodoForm from "../components/Form/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import Head from "next/head";
import { Fragment } from "react";

//1) add task 2) complete task 3) delete task 4) show the complete task
const HomePage = () => {
  // const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //   const fetchTodos = async () => {
    //     const response = await fetch("/api/get-todos");
    //     const data = await response.json();
    //     setTodos(data.todos);
    //     console.log(data.todos)
    //   };
  
      // fetchTodos();
  
    // }, []);
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
      <TodoList filterStatus="incomplete"  />
    </Fragment>
  );
};

export default HomePage;