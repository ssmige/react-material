import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Form from "../components/Form/Form";
import Button from "../components/Button/Button";

export default function Modal({
  children,
  isOpen,
  title,
  text,
  startIcon,
  variant,
}) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className={styles.socialButton}>
          <Button
            startIcon={<i class="fa-brands fa-google"></i>}
            text={"sign up"}
          />
          <Button
            startIcon={<i class="fa-brands fa-facebook"></i>}
            text={"sign up"}
          />
        </div>
        <h3>Or</h3>
        {children}
      </div>
    </div>,
    document.body
  );
}
