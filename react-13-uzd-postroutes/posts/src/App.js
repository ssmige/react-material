import PostList from "./components/PostList/PostList";
import PostPage from "./components/PostPage/PostPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <h1>Post List</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
