import React from "react";

export default function Post({ userId, title, body }) {
  return (
    <div>
      <h3>{userId} </h3>
      <h3>{title} </h3>
      <p>{body} </p>
      <hr />
    </div>
  );
}
