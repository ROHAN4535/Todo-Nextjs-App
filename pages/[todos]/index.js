import { Fragment } from "react";
import Head from "next/head";
import TodoList from "../../components/TodoList/TodoList";
import { useRouter } from "next/router";

const CompletedTaskPage = () => {
  const router = useRouter();
  const { todos } = router.query;
  console.log("from completed page",todos)
  return (
    <Fragment>
      <Head>
        <title>Completed Tasks</title>
        <meta name="description" content="View your completed tasks." />
      </Head>
      <TodoList todosFilter={todos} />
    </Fragment>
  );
};

export default CompletedTaskPage;