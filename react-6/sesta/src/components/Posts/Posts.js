import React, { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return <div>Posts</div>;
}
