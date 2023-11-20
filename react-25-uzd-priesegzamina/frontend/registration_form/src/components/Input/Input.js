import React from "react";
import styles from "./Input.module.css";

export default function Input({
  value,
  type,
  onChange,
  placeholder,
  startIcon,
}) {
  return (
    <>
      <div className={styles.wrapper}>
        {startIcon}
        <input
          type={type}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
