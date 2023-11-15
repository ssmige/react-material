import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addUser } from "../../redux/users/usersSlice";
import { useDispatch } from "react-redux";

export default function Users() {
  const [input, setInput] = useState("");

  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  function handleClic() {
    dispatch(
      addUser({
        name: input,
      })
    );
  }

  return (
    <div>
      <h3>Users</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleClic}>Add</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
