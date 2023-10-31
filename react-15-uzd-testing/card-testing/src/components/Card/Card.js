import React from "react";
import Style from "./Card.css";

export default function Card() {
  const twitterURL = `https://twitter.com`;
  const FacebookURL = `https://www.facebook.com`;

  return (
    <div className="card">
      <div className="cardText">
        <h1>
          "There are two hard things in computer science: cache invalidation,
          naming things and off-by-one errors."
        </h1>
        <p>Jeff Atwwod</p>
      </div>
      <div className="buttons">
        <a href={twitterURL} target="_blank" rel="noopener noreferrer">
          <button>
            View on <span style={{ color: "#1877f2" }}>Twitter</span>
          </button>
        </a>
        <a href={FacebookURL} target="_blank" rel="noopener noreferrer">
          <button>
            Share on <span style={{ color: "#1877f2" }}>Facebook</span>
          </button>
        </a>
      </div>
    </div>
  );
}
