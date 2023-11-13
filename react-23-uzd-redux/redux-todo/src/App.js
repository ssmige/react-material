import "./App.css";

import Todolist from "./components/TodoList/TodoList.js";
import AddTodo from "./components/AddTodo/AddTodo.js";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <Todolist />
    </div>
  );
}

export default App;
