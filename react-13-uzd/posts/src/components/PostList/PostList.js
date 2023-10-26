import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export default function PostList() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => setPostList(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <ul>
        {postList.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
