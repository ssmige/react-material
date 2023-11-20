import React, { useState } from "react";
import styles from "./Button.module.css";

export default function Button({ onClick, text, startIcon }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {startIcon} {text}
    </button>
  );
}
