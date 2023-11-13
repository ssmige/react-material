import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import axios from "axios";

const HOST = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(HOST).then((result) => {
      setTodos(result.data);
    });

    // .catch((err) => alert(err));
  }, []);
  return (
    <div>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
