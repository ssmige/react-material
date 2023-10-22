import React, { useState } from "react";
import axios from "axios";

const HOST = "http://localhost:3001/todos";

export default function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(HOST, { title, description });

      setTodos((prev) => [...prev, data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="titleInput">Title</label>
      <input
        type="text"
        id="titleInput"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="descriptionInput">Description</label>
      <input
        type="text"
        id="descriptionInput"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
