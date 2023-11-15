import { useEffect } from "react";
import "./App.css";
import Users from "./components/Users/Users";
import { useDispatch } from "react-redux";
import { getUsersAsync } from "./redux/users/usersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync(), []);
  });
  return (
    <div>
      <Users />
    </div>
  );
}

export default App;
