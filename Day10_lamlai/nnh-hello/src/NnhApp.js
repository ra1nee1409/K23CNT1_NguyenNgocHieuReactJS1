import { ThemeProvider } from "./context/NnhThemeContext";
import NnhThemeToggle from "./components/NnhThemeToggle";
import NnhTodoList from "./components/NnhTodoList";

function NnhApp() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1 className="title">miniprojectjs</h1>
        <h2>Quản Lý Công Việc</h2>
        <NnhThemeToggle />
        <NnhTodoList />
      </div>
    </ThemeProvider>
  );
}

export default NnhApp;
