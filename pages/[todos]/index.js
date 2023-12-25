import { Fragment } from "react";
import Head from "next/head";
import TodoList from "../../components/TodoList/TodoList";

const CompletedTaskPage = () => {
  // const router = useRouter();
  // const { todos } = router.query;
  // console.log("from completed page",todos)
  return (
    <Fragment>
      <Head>
        <title>Completed Tasks</title>
        <meta name="description" content="View your completed tasks." />
      </Head>
      <TodoList />
    </Fragment>
  );
};

export default CompletedTaskPage;