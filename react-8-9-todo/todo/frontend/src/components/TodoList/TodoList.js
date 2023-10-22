import React from "react";

import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos, setTodos, isFinished }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          title={todo.title}
          description={todo.description}
          key={todo._id}
          id={todo._id}
          setTodos={setTodos}
          isFinished={isFinished}
        />
      ))}
    </div>
  );
}
