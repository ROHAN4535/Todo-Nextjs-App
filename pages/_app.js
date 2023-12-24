import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import TodoProvider from "../components/store/TodoProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <TodoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoProvider>
  );
};

export default MyApp;