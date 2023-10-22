import React, { useState } from "react";
import axios from "axios";
import Post from "../Post/Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <button onClick={getPosts}>Get Posts</button>
      {posts.map((post) => {
        return (
          <Post userId={post.userId} title={post.title} body={post.body} />
        );
      })}
    </div>
  );
}
