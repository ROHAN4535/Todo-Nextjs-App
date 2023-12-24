import Link from "next/link";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
//  const searchParams =  useSearchParams()
//  const todosFilter = searchParams.get('todos')
//  console.log('navbar'+ todosFilter)
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todo App</div>
      <nav>
        <ul>
          <li>
            <Link href="/">TodoList</Link>
          </li>
          <li>
            <Link href="/completed">Completed Task</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;