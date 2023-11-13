import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <div>
      <TodoItem todos={todos} />
      {/* {todos.map((todo) => (
        <TodoItem
          title={todo.title}
          key={todo.id}
          id={todo.id}
          setTodos={setTodos}
        />
      ))} */}
    </div>
  );
}
