import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function PostPage() {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => setPost(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <Link to="/">Back to Post List</Link>
      <h3>{post.title} </h3>
      <p>{post.body} </p>
    </div>
  );
}
