import React, { useState } from "react";
import axios from "axios";

const HOST = "https://jsonplaceholder.typicode.com/todos";

export default function AddTodo() {
  const [title, setTitle] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    try {
      await axios.post(HOST, { title });
    } catch (error) {}
  }

  return (
    <form onSubmit={submitHandler}>
      <label name="inputTodo">Add a Todo</label>
      <input
        type="text"
        placeholder="Add a todo"
        name="inputTodo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button>Add Todo </button>
    </form>
  );
}
