import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

export default function Todolist() {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
