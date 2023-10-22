import React, { useState } from "react";
import axios from "axios";

const HOST = "http://localhost:3001/todos";

export default function TodoItem({
  title,
  description,
  id,
  isFinished = false,
  setTodos,
}) {
  const [isCheked, setIsCheked] = useState(isFinished);

  async function deleteButtonHandler() {
    try {
      await axios.delete(`${HOST}/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      alert(error);
    }
  }

  async function checkboxChange(e) {
    try {
      await axios.put(`${HOST}/${id}`);

      setTodos((prev) => {
        console.log(e.target.checked);
        const index = prev.findIndex((todo) => todo._id === id);
        prev[index].isFinished = !e.target.checked;
        setIsCheked(!e.target.checked);
        return prev;
      });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h3>{title} </h3>
      <p>{description} </p>
      <input type="checkbox" onChange={checkboxChange} checked={isCheked} />
      <button onClick={deleteButtonHandler}>Delete</button>
    </div>
  );
}
