import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todo/todoSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
