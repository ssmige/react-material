// import React, { useState } from "react";
// import axios from "axios";

// const HOST = "https://jsonplaceholder.typicode.com/todos";

const TodoItem = ({ todos }) => {
  // const [isChecked, setIsChecked] = useState(completed);

  // async function deleteButtonHandler() {
  //   try {
  //     await axios.delete(`${HOST}/${id}`);
  //     setTodos((prev) => prev.filter((todo) => todo.id !== id));
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  // async function checkboxChange(e) {
  //   try {
  //     await axios.put(`${HOST}/${id}`);
  //     setTodos((prev) => {
  //       const index = prev.findIndex((todo) => todo.id === id);
  //       prev[index].completed = !e.target.checked;
  //       setIsChecked(!e.target.checked);
  //       return prev;
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }
  // }
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          {todo.title}
          <input type="checkbox" checked={todo.completed} />
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
