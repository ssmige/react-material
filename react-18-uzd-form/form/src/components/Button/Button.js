import React from "react";
import styles from "./Button.module.css";

export default function Button({ onClick, text, variant }) {
  return (
    <button
      style={{ backgrounColor: variant === "primary" ? "#4f4fc4" : "grey" }}
      className={styles.button}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
