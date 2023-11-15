import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Todos from "./components/Todos/Todos";
import { getTodoAsync } from "./redux/todos/todosSlice";

function App() {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getTodoAsync());
  }, []);

  return (
    <div>
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
